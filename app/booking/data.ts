type LengthOption = {
    name?: string;
    price?: string;
    duration?: string;
    notes?: string;
};

export type BookingItem = {
    name: string;
    price: string;
    description: string;
    notes?: string;
    image?: string;
    images?: string[];
    link?: string;
    objectPosition?: string;
    availableSizes?: string[];
    lengthOptions?: LengthOption[];
    hairTextures?: string[];
};

export type BookingSubcategory = {
    name: string;
    slug: string;
    summary?: string;
    items: BookingItem[];
};

export type BookingCategory = {
    name: string;
    slug: string;
    summary?: string;
    items?: BookingItem[];
    subcategories?: BookingSubcategory[];
};

export const defaultBookingUrl = "https://calendly.com/djonretglo";

export const bookingCategories: BookingCategory[] = [
    {
        name: "Box Braids",
        slug: "box-braids",
        summary: "Classic braided styles in a variety of lengths and sizes.",
        subcategories: [
            {
                name: " Box Braids",
                slug: "box-braids",
                items: [
                    {
                        name: "XSmall Box Braids",
                        price: "",
                        description: "5 options",
                        // image preview intentionally omitted (no asset yet)
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$300", notes: "$50.00 deposit required" },
                            { name: "Bra Strap Length", price: "$350", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$370", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$400", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Small Box Braids",
                        price: "",
                        description: "5 options",
                        image: "/Braids/Box-Braids/small.JPG",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Bra Strap Length", price: "$300", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$320", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$350", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Box Braids",
                        price: "",
                        description: "5 options",
                        //image: "/Braids/Box-Braids/box.jpg",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$260", notes: "$50.00 deposit required" },
                            { name: "Bra Strap Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$300", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$320", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Box Braids",
                        price: "",
                        description: "5 options",
                        image: "/Braids/Box-Braids/medium.jpg",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$240", notes: "$50.00 deposit required" },
                            { name: "Bra Strap Length", price: "$260", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$300", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Box Braids",
                        price: "",
                        description: "5 options",
                        //image: "/Braids/Box-Braids/box.jpg",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$130", notes: "$50.00 deposit required" },
                            { name: "Bra Strap Length", price: "$150", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$200", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Regular Boho Bob Box Braids",
                slug: "regular-boho-bob-box-braids",
                items: [
                    {
                        name: "Small Regular Boho Bob Box Braids",
                        price: "",
                        description: "1 OPTION",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$280", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Regular Boho Bob Box Braids",
                        price: "",
                        description: "1 OPTION",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$260", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Regular Boho Bob Box Braids",
                        price: "",
                        description: "1 OPTION",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$240", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Regular Boho Bob Box Braids",
                        price: "",
                        description: "1 OPTION",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$220", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
        ],
    },
    {
        name: "Knotless Styles",
        slug: "knotless",
        summary: "Explore knotless braids, boho finishes, and knotless curls in one place.",
        subcategories: [
            {
                name: "Knotless Braids",
                slug: "knotless-braids",
                items: [
                    {
                        name: "XSmall Knotless Braids",
                        price: "",
                        description: "3 OPTIONS",
                        //image: "/Braids/Box-Braids/medium.jpg",
                        lengthOptions: [
                            { name: "Bra Length", price: "$330", notes: "$50.00 deposit required" },
                            { name: "WaistLength", price: "$350", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$400", notes: "$50.00 deposit required" },
     
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Small Knotless Braids",
                        price: "",
                        description: "3 OPTIONS",
                        image: "/Braids/Knotless/small.jpg",
                        lengthOptions: [
                            { name: "Bra Length", price: "$300", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$370", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$380", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Knotless Braids",
                        price: "",
                        description: "3 OPTIONS",
                        image: "/Braids/Knotless/Smedium.JPG",
                        images: [
                            "/Braids/Knotless/Smedium.JPG",
                            "/Braids/Knotless/Smedium1.JPG",
                        ],
                        lengthOptions: [
                            { name: "Bra Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$320", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$360", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Knotless Braids",
                        price: "",
                        description: "3 OPTIONS",
                        image: "/Braids/Knotless/Medium.JPG",
                        lengthOptions: [
                            { name: "Bra Length", price: "$260", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$300", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$330", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Knotless Braids",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$250", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$280", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Knotless with Human Hair",
                slug: "knotless-with-human-hair",
                summary: "Includes 4 bundles of human hair (Wet & Wavy, Deep Wave, Water Wave).",
                items: [
                    {
                        name: "Small Knotless with Human Hair",
                        price: "",
                        description: "Human Hair Included | 3 OPTIONS",
                        hairTextures: ["Wet & Wavy", "Deep Wave", "Water Wave"],
                        lengthOptions: [
                            { name: "Bra Length", price: "$530", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$560", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$650", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Knotless with Human Hair",
                        price: "",
                        description: "Human Hair Included | 3 OPTIONS",
                        hairTextures: ["Wet & Wavy", "Deep Wave", "Water Wave"],
                        lengthOptions: [
                            { name: "Bra Length", price: "$500", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$530", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$580", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Knotless with Human Hair",
                        price: "",
                        description: "Human Hair Included | 3 OPTIONS",
                        hairTextures: ["Wet & Wavy", "Deep Wave", "Water Wave"],
                        lengthOptions: [
                            { name: "Bra Length", price: "$460", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$490", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$520", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Knotless French Curl",
                slug: "knotless-french-curl",
                items: [
                    {
                        name: "XSmall Knotless French Curl",
                        price: "",
                        description: "2 OPTIONS",
                        //notes: "Hair not included",
                        lengthOptions: [
                            { name: "Waist Length", price: "$350", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$400", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Small Knotless French Curl",
                        price: "",
                        description: "2 OPTIONS",
                        //notes: "Hair not included",
                        image: "/Braids/Knotless/small-curl.JPEG",
                        images: ["/Braids/Knotless/small-curl.JPEG", "/Braids/Knotless/small1.JPG"],
                        lengthOptions: [
                            { name: "Waist Length", price: "$330", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$380", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Knotless French Curl",
                        price: "",
                        description: "2 OPTIONS",
                        //notes: "Hair not included",
                        lengthOptions: [
                            { name: "Waist Length", price: "$300", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$350", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Knotless French Curl",
                        price: "",
                        description: "2 OPTIONS",
                        //notes: "Hair not included",
                        lengthOptions: [
                            { name: "Waist Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$320", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },

                ],
            },
            {
                name: "Knotless Boho",
                slug: "knotless-boho",
                items: [
                    {
                        name: "XSmall Knotless Boho",
                        price: "",
                        description: "3 OPTIONS",
                        //notes: "Human hair included",
                        // image preview intentionally omitted (no asset yet)
                        lengthOptions: [
                            { name: "Bra Strap Length", price: "$320", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$400", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$500", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Small Knotless Boho",
                        price: "",
                        description: "3 OPTIONS",
                        //notes: "Human hair included",
                        image: "/Braids/Boho-Knotless/boho7.JPEG",
                        lengthOptions: [
                            { name: "Bra Strap Length", price: "$300", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$320", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$400", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Knotless Boho",
                        price: "",
                        description: "3 OPTIONS",
                        //notes: "Human hair included",
                        image: "/Braids/Boho-Knotless/boho2.JPG",
                        lengthOptions: [
                            { name: "Bra Strap Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$350", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Knotless Boho",
                        price: "",
                        description: "3 OPTIONS",
                        //notes: "Human hair included",
                        image: "/Braids/Boho-Knotless/boho5.jpg",
                        
                        lengthOptions: [
                            { name: "Bra Strap Length", price: "$260", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$250", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$320", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Knotless Boho",
                        price: "",
                        description: "3 OPTIONS",
                        //notes: "Human hair included",
                        image: "/Braids/Boho-Knotless/boho4.JPG",
                        lengthOptions: [
                            { name: "Bra Strap Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$230", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$250", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                                        {
                        name: "Jumbo Knotless Boho",
                        price: "",
                        description: "3 OPTIONS",
                        //notes: "Human hair included",
                        image: "/Braids/Boho-Knotless/boho3.JPG",
                        lengthOptions: [
                            { name: "Bra Strap Length", price: "$270", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$300", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$330", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Knotless Boho Twist",
                slug: "knotless-boho-twist",
                items: [
                    {
                        name: "Small Knotless Boho Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$360", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$380", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$400", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Knotless Boho Twist",
                        price: "",
                        description: "3 OPTIONS",
                        image: "/Braids/Knotless/Smedium-Boho.JPG",
                        lengthOptions: [
                            { name: "Bra Length", price: "$340", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$360", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$380", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Knotless Boho Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$320", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$350", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$360", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Knotless Boho Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$260", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$300", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Knotless Bob Boho",
                slug: "knotless-bob-boho",
                items: [
                    {
                        name: "XSmall Knotless Bob Boho",
                        price: "",
                        description: "1 OPTION",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$350", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Small Knotless Bob Boho",
                        price: "",
                        description: "1 OPTION",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$300", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Knotless Bob Boho",
                        price: "",
                        description: "1 OPTION",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$280", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Knotless Bob Boho",
                        image: "/Braids/Knotless/knotless-bob.png",
                        price: "",
                        description: "1 OPTION",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$260", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Knotless Twist",
                slug: "knotless-twist",
                items: [
                    {
                        name: "XSmall Knotless Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$250", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$330", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Small Knotless Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$230", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$260", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$300", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Knotless Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$240", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$280", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Knotless Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$260", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Knotless Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$160", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$240", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
        ],
    },
    {
        name: "Twists",
        slug: "twists",
        summary: "Discover island, boho, passion, and Senegalese twist variations in one place.",
        subcategories: [
            {
                name: "Island Twist",
                slug: "island-twist",
                summary: "Island-inspired twists featuring flowing curls and lightweight movement.",
                items: [
                    {
                        name: "Small Island Twist",
                        price: "",
                        description: "3 OPTIONS",
                        image: "/Braids/Island-Twist/Island2.JPG",
                        lengthOptions: [
                            { name: "Bra Length", price: "$360", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$380", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$400", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Island Twist",
                        price: "",
                        description: "3 OPTIONS",
                        image: "/Braids/Island-Twist/Smedium.jpg",
                        lengthOptions: [
                            { name: "Bra Length", price: "$340", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$360", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$380", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Island Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$320", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$350", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$360", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Island Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$260", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$300", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },

            {
                name: "Passion Twist",
                slug: "passion-twist",
                summary: "Bouncy twists with effortless texture and movement.",
                items: [
                    {
                        name: "Small Passion Twist",
                        price: "",
                        description: "2 OPTIONS",
                        image: "/Braids/Passion-Twist/passion1.jpg",
                        images: [
                            "/Braids/Passion-Twist/passion4.jpg",
                            "/Braids/Passion-Twist/passion1.jpg",
                        ],
                        lengthOptions: [
                            { name: "Waist Length", price: "$260", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$300", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Passion Twist",
                        price: "",
                        description: "2 OPTIONS",
                        lengthOptions: [
                            { name: "Waist Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$220", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Spring Twist",
                slug: "spring-twist",
                items: [
                    {
                        name: "Small Spring Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$240", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$280", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Spring Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$260", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Spring Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$160", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$200", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Soft Twist",
                slug: "soft-twist",
                items: [
                    {
                        name: "Small Soft Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Bra Strap Length", price: "$240", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$280", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Soft Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Bra Strap Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$260", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Soft Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$160", notes: "$50.00 deposit required" },
                            { name: "Bra Strap Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$200", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Bomb Twist",
                slug: "bomb-twist",
                items: [
                    {
                        name: "Small Bomb Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Bra Strap Length", price: "$240", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$280", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Bomb Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$260", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Bomb Twist",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$160", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$200", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            // {
            //     name: "Bob Twist",
            //     slug: "bob-twist",
            //     items: [
            //         {
            //             name: "Small Bob Twist",
            //             price: "",
            //             description: "3 OPTIONS",
            //             lengthOptions: [
            //                 { name: "Shoulder Length", price: "$220", notes: "$50.00 deposit required" },
            //                 { name: "Bra Length", price: "$240", notes: "$50.00 deposit required" },
            //                 { name: "Waist Length", price: "$280", notes: "$50.00 deposit required" },
            //             ],
            //             link: defaultBookingUrl,
            //         },
            //         {
            //             name: "Medium Bob Twist",
            //             price: "",
            //             description: "3 OPTIONS",
            //             lengthOptions: [
            //                 { name: "Shoulder Length", price: "$200", notes: "$50.00 deposit required" },
            //                 { name: "Bra Length", price: "$220", notes: "$50.00 deposit required" },
            //                 { name: "Waist Length", price: "$260", notes: "$50.00 deposit required" },
            //             ],
            //             link: defaultBookingUrl,
            //         },
            //         {
            //             name: "Large Bob Twist",
            //             price: "",
            //             description: "3 OPTIONS",
            //             lengthOptions: [
            //                 { name: "Shoulder Length", price: "$160", notes: "$50.00 deposit required" },
            //                 { name: "Bra Length", price: "$180", notes: "$50.00 deposit required" },
            //                 { name: "Waist Length", price: "$200", notes: "$50.00 deposit required" },
            //             ],
            //             link: defaultBookingUrl,
            //         },
            //     ],
            // },
            {
                name: "Natural Hair 2 Strand Twist",
                slug: "natural-hair-2-strand-twist",
                items: [
                    {
                        name: "Small Natural Hair 2 Strand Twist",
                        price: "",
                        description: "1 OPTION",
                        lengthOptions: [
                            { name: "Small", price: "$200", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Natural Hair 2 Strand Twist",
                        price: "",
                        description: "1 OPTION",
                        lengthOptions: [
                            { name: "Medium", price: "$160", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
        ],
    },
    {
        name: "French Curl",
        slug: "french-curl",
        summary: "Elegant French curl styles with natural texture and movement.",
        subcategories: [
            {
                name: "Regular French Curl",
                slug: "regular-french-curl",
                items: [
                    {
                        name: "Small Regular French Curl",
                        price: "",
                        description: "2 OPTIONS",
                        lengthOptions: [
                            { name: "Waist Length", price: "$320", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$350", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Regular French Curl",
                        price: "",
                        description: "2 OPTIONS",
                        // image preview intentionally omitted (no asset yet)
                        lengthOptions: [
                            { name: "Waist Length", price: "$300", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$320", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Regular French Curl",
                        price: "",
                        description: "2 OPTIONS",
                        lengthOptions: [
                            { name: "Waist Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$260", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Knotless French Curl",
                slug: "knotless-french-curl",
                items: [
                    {
                        name: "XSmall Knotless French Curl",
                        price: "",
                        description: "2 OPTIONS",
                        lengthOptions: [
                            { name: "Waist Length", price: "$350", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$400", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Small Knotless French Curl",
                        price: "",
                        description: "2 OPTIONS",
                        lengthOptions: [
                            { name: "Waist Length", price: "$330", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$380", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Knotless French Curl",
                        price: "",
                        description: "2 OPTIONS",
                        lengthOptions: [
                            { name: "Waist Length", price: "$300", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$350", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Knotless French Curl",
                        price: "",
                        description: "2 OPTIONS",
                        lengthOptions: [
                            { name: "Waist Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$320", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
        ],
    },
    {
        name: "Locs",
        slug: "locs",
        summary: "Choose from soft locs, micro locs, and more textured loc styles.",
        subcategories: [
            {
                name: "Soft Locs",
                slug: "soft-locs",
                items: [
                    {
                        name: "Small Soft Locs",
                        price: "",
                        description: "2 OPTIONS",
                        image: "/Braids/Soft-Locs/soft1.JPG",
                        lengthOptions: [
                            { name: "Waist Length", price: "$280", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$300", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Soft Locs",
                        price: "",
                        description: "2 OPTIONS",
                        lengthOptions: [
                            { name: "Waist Length", price: "$250", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$280", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Boho Soft Locs",
                slug: "boho-soft-locs",
                items: [
                    {
                        name: "Small Boho Soft Locs",
                        price: "",
                        description: "2 OPTIONS",
                        lengthOptions: [
                            { name: "Waist Length", price: "$430", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$500", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Boho Soft Locs",
                        price: "",
                        description: "2 OPTIONS",
                        lengthOptions: [
                            { name: "Waist Length", price: "$350", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$450", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Bora Bora Locs",
                slug: "bora-bora-locs",
                summary: "Hair included.",
                items: [
                    {
                        name: "Small Bora Bora Locs",
                        price: "",
                        description: "Hair included | 3 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$500", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$650", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$700", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Bora Bora Locs",
                        price: "",
                        description: "Hair included | 3 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$450", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$550", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$600", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
        ],
    },
    {
        name: "Crochet",
        slug: "crochet",
        summary: "Quick-install crochet styles with lightweight versatility.",
        items: [
            {
                name: "Pre Looped",
                price: "",
                description: "1 OPTION",
                lengthOptions: [
                    { name: "Pre Looped", price: "$120", notes: "$50.00 deposit required" },
                ],
                link: defaultBookingUrl,
            },
            {
                name: "Individual in the Front",
                price: "",
                description: "1 OPTION",
                lengthOptions: [
                    { name: "Individual in the Front", price: "$150", notes: "$50.00 deposit required" },
                ],
                link: defaultBookingUrl,
            },
            {
                name: "Loose Hair",
                price: "",
                description: "1 OPTION",
                lengthOptions: [
                    { name: "Loose Hair", price: "$130", notes: "$50.00 deposit required" },
                ],
                link: defaultBookingUrl,
            },
            {
                name: "Individual Entire Head",
                price: "",
                description: "1 OPTION",
                lengthOptions: [
                    { name: "Individual Entire Head", price: "$180", notes: "$50.00 deposit required" },
                ],
                link: defaultBookingUrl,
            },
        ],
    },
    {
        name: "Kids Braids",
        slug: "kids-braids",
        summary: "Kid-friendly styles designed for comfort and protective wear.",
        subcategories: [
            {
                name: "Knotless Kids",
                slug: "knotless-kids",
                items: [
                    {
                        name: "Small Knotless Kids",
                        price: "",
                        description: "4 OPTIONS",
                        image: "/Braids/Kids/kid2.JPG",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$250", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$280", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Knotless Kids",
                        price: "",
                        description: "4 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$160", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$240", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$260", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Knotless Kids",
                        price: "",
                        description: "4 OPTIONS",
                        image: "/Braids/Kids/kid3.jpg",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$140", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$230", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$250", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Knotless Kids",
                        price: "",
                        description: "4 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$120", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$140", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$220", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Box Braids Kids",
                slug: "box-braids-kids",
                items: [
                    {
                        name: "Small Box Braids Kids",
                        price: "",
                        description: "4 OPTIONS",
                        image: "/Braids/Kids/kid1.JPG",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$230", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$250", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Box Braids Kids",
                        price: "",
                        description: "4 OPTIONS",
                        image: "/Braids/Kids/kid6.jpg",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$160", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$260", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Box Braids Kids",
                        price: "",
                        description: "4 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$150", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$160", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$240", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Box Braids Kids",
                        price: "",
                        description: "4 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$120", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$130", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$150", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$180", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Boho Box Braids Kids",
                slug: "boho-box-braids-kids",
                items: [
                    {
                        name: "Small Boho Box Braids Kids",
                        price: "",
                        description: "4 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$230", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$250", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$280", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Boho Box Braids Kids",
                        price: "",
                        description: "4 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$230", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$260", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Boho Box Braids Kids",
                        price: "",
                        description: "4 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$240", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Boho Box Braids Kids",
                        price: "",
                        description: "4 OPTIONS",
                        lengthOptions: [
                            { name: "Shoulder Length", price: "$160", notes: "$50.00 deposit required" },
                            { name: "Bra Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$220", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
            {
                name: "Knotless Boho Twist Kids",
                slug: "knotless-boho-twist-kids",
                items: [
                    {
                        name: "Small Knotless Boho Twist Kids",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$235", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$260", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$300", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Smedium Knotless Boho Twist Kids",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$215", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$240", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$280", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Medium Knotless Boho Twist Kids",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$220", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$260", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                    {
                        name: "Large Knotless Boho Twist Kids",
                        price: "",
                        description: "3 OPTIONS",
                        lengthOptions: [
                            { name: "Bra Length", price: "$180", notes: "$50.00 deposit required" },
                            { name: "Waist Length", price: "$200", notes: "$50.00 deposit required" },
                            { name: "Butt Length", price: "$220", notes: "$50.00 deposit required" },
                        ],
                        link: defaultBookingUrl,
                    },
                ],
            },
        ],
    },
];

export function getBookingCategory(slug: string) {
    return bookingCategories.find((category) => category.slug === slug);
}

export function getBookingSubcategory(categorySlug: string, subSlug: string) {
    const category = getBookingCategory(categorySlug);
    if (!category?.subcategories) {
        return undefined;
    }

    return category.subcategories.find((subcategory) => subcategory.slug === subSlug);
}

export function findBookingSubcategory(subSlug: string) {
    for (const category of bookingCategories) {
        if (!category.subcategories) {
            continue;
        }

        const subcategory = category.subcategories.find((entry) => entry.slug === subSlug);
        if (subcategory) {
            return { category, subcategory };
        }
    }

    return undefined;
}
