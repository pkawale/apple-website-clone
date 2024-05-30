import React from 'react'
import { shopOptions } from '../utils'

const ShopInternals = ({imgSrc, title, subtext}) => {
    return (
            <div className='shop_options_text_icon'>
                <img id='shopIcon' src={imgSrc} alt='icon_shop' className='px-5 mt-8' />
                <div id='title' className='text-2xl font-semibold text-left ml-5 pt-6 break-words text-wrap'>
                    {title}
                </div>
                <p id='subtext' className='ml-5 card-subtitle font-thin break-words text-wrap'>
                    {subtext}
                </p>
            </div>    
    );
}

export default ShopInternals