"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";

type Slot = {
    startAt: string;
};

type ImprovedSchedulerProps = {
    serviceName: string;
    lengthLabel?: string;
    price?: string;
    duration?: string;
    description?: string;
    onClose: () => void;
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatTimeLabel(iso: string) {
    const local = new Date(iso);
    return local.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
    });
}

function formatDateLabel(date: Date) {
    return date.toLocaleDateString([], {
        weekday: "long",
        month: "short",
        day: "numeric",
    });
}

export default function ImprovedScheduler({
    serviceName,
    lengthLabel,
    price,
    duration,
    description,
    onClose,
}: ImprovedSchedulerProps) {
    const today = useMemo(() => new Date(), []);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [slots, setSlots] = useState<Slot[]>([]);
    const [weekOffset, setWeekOffset] = useState(0);

    // Generate week dates starting from today
    const weekDates = useMemo(() => {
        const dates: Date[] = [];
        const startDate = new Date(today);
        startDate.setDate(startDate.getDate() + weekOffset * 7);
        
        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            date.setDate(date.getDate() + i);
            dates.push(date);
        }
        return dates;
    }, [today, weekOffset]);

    useEffect(() => {
        if (!selectedDate) return;

        let ignore = false;
        async function loadSlots() {
            if (!selectedDate) return;
            setLoading(true);
            try {
                const dateParam = selectedDate.toISOString().slice(0, 10);
                const response = await fetch(`/api/calendly/availability?date=${dateParam}&event_type=placeholder`);
                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`);
                }
                const data: { slots: Slot[] } = await response.json();
                if (ignore) return;
                setSlots(data.slots);
            } catch (err) {
                if (ignore) return;
                console.error("Failed to load slots", err);
                setSlots([]);
            } finally {
                if (!ignore) setLoading(false);
            }
        }
        loadSlots();
        return () => {
            ignore = true;
        };
    }, [selectedDate]);

    function handleDateClick(date: Date) {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        if (date < now) return;
        setSelectedDate(date);
        setSelectedSlot(null);
    }

    function handleSlotSelect(startAt: string) {
        setSelectedSlot(startAt);
    }

    function handleContinue() {
        if (!selectedSlot) return;
        // Open Calendly with pre-selected date/time
        const calendlyUrl = `https://calendly.com/djonretglo/30min?date=${selectedDate?.toISOString().slice(0, 10)}`;
        window.open(calendlyUrl, "_blank");
    }

    const selectedDayKey = selectedDate?.toISOString().slice(0, 10);

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                <button
                    type="button"
                    onClick={onClose}
                    className="text-neutral-600 hover:text-neutral-900"
                    aria-label="Back"
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h2 className="text-lg font-semibold text-neutral-900">Date & Time</h2>
                <div className="w-6" />
            </div>

            {/* Appointment Details */}
            <div className="p-6 border-b border-neutral-200 bg-neutral-50">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">Appointment</p>
                <div className="bg-white rounded-lg p-4 shadow-sm relative">
                    <h3 className="font-semibold text-neutral-900">{serviceName}</h3>
                    {lengthLabel && (
                        <p className="text-sm text-neutral-600 mt-1">{lengthLabel}</p>
                    )}
                    {(duration || price) && (
                        <p className="text-sm text-neutral-600 mt-1">
                            {duration && <span>{duration}</span>}
                            {duration && price && <span> @ </span>}
                            {price && <span>{price}</span>}
                        </p>
                    )}
                    {description && (
                        <p className="text-xs text-neutral-500 mt-2">{description}</p>
                    )}
                </div>
            </div>

            {/* Week Navigation */}
            <div className="p-6 border-b border-neutral-200">
                <div className="flex items-center justify-between mb-4">
                    <button
                        type="button"
                        onClick={() => setWeekOffset(weekOffset - 1)}
                        disabled={weekOffset === 0}
                        className="p-2 hover:bg-neutral-100 rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Previous week"
                    >
                        <svg className="h-5 w-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                        {weekOffset === 0 ? "This Week" : "Next Week"}
                    </p>
                    <button
                        type="button"
                        onClick={() => setWeekOffset(weekOffset + 1)}
                        className="p-2 hover:bg-neutral-100 rounded-full transition"
                        aria-label="Next week"
                    >
                        <svg className="h-5 w-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-2">
                    {weekDates.map((date, idx) => {
                        const isSelected = selectedDayKey === date.toISOString().slice(0, 10);
                        const now = new Date();
                        now.setHours(0, 0, 0, 0);
                        const isPast = date < now;
                        const isToday = date.toISOString().slice(0, 10) === today.toISOString().slice(0, 10);

                        return (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => handleDateClick(date)}
                                disabled={isPast}
                                className={`flex flex-col items-center py-3 px-2 rounded-lg transition ${
                                    isSelected
                                        ? "bg-neutral-900 text-white"
                                        : isPast
                                        ? "text-neutral-300 cursor-not-allowed"
                                        : "text-neutral-700 hover:bg-neutral-100"
                                } ${isToday && !isSelected ? "ring-2 ring-neutral-300" : ""}`}
                            >
                                <span className="text-xs font-medium mb-1">{WEEKDAYS[date.getDay()]}</span>
                                <span className="text-lg font-semibold">{date.getDate()}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Time Slots */}
            <div className="flex-1 overflow-y-auto p-6">
                {!selectedDate ? (
                    <div className="flex items-center justify-center h-full text-sm text-neutral-500">
                        Select a date to view available times
                    </div>
                ) : loading ? (
                    <div className="flex items-center justify-center h-full text-sm text-neutral-500">
                        Loading available times...
                    </div>
                ) : slots.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-sm text-neutral-500">
                        No available times for this date
                    </div>
                ) : (
                    <>
                        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                            Time Zone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {slots.map((slot) => {
                                const isSelected = selectedSlot === slot.startAt;
                                return (
                                    <button
                                        key={slot.startAt}
                                        type="button"
                                        onClick={() => handleSlotSelect(slot.startAt)}
                                        className={`rounded-lg border px-4 py-3 text-sm font-medium transition ${
                                            isSelected
                                                ? "border-neutral-900 bg-neutral-900 text-white"
                                                : "border-neutral-300 text-neutral-700 hover:border-neutral-500"
                                        }`}
                                    >
                                        {formatTimeLabel(slot.startAt)}
                                    </button>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>

            {/* Continue Button */}
            {selectedSlot && (
                <div className="p-6 border-t border-neutral-200 bg-white">
                    <Button
                        type="button"
                        onClick={handleContinue}
                        className="w-full rounded-full bg-black py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800"
                    >
                        Continue
                    </Button>
                </div>
            )}
        </div>
    );
}
