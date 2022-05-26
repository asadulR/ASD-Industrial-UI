import React from 'react';
import './Page404';
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import img from '../../assets/Images/not-found/error.jpg';
import PageTitle from '../../components/PageTitle/PageTitle';
const Page404 = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
    }
    return (
        <div className='my-5 pt-20'>
            <PageTitle title="404 error"></PageTitle>
            <div className='container mx-auto'>
                <h1 className='text-error font-extrabold'>OOOPPS...  404 ERROR</h1>
                <div>
                    <img className=' w-full' src={img} alt="" />
                </div>
                <h4 className=' font-extrabold text-center'>Error. The Page you were looking for, couldn't be found..</h4>
                <div className='text-center mt-5'> <button onClick={navigateHome} className='btn btn-primary fw-bold py-2 px-4' > <BsArrowLeft className='icon-recize mr-3' /> Go To Home Page</button></div>
            </div>
        </div>
    );
};

export default Page404;