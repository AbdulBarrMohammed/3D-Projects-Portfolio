import javascript from "../assets/logos/js.png"
import java from "../assets/logos/java.png"
import python from "../assets/logos/python.png"
import react from "../assets/logos/physics.png"
import node from "../assets/logos/nodejs.png"
import git from "../assets/logos/github.png"
import cssImg from "../assets/logos/css-3.png"
import html from "../assets/logos/html.png"
import django from "../assets/logos/django.png"
import kotlin from "../assets/logos/icons8-kotlin-48.png"
import post from "../assets/logos/icons8-postgresql-48.png"
import typescript from "../assets/logos/icons8-typescript-48.png"
import express from "../assets/logos/icons8-express-js-50.png"
import socialSoothe from "../assets/logos/breeze.png"
import arty from "../assets/logos/artstation.svg"
import fox from "../assets/logos/fox.svg"
import math from '../assets/logos/calculator.png'
import resumeLogo from '../assets/logos/resumeswiftLogo.png'
import music from '../assets/logos/music-circle.svg'

export const skills = [
    {
        imageUrl: javascript,
        name: "Javascript",
        type: 'Frontend and Backend'
    },
    {
        imageUrl: python,
        name: "Python",
        type: 'Backend'
    },
    {
        imageUrl: java,
        name: "Java",
        type: 'Backend'
    },
    {
        imageUrl: express,
        name: "Express",
        type: 'Backend'
    },
    {
        imageUrl: node,
        name: "Node.js",
        type: 'Backend'
    },
    {
        imageUrl: react,
        name: "ReactJS",
        type: 'Frontend'
    },
    {
        imageUrl: git,
        name: "Github",
        type: 'Version Control'
    },
    {
        imageUrl: cssImg,
        name: "CSS",
        type: 'Frontend'
    },
    {
        imageUrl: html,
        name: "HTML",
        type: 'Frontend'
    },
    {
        imageUrl: typescript,
        name: "Typescript",
        type: 'Frontend and Backend'
    },
    {
        imageUrl: django,
        name: "Django",
        type: 'Backend'
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: 'Moblie Development'
    },
    {
        imageUrl: post,
        name: "postgreSQL",
        type: 'Backend'
    },

]


export const projects = [
    {
        imageUrl: socialSoothe,
        title: 'Social Soothe',
        link: 'https://social-soothe-frontend.onrender.com/',
        description:
        "This web application is designed for individuals with social anxiety, providing tools to promote emotional well-being and confidence in social situations. Users can engage in daily mood journal check-ins and practice guided breathing exercises to manage stress. Before attending a social event, they complete a tailored questionnaire to plan how they will approach the experience. After successfully completing the event, they are rewarded with a virtual flower that adds to their personal 'social tree.' Completing a flower earns users leaves, which serve as in-app currency to redeem various rewards. This gamified approach encourages personal growth and celebrates achievements in managing social anxiety."
    },
    {
        imageUrl: fox,
        title: 'Sorti Fox',
        link: 'test',
        description:
        'Web application that allows college students to save and sort their school work files including pdf and images into different folders'
        + 'as well as be able to download their stored files and share it with other people through email'
    },

    {
        imageUrl: music,
        title: 'Lyric Match',
        link: 'https://lyric-match.vercel.app/',
        description: 'Lyric Match is a web application designed to help users identify songs and artists by entering a snippet of lyrics. The app searches for songs that contain the provided lyrics and displays a list of matching tracks. Users can explore the results further by accessing a preview audio clip for each song, making it easy to find and recognize the desired track.'
    },
    {
        imageUrl: resumeLogo,
        title: 'Resume Swift',
        link: 'https://resumeswift.netlify.app',
        description: 'Resume Swift is a web application tailored for college students across all majors, offering a quick and efficient way to create professional resumes. By simply providing essential details such as work experience, contact information, projects, skills, and education, students can generate a polished resume in minutes. The platform also allows users to download their completed resumes as PDF files, making it easy to save and share for job applications.'
    },

    {
        imageUrl: math,
        title: 'Selfie App',
        link: 'test',
        description: 'This Kotlin-based mobile application provides users with an intuitive and engaging experience. Upon logging in, users can capture a selfie simply by shaking their device, utilizing motion detection for an interactive touch. The captured image is then displayed on the screen, and tapping on the image allows users to view it in full-screen mode for a closer look.'
    },


]
