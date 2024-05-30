import React, { useRef } from 'react';
import { rightImg, tradeIn } from '../utils';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ShopInternals from './ShopInternals';
import { shopOptions } from '../constants';

const Shop = () => {
    const containerRef = useRef(null);

    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 300;
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 300;
        }
    };

    useGSAP(() => {
        gsap.to('#title', { opacity: 1, y: 0 });
        gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
    }, []);

    return (
        <section id='shopAtApple' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full md:flex items-end justify-between'>
                    <h1 id='title' className="section-heading">Ways to shop and save at Apple</h1>
                    <div className='flex flex-wrap items-end gap-5'>
                        <p className='link'>
                            Shop iPhone
                            <img src={rightImg} alt='watch' className='ml-2' />
                        </p>
                    </div>
                </div>
                <div id='shop-options-slider' className='whitespace-nowrap overflow-x-scroll scrollbar-hide' ref={containerRef}>
                    {shopOptions.map(option => (
                        <div key={option.id} className='inline-block min-w-[200px] w-[400px] p-4 h-[420px] relative m-4 align-top'>
                            <div className='shop_option_sub_section rounded-lg w-full p-4 h-full bg-greyish'>
                                <ShopInternals
                                    imgSrc={option.imgSrc}
                                    title={option.title}
                                    subtext={option.subtext}
                                />
                                <div className='btn-container absolute bottom-8 right-8'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div id='carousel' className='text-right mt-4'>
                    <button onClick={handleScrollLeft}>
                        <svg className="h-10 w-10 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                    </button>
                    <button onClick={handleScrollRight}>
                        <svg className="h-10 w-10 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Shop;
