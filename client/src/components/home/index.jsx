import React from "react";
import Particle from '../design/particle';

const Home = () => {
    return (
        <div className="w-full container mx-auto h-screen mt-10">
            <Particle/>
           <div className="bg-paragraph mt-10 p-5">
                <h1 className="text-5xl font-bold text-secondary">MD Abdullah</h1>
                <p className="text-2xl font-light">MERN Stack Web Developer</p>
           </div>
        </div>
    )
}

export default Home;