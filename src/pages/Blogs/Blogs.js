import React from 'react';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';

const Blogs = () => {
    return (
        <section className='mt-20'>
            <PageTitle title="Blogs"></PageTitle>
            <h2 className='text-xl md:text-5xl font-bold text-center text-secondary'>Our Blogs</h2>

            <div className=' max-w-5xl mt-10 md:mt-20 mx-auto px-3'>
                <div className="collapse rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-base-100 font-semibold ">
                        How will you improve the performance of a React Application?
                    </div>
                    <div className="collapse-content bg-slate-700 text-primary-content">
                        <p className='font-semibold'>Optimizing performance in a React application</p>

                        <p>1. Keeping component state local where necessary.</p>
                        <p>2. Memoizing React components to prevent unnecessary re-renders.</p>
                        <p>3. Code-splitting in React using dynamic import()</p>
                        <p>4. Windowing or list virtualization in React.</p>
                        <p>5. Lazy loading images in React.</p>
                    </div>
                </div>

                <div className="collapse my-2 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-base-100 font-semibold ">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content bg-slate-700 text-primary-content">
                        <p className=' font-semibold'>There are four main types of state to properly manage in your React apps:</p>
                        <p>1. Local state.</p>
                        <p>2. Global state.</p>
                        <p>3. Server state.</p>
                        <p>4. URL state.</p>
                    </div>
                </div>

                <div className="collapse rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-base-100 font-semibold ">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content bg-slate-700 text-primary-content">
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                </div>
                <div className="collapse rounded-lg my-2">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-base-100 font-semibold ">
                        Why you do not set the state directly in React?
                    </div>
                    <div className="collapse-content bg-slate-700 text-primary-content">
                        <p>One should never update the state directly because of the following reasons:

                            If you update it directly, calling the setState() afterward may just replace the update you made.
                            When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                            You will lose control of the state across all components.</p>
                    </div>
                </div>
                <div className="collapse rounded-lg my-2">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary text-base-100 font-semibold ">
                        What is a unit test? Why should write unit tests??
                    </div>
                    <div className="collapse-content bg-slate-700 text-primary-content">
                        <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default Blogs;