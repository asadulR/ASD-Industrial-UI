import React from 'react';

const WeProvide = () => {
    return (
        <section style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/image.png'})`,
            backgroundRepeat: 'no-repeat', 
          }}>
            <h2 className=' text-3xl text-center md:text-5xl font-bold max-w-xl mx-auto'>We Manufacture Best Machine
                For Industries</h2>
        </section>
    );
};

export default WeProvide;