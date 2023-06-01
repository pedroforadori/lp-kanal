import Image from "next/image";
import Form from "./form";

export default function Apresentation() {
    return (
        <section className="w-full h-screen bg-[#191A30]">
            <div className="flex justify-between px-[120px] pt-12">
                <Image src="/assets/logo.png" alt="logo" width={120} height={45}/>
                <button className="bg-white w-[228px] h-[56px] rounded-lg px-6 py-4 font-bold">Área logada do Banker</button>
            </div>
            <div className="grid grid-cols-2 text-white mt-[112px] pl-[120px]">
                <div className="flex flex-col">
                    <h1 className="text-5xl mb-[25px]">Somos uma <br /> <span className="text-[#FF4C00] font-bold">fintech</span> com uma <br />Plataforma Digital.</h1>
                    <p className="text-2xl mb-[25px]">Um <span className="text-[#FF4C00] font-bold">ecossistema</span> completo, <br />garantindo autonomia sobre <br />suas operações potencializando <br /> seus ganhos.</p>
                    <Form radioGroupName="period-apresentation"/>
                </div>
                <div className="flex justify-end items-start">
                    <Image src="/assets/athor.png" alt="logo" width={750} height={720}/>
                </div>
                
            </div>
        </section>
    )
}