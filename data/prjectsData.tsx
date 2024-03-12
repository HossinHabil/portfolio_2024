import { Home, Code2, UserRound, MessageSquare } from "lucide-react";
import { TypeIcon } from "lucide-react";

type IconType = typeof TypeIcon;

export const NavBarLinks = [
  {
    id: 1,
    icon: Home as IconType,
    name: "home",
    link: "#home",
  },
  {
    id: 2,
    icon: UserRound as IconType,
    name: "user-round",
    link: "#about",
  },
  {
    id: 3,
    icon: Code2 as IconType,
    name: "code-2",
    link: "#projects",
  },
  {
    id: 4,
    icon: MessageSquare as IconType,
    name: "message-square",
    link: "#contact",
  },
];

export const projectsData = [
  {
    id: 0,
    title: "Netflix",
    description: "Using Nextjs, Tailwindcss, Firebase & Stripe",
    image: "/images/projects/netflix.png",
    tags: ["Next", "Tailwindcss", "Firebase", "Stripe"],
    source: "https://github.com/HossinHabil/netflix",
    visit: "https://netflix-hossinhabil.vercel.app/",
  },
  {
    id: 1,
    title: "Ecommerce",
    description: "Using Nextjs, Sanity, Stripe",
    image: "/images/projects/ecommerce-store.png",
    tags: ["Nextjs", "Sanity", "Stripe"],
    source: "https://github.com/HossinHabil/ecommerce_sanity_stripe-",
    visit: "https://ecommerce-sanity-stripe-hossinhabil.vercel.app/",
  },
  {
    id: 2,
    title: "Crud Todo App",
    description: "Using React & Typescript",
    image: "/images/projects/crud-todo.png",
    tags: ["React", "TypeScript"],
    source: "https://github.com/HossinHabil/crud-react",
    visit: "https://crud-react-typescript-hossinhabil.vercel.app/",
  },
  {
    id: 3,
    title: "Photo Gallery",
    description: "Using React, Tailwindcss",
    image: "/images/projects/photo-gallery.png",
    tags: ["React", "Tailwindcss"],
    source: "https://github.com/HossinHabil/photo-gallery",
    visit: "https://photo-gallery-hossinhabil.vercel.app/",
  },
  {
    id: 4,
    title: "Landing Page",
    description: "Using NextJs, Tailwindcss, Shadecn",
    image: "/images/projects/xm-landing-page.png",
    tags: ["NextJs", "Tailwindcss", "Shadecn"],
    source: "https://github.com/HossinHabil/photo-gallery",
    visit: "https://xm-six.vercel.app/",
  },
];
