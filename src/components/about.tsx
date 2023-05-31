import Image from 'next/image'
import { FacebookLogo, InstagramLogo, WhatsappLogo, EnvelopeSimple } from 'phosphor-react'

export default function About() {
    return (
        <div className="w-full flex flex-col items-center bg-[#F1F1FB]">
            <h2 className="mt-32 text-4xl">Quem somos<span className="text-[#FF4C00]">.</span></h2>
            <p className="mt-10 w-[600px] font-light text-center">O Kanal é uma plataforma digital integradora de produtos e serviços, que busca democratizar e simplificar o acesso ao mercado financeiro.</p>
            <div className="mt-11 overflow-x-scroll">
                <div className="flex flex-row my-10 h-10 gap-5 w-[550px]">
                    <Image src="/assets/ico-partners/logo-belvo.png" alt="detalhes imagem" width={80} height={60} />
                    <Image src="/assets/ico-partners/bradesco.png" alt="detalhes imagem" width={100} height={40} />
                    <Image src="/assets/ico-partners/itau.png" alt="detalhes imagem" width={40} height={30} />
                    <Image src="/assets/ico-partners/santander.png" alt="detalhes imagem" width={80} height={50} />
                    <Image src="/assets/ico-partners/logo-portoseguro.png" alt="detalhes imagem" width={60} height={40} />
                    <Image src="/assets/ico-partners/logo-bv.png" alt="detalhes imagem" width={80} height={40} />
                    <Image src="/assets/ico-partners/abensur.png" alt="detalhes imagem" width={80} height={60} />
                    <Image src="/assets/ico-partners/logo-credihome.png" alt="detalhes imagem" width={100} height={40} />
                    <Image src="/assets/ico-partners/logo-daycoval.png" alt="detalhes imagem" width={70} height={30} />
                    <Image src="/assets/ico-partners/logo-elo.png" alt="detalhes imagem" width={90} height={50} />
                    <Image src="/assets/ico-partners/logo-flip.png" alt="detalhes imagem" width={90} height={40} />
                    <Image src="/assets/ico-partners/logo-bv.png" alt="detalhes imagem" width={80} height={40} />
                </div>
            </div>
            <span className="w-[300px] min-h-[31px] mt-10 h-8 bg-[#FF0068]" />
            <div className="flex flex-row items-center justify-around my-20">
                <Image src="/assets/about.png" alt="detalhes imagem" width={350} height={405} />
                <div className="flex flex-col items-center justify-between h-96 relative right-20">
                    <p className=" text-4xl mt-5">Digital <span className="text-[#6D3BF2]">+</span> Humano</p>
                    <p className=" text-4xl mt-4"><span className="text-[#FF4C00]">=</span> Plataforma Kanal</p>
                    <div className="w-[470px] mt-20 bg-white p-12 rounded-xl shadow-md shadow-purple-300 bg-opacity-70">
                        <p>Conectamos possibilidades para os profissionais de negócios do mercado com um modelo inovador.</p>
                        <p className="mt-5">Garantindo um atendimento personalizado as necessidades dos seus clientes.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}