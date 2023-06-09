import Image from 'next/image'
import { SkipBack, SkipForward } from 'phosphor-react'

export default function One() {
    return (
        <div className="w-full h-[120vh] flex flex-col items-center justify-center bg-gradient-to-b from from-[#161726] from-5% via-[#191A30] to-[#191A30] max-sm:flex-col max-sm:h-auto px-36 max-sm:px-0">
            <div className="max-w-6xl">
                <div className="grid grid-cols-2 mt-[92px] 
                                max-sm:flex max-sm:flex-col max-sm:w-auto">
                    <div className="max-sm:flex max-sm:flex-col">
                        <Image src="/assets/image/img-two.png" className="max-sm:hidden" alt="logo" width={464} height={650}/>
                        <Image src="/assets/image/banco.png" id="isMobile" alt="logo" width={390} height={320}/>
                        <Image className="mt-[-150px] left-28 z-20 absolute max-sm:hidden" src="/assets/image/detail.png" alt="logo" width={300} height={180}/>
                    </div>
                    <div className="max-sm:hidden mt-5">
                        <div className="text-5xl text-white font-bold">
                            <div className="flex gap-1">
                                Empreenda em um  
                            </div>
                            <div className="flex flex-row relative right-20">
                                <div className="bg-[#6FFC2D] h-12 pl-20 text-black text-right mr-2">ecossistema</div>completo
                            </div>
                            <div className="flex flex-row">
                                <span>com</span> <div className="bg-[#6FFC2D] h-12 text-black mt-1 flex items-center ml-2">100% de autonomia</div>
                            </div>
                        </div>
                        <div className="mt-10 max-sm:hidden">
                            <p className="bg-[#121323] text-base text-white mb-6 p-3 rounded-lg">
                                Konectamos Pessoas e Soluções: Segurança para você ter sempre a mão o produto ou serviço mais adequado para necessidade do seu cliente.
                            </p>
                            <p className="bg-[#121323] text-base text-white mb-6 p-3 rounded-lg">
                                Consultoria personalizada: Trace sua rota de sucesso rumo à independência financeira.
                            </p>
                            <p className="bg-[#121323] text-base text-white mb-6 p-3 rounded-lg">
                                Acompanhamento da jornada de ponta a ponta: Traga o seu relacionamento que nós cuidamos do resto.
                            </p>
                            <p className="bg-[#121323] text-base text-white p-3 rounded-lg">
                                Presença nacional: Parceiros em mais de 20 Estados, em todas as regiões do Brasil.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-row justify-between max-sm:flex-col">
                    <div className="w-full rounded-[32px] bg-[#121323] text-white p-12 max-sm:hidden">
                        <div className="text-3xl font-bold mb-4 ">Quem é o Banker do Kanal<span className="text-[#6D3BF2]">?</span></div>
                            <p>É um profissional do mercado financeiro com experiencia na intermediação de operações comerciais, conectando soluções personalizadas aos seus clientes.</p>
                        </div>
                        <div className="bg-[#6FFC2D] text-3xl p-5 font-bold text-center mx-4 mt-[-50px]" id="isMobile">
                            Uma plataforma, várias soluções para seus clientes.
                        </div>
                        <div className="rounded-[32px] bg-[#121323] text-white p-12 mx-4 mt-4" id="isMobile">
                            <div className="text-3xl font-bold mb-4 ">Quem é o Banker do Kanal<span className="text-[#6D3BF2]">?</span></div>
                            <p>É um profissional do mercado financeiro com experiencia na intermediação de operações comerciais, conectando soluções personalizadas aos seus clientes.</p>
                        </div>
                        <div className="rounded-[32px] bg-[#2168FC] text-white p-12 mb-5 z-10 max-sm:hidden ml-8">
                            <div className="text-3xl font-bold mb-4">Quem é elegível?</div>
                            <p>Assessores de investimento, corretores de todos os segmentos, correspondentes bancários, ex-bancários, consultores, contadores e profissionais que tenham perfil empreendedor.</p>
                        </div>
                        <div className="rounded-[32px] bg-[#2168FC] mx-4 mt-4 text-white p-12 mb-5 z-10" id="isMobile">
                            <div className="text-3xl font-bold mb-4">Quem é elegível?</div>
                            <p>Assessores de investimento, corretores de todos os segmentos, correspondentes bancários, ex-bancários, consultores, contadores e profissionais que tenham perfil empreendedor.</p>
                        </div>
                </div>
            </div>
        </div>
    )
}