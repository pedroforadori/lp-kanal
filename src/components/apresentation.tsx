import Image from "next/image";
import Link from "next/link";
import { List } from "phosphor-react";
import Form from "./form";

export default function Apresentation() {
    return (
        <section className="w-full h-auto flex flex-col items-center bg-[#191A30] max-sm:h-auto max-sm:items-stretch">
            <div className="max-w-[90rem]">
                <div className="flex justify-between pt-12 max-sm:px-8">
                    <img src="/assets/image/logo.svg" alt="logo" />
                    {/* <Image src="/assets/image/logo.png" alt="logo" width={120} height={0}/> */}
                    <Link href="https://marketplace.kanal.com.br/login" className="bg-white rounded-lg px-6 py-4 font-bold max-sm:hidden">Área logada do Banker</Link>
                    <Link href="https://marketplace.kanal.com.br/login" id="isMobile">
                        <List size={32} className="text-white" />
                    </Link>
                </div>
                <div className="flex justify-center text-white mt-[60px] pl-[120px] max-sm:flex max-sm:flex-col-reverse max-sm:px-8 max-sm:mt-8">
                    <div className="flex flex-col">
                        <h1 className="text-5xl mb-[25px] max-sm:text-4xl max-sm:mt-[-50px] font-boldHurme leading-tight text-left"> <span className="bg-[#6FFC2D] text-black leading-normal">Descomplique</span>  sua rotina e <span className="bg-[#6FFC2D] text-black">facilite</span> sua vida</h1>
                        <p className="text-2xl mb-[25px] max-sm:hidden">Ofereça os melhores produtos <br /> financeiros à sua carteira de clientes em <br /> um único lugar.</p>
                        <p className="text-2xl mb-[25px]" id="isMobile">Ofereça os melhores produtos financeiros à sua carteira de clientes emum único lugar.</p>
                        <Form radioGroupPeriod="period-apresentation" radioGroupContact="period-contact"/>
                    </div>
                    <div className="flex w-full justify-around items-end mb-16">
                        <img src="/assets/image/athor.png" alt="logo" />
                    </div>
                    
                </div>
            </div>
            
        </section>
    )
} 