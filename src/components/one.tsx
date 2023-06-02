import Image from 'next/image'
import { SkipBack, SkipForward } from 'phosphor-react'

export default function One() {
    return (
        <div className="w-full h-[120vh] flex justify-center bg-gradient-to-b from from-[#161726] from-5% via-[#191A30] to-[#191A30] max-sm:flex-col max-sm:h-auto ">
            <div className="grid grid-cols-2 mt-[92px] w-[1000px] max-sm:flex max-sm:flex-col max-sm:w-auto">
                <div className="max-sm:flex max-sm:flex-col">
                    <Image src="/assets/image/img-two.png" className="max-sm:hidden" alt="logo" width={464} height={650}/>
                    <Image src="/assets/image/banco.png" className="max-sm:w-full" id="isMobile" alt="logo" width={390} height={320}/>
                    <Image className="mt-8 ml-7 z-20 absolute max-sm:hidden" src="/assets/image/detail.png" alt="logo" width={300} height={180}/>
                    <div className="rounded-[32px] bg-[#121323] relative top-[-250px] left-80 text-white pt-12 px-12 max-sm:hidden">
                        <div className="text-3xl font-bold mb-4 ">Quem é o Banker do Kanal<span className="text-[#6D3BF2]">?</span></div>
                        <p>Um profissional de negócios. Traga sua experiência comercial e agregue muito mais valor aos seus clientes.</p>
                    </div>
                    <div className="bg-[#6FFC2D] text-3xl p-5 font-bold text-center mx-4 mt-[-50px]" id="isMobile">
                        Uma plataforma, várias soluções para seus clientes.
                    </div>
                    <div className="rounded-[32px] bg-[#121323] text-white p-12 mx-4 mt-4" id="isMobile">
                        <div className="text-3xl font-bold mb-4 ">Quem é o Banker do Kanal<span className="text-[#6D3BF2]">?</span></div>
                        <p>Um profissional de negócios. Traga sua experiência comercial e agregue muito mais valor aos seus clientes.</p>
                    </div>
                    <div className="w-[686px] h-[249px] rounded-[32px] bg-[#2168FC] relative top-[-185px] left-80 text-white pt-12 px-12 mb-5 z-10 max-sm:hidden">
                        <div className="text-3xl font-bold mb-4">Quem é elegivel?</div>
                        <p>Assessores de investimento, corretores de todos os segmentos, correspondentes bancários, ex-bancários, consultores, contadores e profissionais que tenham perfil empreendedor</p>
                    </div>
                    <div className="rounded-[32px] bg-[#2168FC] mx-4 mt-4 text-white p-12 mb-5 z-10" id="isMobile">
                        <div className="text-3xl font-bold mb-4">Quem é elegivel?</div>
                        <p>Assessores de investimento, corretores de todos os segmentos, correspondentes bancários, ex-bancários, consultores, contadores e profissionais que tenham perfil empreendedor</p>
                    </div>
                    
                </div>
                <div className="max-sm:hidden">
                    <div className="text-5xl text-white font-bold">
                        <div className="flex gap-1">
                            A <div className="bg-[#6FFC2D] w-64 h-12 text-black">plataforma</div>  que
                        </div>
                        <div>
                            busca trazer as 
                        </div>
                        <div className="flex">
                            <div className="bg-[#6FFC2D] h-12 text-black mt-1 flex items-center">melhores soluções</div>
                        </div>
                        <div>
                            para seus clientes
                        </div>
                          no ecossistema financeiro brasileiro
                    </div>
                </div>
            </div>
           
        </div>
    )
}