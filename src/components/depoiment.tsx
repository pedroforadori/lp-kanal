// @ts-ignore */
import Carousel from 'react-elastic-carousel';
import { useState } from 'react'
import Image from 'next/image';
import jsonQuestion from '../../public/data/Items.json'


export default function Depoiment() {
    
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
                    <div key={item.id} className="w-full h-80 flex justify-center bg-[#0E0E0E] pt-5">
                        <div className="w-auto bg-[#161616] p-5 mt-10 rounded-3xl mr-5">
                            <div className="text-base font-poppins h-28 max-xl:h-20"> 
                                <div className="flex flex-row items-center justify-center gap-2 ">
                                    <span className="relative top-[20px]"><Image src="/assets/ico/left-quote.png" alt="aspas" width={80} height={20}/></span>
                                    <p className="h-auto leading-5 text-start">{item.depoiment}</p>
                                    <span className="relative top-[35px]"><Image src="/assets/ico/right-quote.png" alt="aspas" width={80} height={20}/></span>
                                </div>
                            
                            </div>
                            <div className="flex flex-row px-4 my-2 gap-4">
                                <Image src={item.photo} alt={item.photo} width={100} height={80} />
                                <div className="">
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
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}