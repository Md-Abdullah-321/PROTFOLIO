import React from "react";
import Skill from '../about/skill';
import ImageEditor from "../assets/image-editor.png";
import TPI from '../assets/tpi.png';
import Particle from "../design/particle";
import ProtfolioComponent from "./protfolioComponent";
const Protfolio = () => {
    return (
    <div>
        <Particle/>
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-3xl text-5xl uppercase font-medium title-font my-10 text-buttonColor">My Projects</h1>
            </div>

            <div className="flex flex-wrap -m-4">

            <ProtfolioComponent image={TPI} title='Tangail Polytechic Institute' gitHub='https://github.com/Md-Abdullah-321/school-management-system' liveLink='https://tangail-polytechnic-institute.netlify.app/'
            technology={[<Skill skill='React JS'/>,<Skill skill='Tailwind CSS'/>, <Skill skill='Node JS'/>, <Skill skill='MongoDB'/> ]}
            />

            <ProtfolioComponent image={ImageEditor} title='Simple Image Editor' gitHub='https://github.com/Md-Abdullah-321/Simple-Image-Editor' liveLink='https://simple-image-editor-apk.netlify.app/'
            technology={[<Skill skill='HTML'/>,<Skill skill='CSS'/>, <Skill skill='JavaScript'/>]}
            />
            </div>
    </div>
    </section>
</div>
    )
}

export default Protfolio;