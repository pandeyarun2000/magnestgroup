import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for magnest realty.
        default: "Magnest Group",
        template: `%s | Magnest`
    },
    description: "Transforming real estate with intelligence.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Magnest Group",
        description: "Transforming real estate with intelligence.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "magnest",
        title: "Magnest Group",
        description: "Transforming real estate with intelligence.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://magnest-app.vercel.app"),
};
