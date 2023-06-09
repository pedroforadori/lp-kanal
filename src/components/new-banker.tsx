import Image from "next/image";
import Link from "next/link";
import { Envelope, Phone, WhatsappLogo } from "phosphor-react";
import Form from "./form";

export default function NewBanker() {
    return (
        <section className="w-full h-auto bg-[#121323] flex flex-col items-center py-20 max-sm:px-0">
            <div className="max-w-7xl">
                <div className="grid grid-cols-2 text-white max-sm:flex max-sm:flex-col">
                    <div className="flex flex-col items-start justify-between px-28 max-sm:px-8 font-boldHurme">
                        <h2 className="text-4xl font-bold">Seja um Banker do Kanal</h2>
                        <p className="text-xl font-poppins max-sm:py-4">No Kanal, você tem total autonomia sobre suas propostas e solicitações</p>
                        <div className="flex justify-center" id="isMobile">
                            <Form radioGroupPeriod="period-apresentation" radioGroupContact="period-contact"/>
                        </div>
                        <p className="text-xl font-poppins max-sm:text-center my-4">Caso tenha alguma dúvida utilize os canais abaixo:</p>
                            <div className="max-sm:w-full max-sm:items-center max-sm:flex max-sm:flex-col-reverse">
                                <button className="max-sm:w-full flex justify-center items-center text-white px-[10px] py-3 bg-[#6D3BF2] rounded-lg gap-[10px]  mt-4">
                                    <Phone size={32} weight="fill" />
                                        11 2424 6277
                                </button>
                                <div className="flex flex-row gap-6 mt-4">
                                <Link 
                                    className="max-sm:w-full flex justify-center items-center text-white px-10 py-4 bg-[#6D3BF2] rounded-lg gap-[10px]" 
                                    href="https://wa.me/5511940159875?text=Ola,%20gostaria%20de%20mais%20informações%20para%20ser%20banker%20do%20Kanal%20Open%20Finance."
                                >
                                    <WhatsappLogo size={40} />
                                </Link>
                                <Link href="mailto:sejabanker@kanal.com.br" className="flex justify-center items-center text-white bg-[#6D3BF2] rounded-lg gap-[10px] px-10 py-4">
                                    <Envelope size={40} />
                                </Link>
                            </div>
                        
                        </div>
                    </div>
                    <div className="flex justify-center max-sm:hidden">
                        <Form radioGroupPeriod="period-apresentation-question" radioGroupContact="period-contact-question"/>
                    </div>
                </div>
            </div>
        </section>
    )
}