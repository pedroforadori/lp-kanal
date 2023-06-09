import Image from "next/image";
import Form from "./form";

export default function Apresentation() {
    return (
        <section className="w-full h-auto flex flex-col items-center bg-[#191A30] max-sm:h-auto max-sm:items-stretch">
            <div className="max-w-7xl">
                <div className="flex justify-between pt-12 max-sm:px-0">
                    <Image src="/assets/image/logo.png" alt="logo" width={140} height={0} quality={100} />
                    <button className="bg-white rounded-lg px-6 py-4 font-bold max-sm:hidden">Área logada do Banker</button>
                </div>
                <div className="flex justify-center text-white mt-[60px] pl-[120px] max-sm:flex max-sm:flex-col-reverse max-sm:px-8 max-sm:mt-8">
                    <div className="flex flex-col">
                        <h1 className="text-5xl mb-[25px] max-sm:text-4xl max-sm:mt-[-50px] font-boldHurme">Descomplique sua rotina e facilite sua vida</h1>
                        <p className="text-2xl mb-[25px] max-sm:hidden">Ofereça os melhores produtos <br /> financeiros à sua carteira de clientes em <br /> um único lugar.</p>
                        <p className="text-2xl mb-[25px]" id="isMobile">Com autonomia sobre suas operações e comissões antecipadas e aumente seus ganhos</p>
                        <Form radioGroupPeriod="period-apresentation" radioGroupContact="period-contact"/>
                    </div>
                    <div className="flex justify-around items-end mb-16">
                        <Image src="/assets/image/athor.png" alt="logo" width={1000} height={720}/>
                    </div>
                    
                </div>
            </div>
            
        </section>
    )
} 