import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, isLoading] = useState(false);
    useEffect(() => {
        isLoading(true)
        fetch(`http://localhost:4000/reviews`)
            .then(res => res.json())
            .then(data => {
                const slicedReview = data.slice(-3);
                setReviews(slicedReview)
            })
        isLoading(false);
    }, [])
    console.log(reviews)
    if (loading) return <Loading />
    return (
        <section className='my-20 md:my-32'>
            <h2 className='text-center text-primary font-extrabold text-2xl md:text-4xl'>Our Clients Around The World</h2>
            <h5 className='text-center font-bold text-secondary text-lg md:text-2xl mt-3'>Our Client’s Speak</h5>



            <div className='grid grid-cols-1 my-10 md:grid-cols-3 px-2 gap-6'>
                {
                    reviews?.map(review => <div key={review?._id} class="card bg-secondary text-white hover:bg-success transition ease-in-out duration-1000">
                        <div class="card-body text-center">
                            <div class="avatar justify-center">
                                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={review?.avatar} alt='Avatar' />
                                </div>
                            </div>
                            <h2 class="font-bold">{review?.name}</h2>
                            <small className=' text-left items-start m-0'>{review?.profession}</small>
                            <small className='text-left '>Ratings: {review?.ratings}</small>
                            <p className='text-left'>{review?.review}</p>

                        </div>
                    </div>)
                }
            </div>

        </section>
    );
};

export default Review;