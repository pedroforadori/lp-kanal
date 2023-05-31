import Carousel from 'react-elastic-carousel';
import { useState } from 'react'
import Image from 'next/image';

export default function Depoiment() {
    
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];

      const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

      const addItem = () => {
        const nextItem = Math.max(1, items.length + 1);
        setItems([...items, nextItem]);
      };
    
      const removeItem = () => {
        const endRange = Math.max(0, items.length - 1);
        setItems(items.slice(0, endRange));
      };
    return (
        <div className="w-full flex flex-col items-center bg-[#0E0E0E] text-white">
            {/* <Carousel isRTL breakPoints={breakPoints} itemsToShow={1}>
                {items.map((item) => (
                    <div key={item}>
                        <div className="bg-[#161616]  w-full">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="grid grid-cols-2 gap-5">
                                <div className=" rounded-full w-10 h-10 bg-white">
                                </div>
                                <div>
                                    <span>
                                    Fulana da Silva
                                    </span>
                                    <span>
                                    São Bernardo do Campo 
                                    </span>
                                    <span>
                                    São Bernardo do Campo 
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel> */}
            <Carousel itemsToShow={1} className="mb-10">
                {items.map((item) => (
                    <div key={item} className=" w-full h-72 flex justify-center bg-[#0E0E0E] pt-5">
                        <div className="w-[500px] h-[200px] bg-[#161616] p-5 mt-10 rounded-3xl">
                        <div className="text-xs font-light h-16"> 
                        <div className="flex items-center gap-2">
                            <span><Image src="/assets/ico/left-quote.png" alt="aspas" width={20} height={20}/></span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <span><Image src="/assets/ico/right-quote.png" alt="aspas" width={20} height={20}/></span>
                        </div>
                        
                        </div>
                            <div className="flex flex-row px-4">
                                <div className="rounded-full w-24 h-24 bg-white mr-5">
                                </div>
                                <div className="">
                                    <hr className="mt-4 w-full" />
                                    <span className="text-2xl text-[#FF4D00]">
                                    Fulana da Silva
                                    </span>
                                    <p className="font-light text-base">
                                    São Bernardo do Campo 
                                    </p>
                                    <p className="font-light text-base text-[#475467]">
                                    São Bernardo do Campo 
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