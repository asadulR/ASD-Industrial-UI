import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const ExpertTeam = () => {
    return (
        <section className=' py-20 my-20 bg-secondary'>
            <h4 className='text-white font-extrabold text-xl mb-4 text-center'>Our Experts</h4>
            <h2 className='text-center mb-10 md:mb-16 font-bold text-primary text-2xl md:text-5xl'>Our Industrial Expert Team</h2>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={1000}
                centerMode={false}
                className="container"
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 3,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={.2}
                swipeable
            >
                <div className='text-center py-2'>
                    <img className=' max-w-sm mx-auto' src='https://i.ibb.co/jJpwGMN/team-9.jpg' alt="" />
                    <h4 className='text-center mt-4 text-base-100 font-bold text-xl'>Robert Powel</h4>
                    <p className='text-center mt-0 text-base-100 text-md font-semibold'>Industry Manager</p>
                    <div className="overlay flex gap-6 justify-center mt-5 ">
                        <a className='text-xl md:text-4xl text-white' href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
                <div className='text-center py-2'>
                    <img className=' max-w-sm mx-auto' src='https://i.ibb.co/f0WrQhv/team-10.jpg' alt="" />
                    <h4 className='text-center mt-4 text-base-100 font-bold text-xl'>Limha Granda</h4>
                    <p className='text-center mt-0 text-base-100 text-md font-semibold'>Exicutive Officer</p>
                    <div className='overlay flex gap-6 justify-center mt-5'>
                        <a className='text-xl md:text-4xl text-white' href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
                <div className='text-center py-2'>
                    <img className=' max-w-sm mx-auto' src='https://i.ibb.co/3hyLXB3/team-11.jpg' alt="" />
                    <h4 className='text-center mt-4 text-base-100 font-bold text-xl'>Doue Sara</h4>
                    <p className='text-center mt-0 text-base-100 text-md font-semibold'>Ass. Manager</p>
                    <div className='overlay flex gap-6 justify-center mt-5'>
                        <a className='text-xl md:text-4xl text-white' href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>

                    </div>
                </div>
                <div className='text-center py-2'>
                    <img className=' max-w-sm mx-auto' src='https://i.ibb.co/jVtTwnW/team-12.jpg' alt="" />
                    <h4 className='text-center mt-4 text-base-100 font-bold text-xl'>Adam Smith</h4>
                    <p className='text-center mt-0 text-base-100 text-md font-semibold'>Mechanical Engineer</p>
                    <div className='overlay flex gap-6 justify-center mt-5'>
                        <a className='text-xl md:text-4xl text-white' href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
                <div className='text-center py-2'>
                    <img className=' max-w-sm mx-auto' src='https://i.ibb.co/wBzS0ry/team-13.jpg' alt="" />
                    <h4 className='text-center mt-4 text-base-100 font-bold text-xl'>Jemmy Lee</h4>
                    <p className='text-center mt-0 text-base-100 text-md font-semibold'>Industry Manager</p>
                    <div className='overlay flex gap-6 justify-center mt-5'>
                        <a className='text-xl md:text-4xl text-white' href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
                <div className='text-center py-2'>
                    <img className=' max-w-sm mx-auto' src="https://i.ibb.co/vdyQHCh/team-14.jpg" alt="" />
                    <h4 className='text-center mt-4 text-base-100 font-bold text-xl'>Herry H. R.</h4>
                    <p className='text-center mt-0 text-base-100 text-md font-semibold'>Mechanical Engineer</p>
                    <div className='overlay flex gap-6 justify-center mt-5'>
                        <a className='text-xl md:text-4xl text-white' href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
                <div className='text-center py-2'>
                    <img className=' max-w-sm mx-auto' src="https://i.ibb.co/z4V51QJ/team-15.jpg" alt="" />
                    <h4 className='text-center mt-4 text-base-100 font-bold text-xl'>Krish Jhonson</h4>
                    <p className='text-center mt-0 text-base-100 text-md font-semibold'>Industry Manager</p>
                    <div className='overlay flex gap-6 justify-center mt-5'>
                        <a className='text-xl md:text-4xl text-white' href="https://web.facebook.com/beingAsad.galib/" target="_blank" rel="noopener noreferrer"><BsFacebook className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://github.com/asadulR" target="_blank" rel="noopener noreferrer"><BsGithub className='fs-1 me-3' /></a>
                        <a className='text-xl md:text-4xl text-white' href="https://www.linkedin.com/in/md-asadul-rahman/" target="_blank" rel="noopener noreferrer"><BsLinkedin className='fs-1 me-3' /></a>
                    </div>
                </div>
            </Carousel>

        </section>
    );
};

export default ExpertTeam;