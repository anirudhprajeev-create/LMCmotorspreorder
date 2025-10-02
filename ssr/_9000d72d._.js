module.exports = {

"[project]/src/lib/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"60b1378917791b3946bf26d792a336723fe287bc1f":"prebookVehicle","60cb39dc9d2e8cece240f42782397da006be0b1ad0":"submitInquiry"},"",""] */ __turbopack_context__.s({
    "prebookVehicle": (()=>prebookVehicle),
    "submitInquiry": (()=>submitInquiry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const inquirySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, "Name must be at least 2 characters."),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().email("Please enter a valid email address."),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(10, "Message must be at least 10 characters."),
    vehicle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
});
async function submitInquiry(prevState, formData) {
    const validatedFields = inquirySchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        vehicle: formData.get("vehicle")
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Error: Please check the form fields."
        };
    }
    // In a real application, you would send an email, save to a database, etc.
    console.log("New Inquiry Received:", validatedFields.data);
    return {
        message: "Success! Your inquiry has been sent.",
        errors: {}
    };
}
const prebookSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    inGameName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, "In-game name must be at least 2 characters."),
    discordId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().min(2, "Discord ID must be at least 2 characters."),
    pickupTimeFrom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nonempty("Please select a 'from' time."),
    pickupTimeTo: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().nonempty("Please select a 'to' time."),
    vehicle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
});
async function prebookVehicle(prevState, formData) {
    const validatedFields = prebookSchema.safeParse({
        inGameName: formData.get("inGameName"),
        discordId: formData.get("discordId"),
        pickupTimeFrom: formData.get("pickupTimeFrom"),
        pickupTimeTo: formData.get("pickupTimeTo"),
        vehicle: formData.get("vehicle")
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Error: Please check the form fields."
        };
    }
    // In a real application, you would save this pre-booking to a database.
    console.log("New Pre-booking Received:", validatedFields.data);
    const { inGameName, discordId, pickupTimeFrom, pickupTimeTo, vehicle } = validatedFields.data;
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
        const discordMessage = {
            embeds: [
                {
                    title: "New Vehicle Pre-booking! 🚗",
                    color: 5814783,
                    fields: [
                        {
                            name: "Vehicle",
                            value: vehicle,
                            inline: false
                        },
                        {
                            name: "In-Game Name",
                            value: inGameName,
                            inline: true
                        },
                        {
                            name: "Discord ID",
                            value: discordId,
                            inline: true
                        },
                        {
                            name: "Pickup Time",
                            value: `From ${pickupTimeFrom} to ${pickupTimeTo}`,
                            inline: false
                        }
                    ],
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: "LMC Motors Pre-booking System"
                    }
                }
            ]
        };
        try {
            await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(discordMessage)
            });
        } catch (error) {
            console.error("Failed to send Discord notification:", error);
        // We don't want to block the user flow if Discord fails.
        }
    }
    return {
        message: `Success! You've pre-booked the ${validatedFields.data.vehicle}. We will contact you shortly.`,
        errors: {}
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitInquiry,
    prebookVehicle
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitInquiry, "60cb39dc9d2e8cece240f42782397da006be0b1ad0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(prebookVehicle, "60b1378917791b3946bf26d792a336723fe287bc1f", null);
}}),
"[project]/.next-internal/server/app/vehicles/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
;
}}),
"[project]/.next-internal/server/app/vehicles/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$vehicles$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/vehicles/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/vehicles/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "60b1378917791b3946bf26d792a336723fe287bc1f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prebookVehicle"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$vehicles$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/vehicles/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/vehicles/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "60b1378917791b3946bf26d792a336723fe287bc1f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$vehicles$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["60b1378917791b3946bf26d792a336723fe287bc1f"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$vehicles$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/vehicles/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$vehicles$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/vehicles/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/vehicles.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "vehicles": (()=>vehicles)
});
const vehicles = [
    {
        id: 1,
        make: 'LMC',
        model: 'Pathfinder XL',
        year: 2023,
        price: 38500,
        mileage: 12000,
        type: 'SUV',
        description: 'A reliable and spacious SUV perfect for families and adventurers alike. Comes with all-wheel drive and a premium sound system.',
        images: [
            'suv-1-a',
            'suv-1-b',
            'suv-1-c'
        ],
        specifications: [
            {
                name: 'Engine',
                value: '2.5L 4-Cylinder'
            },
            {
                name: 'Transmission',
                value: 'Automatic'
            },
            {
                name: 'Drivetrain',
                value: 'AWD'
            },
            {
                name: 'Color',
                value: 'Deepwater Blue'
            },
            {
                name: 'Interior',
                value: 'Black Cloth'
            },
            {
                name: 'Fuel Economy',
                value: '28 MPG City / 35 MPG Hwy'
            }
        ]
    },
    {
        id: 2,
        make: 'LMC',
        model: 'Urban Glide',
        year: 2022,
        price: 24000,
        mileage: 25000,
        type: 'Sedan',
        description: 'The ideal city commuter. Sleek, efficient, and packed with modern tech features including a large touchscreen display and driver-assist package.',
        images: [
            'sedan-1-a',
            'sedan-1-b',
            'sedan-1-c'
        ],
        specifications: [
            {
                name: 'Engine',
                value: '2.0L 4-Cylinder Turbo'
            },
            {
                name: 'Transmission',
                value: 'Automatic'
            },
            {
                name: 'Drivetrain',
                value: 'FWD'
            },
            {
                name: 'Color',
                value: 'Glacier Silver'
            },
            {
                name: 'Interior',
                value: 'Gray Leatherette'
            },
            {
                name: 'Fuel Economy',
                value: '32 MPG City / 40 MPG Hwy'
            }
        ]
    },
    {
        id: 3,
        make: 'LMC',
        model: 'Workhorse 1500',
        year: 2021,
        price: 45000,
        mileage: 40000,
        type: 'Truck',
        description: 'A powerful and rugged truck built to handle any job. Features a high-strength steel frame, advanced towing technology, and a durable bed liner.',
        images: [
            'truck-1-a',
            'truck-1-b',
            'truck-1-c'
        ],
        specifications: [
            {
                name: 'Engine',
                value: '5.3L V8'
            },
            {
                name: 'Transmission',
                value: '10-Speed Automatic'
            },
            {
                name: 'Drivetrain',
                value: '4WD'
            },
            {
                name: 'Color',
                value: 'Crimson Red'
            },
            {
                name: 'Interior',
                value: 'Jet Black Vinyl'
            },
            {
                name: 'Towing Capacity',
                value: '11,000 lbs'
            }
        ]
    },
    {
        id: 4,
        make: 'LMC',
        model: 'Voyager',
        year: 2024,
        price: 42000,
        mileage: 5000,
        type: 'SUV',
        description: 'Top-of-the-line luxury SUV with three-row seating, panoramic sunroof, and premium leather interior. The ultimate choice for comfort and style.',
        images: [
            'suv-2-a',
            'suv-2-b',
            'suv-2-c'
        ],
        specifications: [
            {
                name: 'Engine',
                value: '3.0L V6 Turbo'
            },
            {
                name: 'Transmission',
                value: '9-Speed Automatic'
            },
            {
                name: 'Drivetrain',
                value: 'AWD'
            },
            {
                name: 'Color',
                value: 'Pearl White'
            },
            {
                name: 'Interior',
                value: 'Tan Nappa Leather'
            },
            {
                name: 'Features',
                value: 'Heated/Cooled Seats, 360 Camera'
            }
        ]
    },
    {
        id: 5,
        make: 'LMC',
        model: 'Prestige',
        year: 2023,
        price: 35000,
        mileage: 8000,
        type: 'Sedan',
        description: 'An executive sedan that combines performance and elegance. Features a sporty design, adaptive suspension, and a handcrafted interior.',
        images: [
            'sedan-2-a',
            'sedan-2-b'
        ],
        specifications: [
            {
                name: 'Engine',
                value: '2.5L 4-Cylinder Turbo'
            },
            {
                name: 'Transmission',
                value: '8-Speed Dual-Clutch'
            },
            {
                name: 'Drivetrain',
                value: 'RWD'
            },
            {
                name: 'Color',
                value: 'Onyx Black'
            },
            {
                name: 'Interior',
                value: 'Black Leather with Red Stitching'
            },
            {
                name: '0-60 mph',
                value: '5.8 seconds'
            }
        ]
    },
    {
        id: 6,
        make: 'LMC',
        model: 'Hauler HD',
        year: 2022,
        price: 55000,
        mileage: 30000,
        type: 'Truck',
        description: 'The heavy-duty version of our popular truck line. Engineered for maximum payload and towing, with a diesel engine option for ultimate torque.',
        images: [
            'truck-2-a',
            'truck-2-b'
        ],
        specifications: [
            {
                name: 'Engine',
                value: '6.7L V8 Turbo Diesel'
            },
            {
                name: 'Transmission',
                value: 'Heavy-Duty 6-Speed Automatic'
            },
            {
                name: 'Drivetrain',
                value: '4WD'
            },
            {
                name: 'Color',
                value: 'Graphite Gray'
            },
            {
                name: 'Interior',
                value: 'Dark Ash Vinyl'
            },
            {
                name: 'Towing Capacity',
                value: '20,000 lbs'
            }
        ]
    },
    {
        id: 7,
        make: 'LMC',
        model: 'Comet',
        year: 2024,
        price: 21500,
        mileage: 1500,
        type: 'Sedan',
        description: 'A fun and zippy compact car that is perfect for navigating the urban jungle. Excellent fuel economy and surprisingly spacious interior.',
        images: [
            'sedan-3-a',
            'sedan-3-b'
        ],
        specifications: [
            {
                name: 'Engine',
                value: '1.5L 4-Cylinder'
            },
            {
                name: 'Transmission',
                value: 'CVT'
            },
            {
                name: 'Drivetrain',
                value: 'FWD'
            },
            {
                name: 'Color',
                value: 'Rally Red'
            },
            {
                name: 'Interior',
                value: 'Charcoal Cloth'
            },
            {
                name: 'Fuel Economy',
                value: '35 MPG City / 42 MPG Hwy'
            }
        ]
    }
];
}}),
"[project]/src/components/vehicle-card.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/vehicle-card.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/vehicle-card.tsx <module evaluation>", "default");
}}),
"[project]/src/components/vehicle-card.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/vehicle-card.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/vehicle-card.tsx", "default");
}}),
"[project]/src/components/vehicle-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$vehicle$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/vehicle-card.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$vehicle$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/vehicle-card.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$vehicle$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/vehicles/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>VehiclesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vehicles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/vehicles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$vehicle$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/vehicle-card.tsx [app-rsc] (ecmascript)");
;
;
;
function VehiclesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mb-8 text-center font-headline text-4xl font-bold md:text-5xl",
                children: "Our Inventory"
            }, void 0, false, {
                fileName: "[project]/src/app/vehicles/page.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vehicles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["vehicles"].map((vehicle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$vehicle$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        vehicle: vehicle
                    }, vehicle.id, false, {
                        fileName: "[project]/src/app/vehicles/page.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/vehicles/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/vehicles/page.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/vehicles/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/vehicles/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_9000d72d._.js.map