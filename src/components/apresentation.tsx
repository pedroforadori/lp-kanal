import Image from "next/image";
import Form from "./form";

export default function Apresentation() {
    return (
        <section className="w-full h-auto bg-[#191A30] max-sm:h-auto">
            <div className="flex justify-between px-[120px] pt-12 max-sm:px-0">
                <Image src="/assets/image/logo.png" alt="logo" width={140} height={0} quality={100} />
                <button className="bg-white rounded-lg px-6 py-4 font-bold max-sm:hidden">Área logada do Banker</button>
            </div>
            <div className="grid grid-cols-2 text-white mt-[60px] pl-[120px] max-sm:flex max-sm:flex-col-reverse max-sm:px-8 max-sm:mt-8">
                <div className="flex flex-col">
                    <h1 className="text-5xl mb-[25px] max-sm:text-4xl max-sm:mt-[-50px]">Somos uma <br /> <span className="text-[#FF4C00] font-bold">fintech</span> com uma <br />Plataforma Digital<span className="text-[#FF4C00] font-bold">.</span></h1>
                    <p className="text-2xl mb-[25px] max-sm:hidden">Um <span className="text-[#FF4C00] font-bold">ecossistema</span> completo, <br />garantindo autonomia sobre <br />suas operações potencializando <br /> seus ganhos.</p>
                    <p className="text-2xl mb-[25px]" id="isMobile">Com autonomia sobre suas operações e comissões antecipadas e aumente seus ganhos</p>
                    <Form radioGroupName="period-apresentation"/>
                </div>
                <div className="flex justify-end items-start">
                    <Image src="/assets/image/athor.png" alt="logo" width={750} height={720}/>
                </div>
                
            </div>
        </section>
    )
} 