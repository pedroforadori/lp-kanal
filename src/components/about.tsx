import Image from 'next/image'
import { FacebookLogo, InstagramLogo, WhatsappLogo, EnvelopeSimple } from 'phosphor-react'

export default function About() {
    return (
        <div className="w-full flex flex-col items-center bg-[#F1F1FB] max-sm:bg-white">
            <h2 className="mt-24 text-4xl">Quem somos<span className="text-[#FF4C00]">.</span></h2>
            <p className="mt-10 w-[600px] font-light text-center max-sm:mx-8 max-sm:w-auto">O Kanal é uma plataforma digital integradora de produtos e serviços, que busca democratizar e simplificar o acesso ao mercado financeiro.</p>
            <div className="grid grid-cols-2 my-12 gap-12 max-sm:hidden">
                <div className="flex fle flex-row gap-4">
                    <p className="text-7xl font-bold">50+</p>
                    <p className="text-2xl">Bancos e <br /> Fintechs</p>
                </div>
                <div className="flex fle flex-row gap-4">
                    <p className="text-7xl font-bold">150+</p>
                    <p className="text-2xl">Produtos <br /> financeiros</p>
                </div>

            </div>
            <div className="mt-11 overflow-x-scroll">
                <div className="flex flex-row my-10 h-10 gap-7 w-[550px] max-sm:w-[320px]">
                    <Image src="/assets/ico-partners/bancodobrasil.png" alt="detalhes imagem" width={170} height={60} />
                    <Image src="/assets/ico-partners/banrisul.png" alt="detalhes imagem" width={170} height={40} />
                    <Image src="/assets/ico-partners/bari.png" alt="detalhes imagem" width={80} height={30} />
                    <Image src="/assets/ico-partners/bradesco.png" alt="detalhes imagem" width={100} height={30} />
                    <Image src="/assets/ico-partners/BV.png" alt="detalhes imagem" width={80} height={50} />
                    <Image src="/assets/ico-partners/CAIXA.png" alt="detalhes imagem" width={140} height={40} />
                    <Image src="/assets/ico-partners/cashme.png" alt="detalhes imagem" width={150} height={40} />
                    <Image src="/assets/ico-partners/creditas.png" alt="detalhes imagem" width={130} height={60} />
                    <Image src="/assets/ico-partners/daycoval.png" alt="detalhes imagem" width={170} height={40} />
                    <Image src="/assets/ico-partners/inter.png" alt="detalhes imagem" width={100} height={30} />
                    <Image src="/assets/ico-partners/itau.png" alt="detalhes imagem" width={100} height={50} />
                    <Image src="/assets/ico-partners/MAG.png" alt="detalhes imagem" width={100} height={40} />
                    <Image src="/assets/ico-partners/nexoos.png" alt="detalhes imagem" width={140} height={40} />
                    <Image src="/assets/ico-partners/pine.png" alt="detalhes imagem" width={100} height={40} />
                    <Image src="/assets/ico-partners/porto.png" alt="detalhes imagem" width={100} height={40} />
                    <Image src="/assets/ico-partners/Santander.png" alt="detalhes imagem" width={180} height={40} />
                    <Image src="/assets/ico-partners/sofisa.png" alt="detalhes imagem" width={100} height={40} />
                </div>
            </div>
            {/* <span className="w-[300px] min-h-[31px] mt-10 h-8 bg-[#FF0068]" /> */}
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