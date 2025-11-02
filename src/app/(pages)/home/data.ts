import android from "@/assets/images/logos/android.svg";
import angular from "@/assets/images/logos/Angular.svg";
import bootstrap from "@/assets/images/logos/bootstrap.svg";
import vue from "@/assets/images/logos/vue.svg";
import react from "@/assets/images/logos/react.svg";
import nextjs from "@/assets/images/logos/nextjs.svg";
import python from "@/assets/images/logos/python.svg";
import typescript from "@/assets/images/logos/typescript.svg";
import mongodb from "@/assets/images/logos/mongodb.svg";
import laravel from "@/assets/images/logos/laravel.svg";
import nodejs from "@/assets/images/logos/nodejs-icon.svg";
import personalImg1 from "@/assets/images/personal/1.jpg";
import userImg1 from "@/assets/images/users/user-7.jpg";
import personalImg3 from "@/assets/images/personal/3.jpg";
import userImg2 from "@/assets/images/users/user-2.jpg";
import personalImg2 from "@/assets/images/personal/2.jpg";

type PersonalDataType = {
    name: string;
    experience: string;
    image: string;
};

export type ServicesType = {
    icon: string;
    title: string;
    variant: string;
    description: string;
};

export type WorkDataType = {
    image: string;
    variant: string;
    title: string;
    link: string;
    language: string[];
    category?: string[];
};

export type BlogsType = {
    image: string;
    title: string;
    name: string;
    date: string;
    userImg: string;
};

export const personalData: PersonalDataType[] = [
    //   {
    //     name: 'Bootstrap',
    //     experience: '3 Year',
    //     image: bootstrap
    //   },
    {
        name: "React",
        experience: "5 years",
        image: react,
    },
    {
        name: "Node.js",
        experience: "5 years",
        image: nodejs,
    },
    {
        name: "Next.js",
        experience: "3 years",
        image: nextjs,
    },
    {
        name: "Laravel",
        experience: "4 years",
        image: laravel,
    },
    {
        name: "Python",
        experience: "3 years",
        image: python,
    },
    {
        name: "Mongodb",
        experience: "4 years",
        image: mongodb,
    },
    {
        name: "Typescript",
        experience: "3 years",
        image: typescript,
    },
];

export const servicesData: ServicesType[] = [
    {
        icon: "feather:layers",
        variant: "soft-alt-orange",
        title: "Awesome Support",
        description:
            "Some quick example text to build on the card title and make up the bulk of the card's content platform.",
    },
    {
        icon: "feather:dollar-sign",
        variant: "soft-alt-info",
        title: "Dynamic Growth",
        description: "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt.",
    },
    {
        icon: "feather:check-square",
        variant: "soft-alt-success",
        title: "Branding Identity",
        description: "Separated they live in Bookmarksgrove right at the coast of the Semantics, and large.",
    },
];

export const workData: WorkDataType[] = [
    {
        image: angular,
        variant: "soft-alt-orange",
        title: "Auto Drive Project",
        link: "htpps://abcd-Example.com ",
        language: ["Angular", "React", "Jquery"],
        category: ["angular", "bootstrap"],
    },
    {
        image: bootstrap,
        variant: "soft-alt-info",
        title: "Auto Drive Project",
        link: "htpps://abcd-Example.com",
        language: ["Bootstrap", "Css", "Javascript"],
        category: ["bootstrap"],
    },
    {
        image: mongodb,
        variant: "soft-alt-success",
        title: "Auto Drive Project",
        link: "htpps://abcd-Example.com",
        language: ["Mongodb", "Javascript"],
        category: ["angular", "mongodb"],
    },
    {
        image: vue,
        variant: "soft-alt-success",
        title: "Auto Drive Project",
        link: "htpps://abcd-Example.com",
        language: ["Vue", "Javascript"],
    },
    {
        image: react,
        variant: "soft-alt-primary",
        title: "Auto Drive Project",
        link: "htpps://abcd-Example.com",
        language: ["React", "Javascript"],
        category: ["angular"],
    },
];

export const blogsData: BlogsType[] = [
    {
        image: personalImg1,
        title: "Change the world with small things",
        name: "Charles Woodall",
        date: "14 Feb 2022",
        userImg: userImg1,
    },
    {
        image: personalImg3,
        title: "With a clean, minimal and professional look",
        name: "Jarvis Owen",
        date: "12 Jan 2022",
        userImg: userImg2,
    },
    {
        image: personalImg2,
        title: "With a clean, minimal and professional look",
        name: "Jarvis Owen",
        date: "12 Jan 2022",
        userImg: userImg2,
    },
];
