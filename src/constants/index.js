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
import cv from '../assets/logos/paper.png'
import math from '../assets/logos/calculator.png'


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
        title: 'SocialSoothe',
        link: 'test',
        description: 'Web application for people with social anxiety that offers them daily mood journal check ins, different breathing exercises and a social tree where'
        + 'before any social event they are asked a questionare on how they will deal with it and'
        + 'after completing that social event that are rewarded a flower that goes on their virtual tree.'
        +' Completing each social tree also gives them leafs which act as currency that allows them to payout to get different rewards.'
    },
    {
        imageUrl: fox,
        title: 'SortiFox',
        link: 'test',
        description:
        'Web application that allows college students to save and sort their school work files including pdf and images into different folders'
        + 'as well as be able to download their stored files and share it with other people through email'
    },

    {
        imageUrl: arty,
        title: 'Arty Portfolio',
        link: 'test',
        description: 'Virtual artist portfolio web application that allows artist to save their artwork or their favorite artists artwork in a virtual portfolio'
        + 'and allows them to sort each artwork by artists, location, art medium and art style'
    },
    {
        imageUrl: cv,
        title: 'CvCraft',
        link: 'test',
        description: 'Web application that allows users to create a resume for college or work and be able to download their created resume as a pdf'
    },

    {
        imageUrl: math,
        title: 'Arthimetic',
        link: 'test',
        description: 'Kotlin moblie app for kids to learn simple arithmetic,'
        + 'it will ask the user for the difficulty level, the operation to practice, and the number of questions. The difficulty level will be easy, medium and hard'
        + 'and after all questions are answered it tell thems how many they got right and wrong'
    },


]
