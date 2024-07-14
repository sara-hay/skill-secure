import React from 'react';
import Lottie from "lottie-react";
import animationData from './assets/man-desk-animation.json'
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <main className="flex justify-center items-center max-md:px-5 max-md:max-w-full">
            <section className="flex flex-col mt-20 mb-12 max-w-full w-[750px] max-md:my-10 text-center">
                <div className="flex flex-col text-center max-md:max-w-full">
                    <h1 className="text-7xl text-blue-950 font-bold drop-shadow-xl leading-[86.4px] max-md:max-w-full max-md:text-4xl">
                        Course Recommender
                    </h1>
                    <p className="mt-2 text-blue-950 text-3xl drop-shadow leading-10 max-md:max-w-full">
                        Take this quiz and find out your optimal courses for web development!
                    </p>
                </div>
                <div className="flex flex-col justify-center self-center mt-8 max-w-full text-base leading-4 w-[111px]">
                    <Link to="/quiz">
                        <button className="justify-center p-3 bg-blue-950 text-purple-50 rounded-lg
                        box-shadow-md hover:bg-purple-50 hover:text-blue-950 duration-500">
                            Get started
                        </button>
                    </Link>
                </div>
                <div className="flex justify-center mt-8">
                    <Lottie animationData={animationData} style={{width: 300, height: 300}}/>
                </div>
            </section>
        </main>
    );
}

export default Hero;