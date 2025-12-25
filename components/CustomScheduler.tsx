"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";

type Slot = {
    startAt: string;
};

type CustomSchedulerProps = {
    serviceName: string;
    lengthLabel?: string;
    eventTypeUri: string;
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function formatMonthLabel(year: number, month: number) {
    return `${MONTHS[month]} ${year}`;
}

function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

function getCalendarCells(year: number, month: number) {
    const totalDays = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();
    const cells: Array<{ key: string; day?: number; date?: Date }> = [];

    for (let i = 0; i < firstDay; i++) {
        cells.push({ key: `empty-${i}` });
    }

    for (let day = 1; day <= totalDays; day++) {
        const date = new Date(year, month, day);
        cells.push({ key: `day-${day}`, day, date });
    }

    return cells;
}

function formatTimeLabel(iso: string) {
    const local = new Date(iso);
    return local.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
    });
}

function detectPeriod(iso: string) {
    const hour = new Date(iso).getHours();
    if (hour < 12) return "Morning";
    if (hour < 17) return "Afternoon";
    return "Evening";
}

export default function CustomScheduler({ serviceName, lengthLabel, eventTypeUri }: CustomSchedulerProps) {
    const today = useMemo(() => new Date(), []);
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [slots, setSlots] = useState<Slot[]>([]);
    const [step, setStep] = useState<"date" | "details">("date");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        notes: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!selectedDate) return;

        let ignore = false;
        async function loadSlots() {
            if (!selectedDate) return;
            setLoading(true);
            setError(null);
            try {
                const dateParam = selectedDate.toISOString().slice(0, 10);
                const response = await fetch(`/api/calendly/availability?date=${dateParam}&event_type=${encodeURIComponent(eventTypeUri)}`);
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
                setError("Unable to load available times. Please try again.");
            } finally {
                if (!ignore) setLoading(false);
            }
        }
        loadSlots();
        return () => {
            ignore = true;
        };
    }, [selectedDate, eventTypeUri]);

    const groupedSlots = useMemo(() => {
        const groups: Record<string, Slot[]> = {
            Morning: [],
            Afternoon: [],
            Evening: [],
        };
        slots.forEach((slot) => {
            const period = detectPeriod(slot.startAt);
            groups[period].push(slot);
        });
        return groups;
    }, [slots]);

    const cells = useMemo(() => getCalendarCells(currentYear, currentMonth), [currentYear, currentMonth]);

    function goToPreviousMonth() {
        setCurrentMonth((prev) => {
            const next = prev - 1;
            if (next < 0) {
                setCurrentYear((year) => year - 1);
                return 11;
            }
            return next;
        });
    }

    function goToNextMonth() {
        setCurrentMonth((prev) => {
            const next = prev + 1;
            if (next > 11) {
                setCurrentYear((year) => year + 1);
                return 0;
            }
            return next;
        });
    }

    function handleDayClick(date?: Date) {
        if (!date) return;
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
        setStep("details");
    }

    function handleBack() {
        setStep("date");
        setError(null);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!selectedSlot || !formData.name || !formData.email) return;

        setSubmitting(true);
        setError(null);

        try {
            const response = await fetch("/api/calendly/schedule", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    eventTypeUri,
                    startTime: selectedSlot,
                    name: formData.name,
                    email: formData.email,
                    notes: formData.notes,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to schedule appointment");
            }

            // If Calendly returns a booking URL, open it
            if (result.bookingUrl) {
                window.open(result.bookingUrl, "_blank");
                setSuccess(true);
            } else {
                setSuccess(true);
            }
        } catch (err) {
            console.error("Scheduling error", err);
            setError(err instanceof Error ? err.message : "Failed to schedule appointment. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }

    const selectedDayKey = selectedDate?.toISOString().slice(0, 10);
    const hasSlots = slots.length > 0;

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Booking Link Created!</h3>
                <p className="mt-2 text-sm text-neutral-600">
                    A new tab has opened to complete your booking with Calendly.
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                    You can close this window once you've completed your booking.
                </p>
            </div>
        );
    }

    if (step === "details") {
        return (
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={handleBack}
                        className="text-neutral-600 hover:text-neutral-900"
                        aria-label="Back to calendar"
                    >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-900">Enter Your Details</h3>
                        <p className="text-sm text-neutral-600">
                            {selectedDate?.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })} at{" "}
                            {formatTimeLabel(selectedSlot!)}
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-neutral-700 mb-1">
                            Additional Notes (Optional)
                        </label>
                        <textarea
                            id="notes"
                            rows={3}
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                            placeholder="Any special requests or questions?"
                        />
                    </div>

                    {error && (
                        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={submitting || !formData.name || !formData.email}
                        className="w-full rounded-full bg-black py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-500"
                    >
                        {submitting ? "Scheduling..." : "Confirm Appointment"}
                    </Button>
                </form>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        onClick={goToPreviousMonth}
                        className="p-2 hover:bg-neutral-100 rounded-full transition"
                        aria-label="Previous month"
                    >
                        <svg className="h-5 w-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h3 className="text-base font-semibold text-neutral-900">
                        {formatMonthLabel(currentYear, currentMonth)}
                    </h3>
                    <button
                        type="button"
                        onClick={goToNextMonth}
                        className="p-2 hover:bg-neutral-100 rounded-full transition"
                        aria-label="Next month"
                    >
                        <svg className="h-5 w-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-1">
                    {WEEKDAYS.map((day) => (
                        <div key={day} className="text-center text-xs font-medium text-neutral-500 py-2">
                            {day}
                        </div>
                    ))}
                    {cells.map((cell) => {
                        if (!cell.date) {
                            return <div key={cell.key} />;
                        }
                        const isSelected = selectedDayKey === cell.date.toISOString().slice(0, 10);
                        const now = new Date();
                        now.setHours(0, 0, 0, 0);
                        const isPast = cell.date < now;
                        return (
                            <button
                                key={cell.key}
                                type="button"
                                onClick={() => handleDayClick(cell.date)}
                                disabled={isPast}
                                className={`aspect-square rounded-lg text-sm font-medium transition ${
                                    isSelected
                                        ? "bg-neutral-900 text-white"
                                        : isPast
                                        ? "text-neutral-300 cursor-not-allowed"
                                        : "text-neutral-700 hover:bg-neutral-100"
                                }`}
                            >
                                {cell.day}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="space-y-4">
                {!selectedDate ? (
                    <div className="flex items-center justify-center h-full text-sm text-neutral-500">
                        Select a date to view available times
                    </div>
                ) : loading ? (
                    <div className="flex items-center justify-center h-full text-sm text-neutral-500">
                        Loading available times...
                    </div>
                ) : !hasSlots ? (
                    <div className="flex items-center justify-center h-full text-sm text-neutral-500">
                        No available times for this date
                    </div>
                ) : (
                    <>
                        <h4 className="text-sm font-semibold text-neutral-900">
                            {selectedDate.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}
                        </h4>
                        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                            {Object.entries(groupedSlots).map(([period, periodSlots]) => {
                                if (periodSlots.length === 0) return null;
                                return (
                                    <div key={period}>
                                        <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                                            {period}
                                        </h5>
                                        <div className="grid grid-cols-3 gap-2">
                                            {periodSlots.map((slot) => {
                                                const isSelected = selectedSlot === slot.startAt;
                                                return (
                                                    <button
                                                        key={slot.startAt}
                                                        type="button"
                                                        onClick={() => handleSlotSelect(slot.startAt)}
                                                        className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
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
                                    </div>
                                );
                            })}
                        </div>
                        {error && (
                            <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-800">
                                {error}
                            </div>
                        )}
                        <Button
                            type="button"
                            disabled={!selectedSlot}
                            onClick={handleContinue}
                            className="w-full rounded-full bg-black py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:text-neutral-500"
                        >
                            Continue
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}
