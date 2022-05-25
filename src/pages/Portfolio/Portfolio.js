import React from 'react';
import developer from '../../assets/Images/developer.jpg';
import Footer from '../../components/Footer';
const Portfolio = () => {
    return (
        <section className='bg-base-200'>
            <div class=" min-h-screen pt-24">
                <div class=" grid grid-cols-1 md:grid-cols-2 gap-6 py-6 items-center">
                    <div className='px-3 md:px-10'>
                        <h1 class="text-2xl text-primary md:text-5xl font-bold">Md. Asadul Rahman</h1>
                        <p className='mt-4 font-semibold text-lg'>Full Stack Web Developer</p>
                        <p className='mt-4 '><span className='font-semibold'>Email :</span> <a href="mailto:asad1252001@gmail.com">asad1252001@gmail.com</a> </p>
                        <p className='mt-2 '><span className='font-semibold'>Frontend Skills :</span> JavaScript, React.js, Bootstrap, Tailwind Css, Firebase, Animation libraries,
                            React libraries</p>
                        <p className='mt-2'><span className='font-semibold'>Backend (Familiar) :</span> Express.js, MongoDB, Node.js</p>
                        <p className='mt-2 '><span className='font-semibold'>Tools and Technologies :</span> GitHub, VS Code, Heroku, Netlify, Figma, Adobe Photoshop.</p>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <a className='btn btn-primary' href="https://drive.google.com/file/d/1kyV0QbWckettQFsrvoI0xW6zCTTkzKov/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
                    </div>
                    <div className=" text-center px-3">
                        <img src={developer} alt='Avatar' class=" max-w-lg mx-auto rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Portfolio;