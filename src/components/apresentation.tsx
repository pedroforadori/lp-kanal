import Form from "./form";
import Header from "./header";

export default function Apresentation() {
    return (
        <section className="w-full h-auto flex flex-col items-center bg-[#191A30] max-sm:h-auto max-sm:items-stretch">
            <div className="max-w-[90rem]">
                <Header />
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