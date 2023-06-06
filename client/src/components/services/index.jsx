import React from "react";
import Particle from "../design/particle";
import ServiceComponent from "./serviceComponent";

const Services = () => {
    return (
        <div>
            <Particle/>
        {/* Service Component */}
        <section className="text-gray-600 body-font md:h-screen">
        <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
         <h1 className="sm:text-3xl text-3xl font-medium title-font text-buttonColor mb-4">SERVICES</h1>
         <div className="flex mt-1 justify-center">
           <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
         </div>
         </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-between">

            <ServiceComponent title='Web Application Development' 
            paragraph='
            I offer custom MERN stack web application development services, that streamlines your business operations with a great UX.'/>

            <ServiceComponent title='E-Commerce Development' 
            paragraph='
            I will help you build a robust and secure online marketplace with our E-Commerce Development, that provides class apart user experience.'/> 
            
            <ServiceComponent title=' Custom Application Development' 
            paragraph='
            We provide you Custom Application development that suits your business requirements, making your services seamless and efficient.'/>

        </div>
    </div>
    </section>
    </div>
    )
}

export default Services;