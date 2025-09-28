import { Icons } from "@/components";
import { Home, Building, BarChart, Handshake, Briefcase, Cpu } from "lucide-react";

export const perks = [
    {
        icon: Icons.auth,
        title: "Sign Up",
        info: "Create your account to get started with Magnest.",
    },
    {
        icon: Icons.customize,
        title: "Onboard Properties",
        info: "Easily add and manage client properties within the platform.",
    },
    {
        icon: Icons.launch,
        title: "Generate Income",
        info: "Utilize AI-driven platform to scale up and grow income.",
    },
];

export const features = [
{
    icon: Home,
    title: "Residential Real Estate",
    info: "Buying, selling, or leasing homes with care and expertise.",
  },
  {
    icon: Building,
    title: "Commercial Real Estate",
    info: "Smart, strategic solutions for businesses and investors.",
  },
  {
    icon: BarChart,
    title: "Investment Advisory",
    info: "Data-driven insights to support confident property decisions.",
  },
  {
    icon: Handshake,
    title: "Custom Solutions",
    info: "Because no two clients are the same, our services are tailored to your goals.",
  },
  {
    icon: Briefcase,
    title: "Asset Management",
    info: "Protect and grow your portfolio with structured strategies and oversight.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Property Management",
    info: "Leverage cutting-edge AI technology to streamline operations, communication, and efficiency.",
  },
];

export const pricingCards = [
  {
    title: "Join Magnest Realty",
    description: "Keep 100% commission, no desk fees, and get AI-powered support to build your pipeline.",
    price: "100% Commission",
    duration: "",
    highlight: "No Desk Fee • Magnest AI Support",
    buttonText: "Join Now",
    features: [
      "100% commission on all sales",
      "No desk fees or hidden costs",
      "Pipeline building support via Magnest AI",
      "Access to cutting-edge agent tools",
    ],
    priceId: "", // if using Stripe or similar
  },
];


export const bentoCards = [
    {
        title: 'Start with Inspiration',
        info: 'Browse our vast library of pre-designed templates or upload your own images.',
        imgSrc: '/assets/bento-1.svg', // Lightbulb or Inspiration icon
        alt: 'Inspiration for website creation'
    },
    {
        title: 'AI Assists Your Vision',
        info: 'Our intelligent AI tailors suggestions and functionalities based on your goals.',
        imgSrc: '/assets/bento1.svg', // AI Assistant icon
        alt: 'AI website building assistant'
    },
    {
        title: 'Drag & Drop Customization',
        info: 'Effortlessly personalize your website with our intuitive drag-and-drop editor.',
        imgSrc: '/assets/bento1.svg', // Drag and Drop icon or hand editing a website
        alt: 'Website customization with drag and drop'
    },
    {
        title: 'Launch & Shine Online',
        info: 'Publish your website with a single click and take your brand to the world.',
        imgSrc: '/assets/bento1.svg', // Rocket launching or website going live
        alt: 'Website launch and publication'
    },
];

export const reviews = [
    {
        name: "Ateesh",
        username: "Realtor",
        body: "Managing multiple properties and clients used to be overwhelming. With this AI platform, every detail is organized, every lead is nurtured, and every opportunity is maximized. It’s a must-have for modern agents.",
    },
    {
        name: "Sean",
        username: "Property Manager",
        body: "As a landlord with multiple properties, I rely on this AI-powered platform daily. It handles rent tracking, maintenance requests, and tenant communication seamlessly. It’s the best investment I’ve made in property management.",
    },
    {
        name: "Sunny",
        username: "Landlord",
        body: "This platform takes the stress out of property management. From tenant screening to rent collection, everything is automated, transparent, and incredibly efficient. I can finally focus on growing my portfolio!",
    },
    {
        name: "Arvin",
        username: "Landlord",
        body: "I can oversee multiple properties with ease thanks to this platform. The AI-driven insights help me make data-backed decisions, cut unnecessary costs, and maximize revenue. Truly a property manager’s best friend!",
    },
    {
        name: "JV",
        username: "Landlord",
        body: "I would highly rcommend Magnest to anyone who are serious about growing their peoperty mnagement business.",
    },
    
];
