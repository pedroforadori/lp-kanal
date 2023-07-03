import Image from 'next/image'
import ImageRotate from './image-rotate'

export default function About() {

    return (
        <div className="w-full flex flex-col items-center bg-[#F1F1FB] max-sm:bg-white">
            <h2 className="mt-24 text-4xl">Quem somos<span className="text-[#FF4C00]">.</span></h2>
            <p className="mt-10 w-[600px] font-light text-center max-sm:mx-8 max-sm:w-auto">O Kanal é uma plataforma digital integradora de produtos e serviços, que busca democratizar e simplificar o acesso ao mercado financeiro.</p>
            <div className="grid grid-cols-2 my-12 gap-12 max-sm:hidden">
                <div className="flex fle flex-row gap-4">
                    <p className="text-7xl font-bold">50+</p>
                    <p className="text-2xl">Parceiros <br /> Financeiros</p>
                </div>
                <div className="flex fle flex-row gap-4">
                    <p className="text-7xl font-bold">150+</p>
                    <p className="text-2xl">Produtos <br /> Financeiros</p>
                </div>
            </div>
            <p className="mt-10 w-[600px] text-center max-sm:mx-8 max-sm:w-auto text-4xl">Confira alguns de nossos parceiros:</p>
            <ImageRotate speed="12000"/>
            <div className="flex flex-row items-center justify-around my-20 max-sm:flex-col">
                <Image src="/assets/image/about.png" className="max-sm:w-full" alt="detalhes imagem" width={350} height={405} />
                <div className="flex flex-col items-center justify-between h-96 relative right-20 max-sm:hidden" >
                    <p className=" text-4xl mt-5">Digital <span className="text-[#6D3BF2]">+</span> Humano</p>
                    <p className=" text-4xl mt-4"><span className="text-[#FF4C00]">=</span> Plataforma Kanal</p>
                    <div className="w-[470px] mt-20 bg-white p-12 rounded-xl shadow-md shadow-purple-300 bg-opacity-70 max-sm:w-auto">
                        <p>Conectamos possibilidades para os profissionais de negócios do mercado com um modelo inovador.</p>
                        <p className="mt-5">Garantindo um atendimento personalizado as necessidades dos seus clientes.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center relative mx-8 p-8 mt-[-50px] bg-[#F1F1FB]" id="isMobile">
                    <p className=" text-4xl mt-5">Digital <span className="text-[#6D3BF2]">+</span> Humano</p>
                    <p className=" text-4xl mt-4"><span className="text-[#FF4C00]">=</span> Plataforma Kanal</p>
                        <p>Conectamos possibilidades para os profissionais de negócios do mercado com um modelo inovador.</p>
                        <p className="mt-5">Garantindo um atendimento personalizado as necessidades dos seus clientes.</p>
                </div>
            </div>
        </div>
    )
}