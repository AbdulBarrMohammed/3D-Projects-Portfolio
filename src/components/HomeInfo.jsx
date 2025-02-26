import React from "react";
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mex-5">
            Hi, my name is <span className="font-semibold">Barr Mohammed</span> 😃
            <p>Click for animation</p>
        </h1>
    ),
    2: (
        <InfoBox
            text="Have a deep desire and drive in Software Development with learning many
            skills over the past and current year"
            link="/about"
            btnText="Learn more"

        />
    ),
    3: (
        <InfoBox
            text="Created many projects with React, SQL, Javascript, Kotlin and so much more"
            link="/projects"
            btnText="Visit my portfolio"

        />
    ),
    4: (
        <InfoBox
            text="Looking for a new hard-driven dev?"
            link="/contact"
            btnText="Lets connect"

        />
    )
}




const HomeInfo = ({ currentStage }) => {
    return  renderContent[currentStage] || null;
}


export default HomeInfo
