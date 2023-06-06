/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import CV from '../assets/MD Abdullah.pdf';
import Particle from '../design/particle';
import Skill from './skill';

const About = () => {
    return (
        <div  className="w-full container mx-auto md:h-screen md:mb-10">
            <div className="block md:flex w-full md:h-screen md:mb-10 opacity-60">
                {/* Row - 1 */}
                <div className="w-full py-10 md:py-0 md:w-1/2 bg-paragraph rounded-s-xl">
                <img src={require('../assets/DSC_0167.JPG')} className="w-1/3 h-1/3 opacity-150 mx-auto mt-10 md:mt-24 rounded-2xl about-image"/>
                <div className="w-full mt-5">
                    <h3 className="text-center text-5xl text-buttonColor font-bold">MD Abdullah</h3>
                    <p className="text-center text-2xl text-secondary font-light">MERN Stack Developer</p>
                </div>

                <div className="w-5/6 mx-auto mt-10">
                    <p className="font-light text-center">
                        <span className="font-bold">About Me:  </span>
                         With expertise in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React, Node.js, Express.js, and MongoDB, I create visually appealing websites and dynamic web applications. Proficient in front-end and back-end development, I excel in designing user-friendly interfaces and collaborating with teams. Passionate, adaptable, and constantly learning, I strive to deliver exceptional digital experiences.
                    </p>
                </div>
                </div>
                {/* Row - 2  */}
                <div className="w-full py-10 mt-1 md:mt-0 md:py-0 md:w-1/2 bg-light rounded-r-xl"> 
                    <div>
                        <h3 className="text-center mt-5 text-3xl font-bold text-secondary">My Skills</h3>
                        
                        <div className="mt-14 w-5/6 mx-auto my-3 box-border leading-10">
                            <span className="font-bold ">FrontEnd:</span>
                            <Skill skill='HTML'/>
                            <Skill skill='CSS'/>
                            <Skill skill='Tailwind CSS'/>
                            <Skill skill='JavaScript'/>  <Skill skill='React JS'/>

                        </div>



                        <div className="mt-8 w-5/6 mx-auto my-3">
                            <span className="font-bold ">BackEnd:</span>
                            <Skill skill='Node JS'/>
                            <Skill skill='Express JS'/>
                        </div>

                        <div className="mt-8 w-5/6 mx-auto my-3">
                            <span className="font-bold ">Database:</span>
                            <Skill skill='MongoDB'/>
                            <Skill skill='Mongoose'/>
                        </div>

                        <div className="mt-8 w-5/6 mx-auto my-3 leading-10">
                            <span className="font-bold ">Tools:</span>
                            <Skill skill='VSCode'/>
                            <Skill skill='Git'/>
                            <Skill skill='MS Office '/>
                            <Skill skill='POSTMAN'/>
                        </div>

                        <div className="text-center w-full mx-auto mt-14 md:mt-24">
                        <a className="py-2 px-4 text-primary text-lg bg-secondary font-bold rounded-md hover:bg-buttonColor opacity-100" href={CV} download>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
           
            <Particle/>
        </div>
    )
}

export default About;