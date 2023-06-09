import { AddIcon } from '@chakra-ui/icons'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    CloseButton,
  } from '@chakra-ui/react'
import jsonQuestion from '../../public/data/questions.json'
import Image from 'next/image'


export default function Question() {
    return (
        <div className="w-full flex flex-col items-center bg-[#191A30] text-white py-32 ">
            <div className="bg-[#121323] py-8 rounded-[32px] max-sm:bg-transparent">
                <div className="flex flex-row px-16 max-sm:flex-col">
                    <div className="flex flex-col justify-center items-center pr-16 max-sm:w-full mb-5 max-sm:pr-0">
                        <Image src="/assets/image/question-mark.png" alt="interrogacao" width={150} height={412}/>
                    </div>
                    
                    <div className="flex justify-center items-center flex-col">
                        <h2 className=" w-full text-left">Principais perguntas.</h2>
                            <Accordion defaultIndex={[0]}>
                                {jsonQuestion.items.map((item) => (
                                    <AccordionItem key={item.id}>
                                    {({ isExpanded }) => (
                                    <>
                                        <h2>
                                        <hr className="bg-white h-[2px] w-full my-3"/>
                                        <AccordionButton>
                                            
                                            <Box as="span" flex='1' textAlign='left' className="max-w-[30rem]">
                                                {item.title}
                                            </Box>
                                            {isExpanded ? (
                                            <CloseButton fontSize='12px' color={"#6D3BF2"} className="ml-1"/>
                                            ) : (
                                            <AddIcon fontSize='12px' color={"#6D3BF2"}  className="ml-1"/>
                                            )}
                                        </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} className="max-w-[30rem] pt-4 text-base font-light">
                                            {item.body}
                                        </AccordionPanel>
                                    </>
                                    )}
                                </AccordionItem>
                                ))}
                            </Accordion>
                    </div>
                </div>    
            </div>
            
        </div>
    )
}