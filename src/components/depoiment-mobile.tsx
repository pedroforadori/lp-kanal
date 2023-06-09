// @ts-ignore */
import Carousel from 'react-elastic-carousel';
import { useState } from 'react'
import Image from 'next/image';
import jsonQuestion from '../../public/data/Items.json'


export default function DepoimentMobile() {
    
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];


    return (
        <div className="w-full flex flex-col items-center bg-[#0E0E0E] text-white">
            {/* 
            // @ts-ignore */}
            <Carousel itemsToShow={1} className="mb-20">
                {jsonQuestion.items.map((item) => (
                    <div key={item.id} className="gap-5">
                        <div className="w-full flex flex-col items-center justify-center p-5 mt-10 rounded-3xl">
                                <Image src={item.photo} alt={item.photo} width={100} height={80} />
                                    <hr className="mt-4 w-full px-40 mb-1" />
                                    <span className="text-2xl text-[#FF4D00]">
                                        {item.name}
                                    </span>
                                    <p className="font-light text-base">
                                        {item.city}
                                    </p>
                                    <p className="font-light text-base text-[#475467]">
                                        {item.type}
                                    </p>
                            <div className="text-base font-poppins h-40 mt-4"> 
                                <div className="flex flex-row items-center justify-center gap-2 ">
                                    <span className="relative top-[30px]"><Image src="/assets/ico/left-quote.png" alt="aspas" width={80} height={20}/></span>
                                    <p className="max-h-4 leading-5 text-justify">{item.depoiment}</p>
                                    <span className="relative top-[30px]"><Image src="/assets/ico/right-quote.png" alt="aspas" width={80} height={20}/></span>
                                </div>
                            
                            </div>
                            
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}