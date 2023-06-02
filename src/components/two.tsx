import Image from 'next/image'
import { FacebookLogo, InstagramLogo, WhatsappLogo, EnvelopeSimple } from 'phosphor-react'

export default function Two() {
    return (
        <div className="w-full h-[200vh] flex flex-col bg-gradient-to-b from from-[#FFFFFF] from-25% via-[#F7EAFF] via-50% to-[#FFFFFF] to-90% max-sm:h-auto">
            <Image className="absolute left-[-20px] max-sm:hidden" src="/assets/image/ellipse-blue.png" alt="logo" width={286} height={366}/>
            <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col-reverse max-sm:items-center">
                <div className="mt-52 flex-col ml-40  max-sm:w-auto max-sm:ml-0 max-sm:mt-4 ">
                    <p className="flex justify-end text-3xl text-[#222222] max-sm:justify-center">Por que ser um</p>
                    <div className="flex justify-end text-4xl text-[#222222] mb-5 font-bold max-sm:justify-center max-sm:mx-28 max-sm:text-end">Banker do Kanal?</div>
                    <p className="flex text-justify text-xl max-sm:mx-14 max-sm:text-end">Uma estrutura completa para garantir a rentabilidade máxima da sua carteira de clientes e seus ganhos. 
                                                            Supere seus maiores desafios contando com soluções de ponta em um só lugar!</p>
                    <div className="bg-[#6D3BF2] flex flex-col justify-start mt-10 rounded-3xl gap-4">
                        <p className="text-4xl text-white pl-8 pt-8">Como funciona?</p>
                        <p className="text-xl text-white pl-8 pb-8 max-sm:pl-8 max-sm:pr-8 max-sm:pb-8">Você se cadastra, avaliamos sua experiência e você tem até 60 dias disponíveis para acessar e conhecer nossa plataforma.</p>
                    </div>
                </div>
                <div className="max-sm:hidden">
                    <Image className="relative top-40 left-4" src="/assets/image/detail-phone.png" alt="logo" width={100} height={50}/>
                    <Image className="relative top-[100px] right-6" src="/assets/image/detail-phone.png" alt="logo" width={100} height={50}/>
                    <Image className="absolute ml-5 z-50" src="/assets/image/iphone.png" alt="logo" width={295} height={600}/>
                    <Image className="ml-40 mt-32 max-sm:hidden" src="/assets/image/ellipse-green.png" alt="logo" width={286} height={366}/>
                    <Image className="relative top-[-45px] left-[270px] z-10" src="/assets/image/detail-phone-one.png" alt="logo" width={100} height={50}/>
                    <Image className="relative top-[-70px] left-[290px] z-10" src="/assets/image/detail-phone-two.png" alt="logo" width={30} height={10}/>
                    <Image className="relative top-[-220px] right-0 z-10" src="/assets/image/detail-for.png" alt="logo" width={50} height={50}/>
                    <Image className="relative top-[-280px] right-14 z-10" src="/assets/image/detail-for.png" alt="logo" width={50} height={50}/>
                    <Image className="relative top-[-280px] right-10 z-10" src="/assets/image/detail-three.png" alt="logo" width={100} height={50}/>
                </div>                    
                <Image className="" src="/assets/image/iphone.png" alt="logo" width={295} height={600} id="isMobile"/>
            </div>
            <div className="mt-20">
                <div className="flex flex-row max-sm:flex-col">
                    <Image className="mr-5" src="/assets/image/tie.png" alt="logo" width={350} height={100} />
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center text-[#2C2E50] text-4xl max-sm:mx-4">
                            Vantagens para o Banker do Kanal.
                        </div>
                        <div className="flex flex-row gap-3 mt-12 max-sm:flex-col max-sm:gap-10 max-sm:mb-10 max-sm:px-4">
                            <span className="w-7 h-7 rounded-full bg-[#6D3BF2] relative left-[100px] top-[-10px] max-sm:hidden" />
                            <div className="w-[388px] h-[180px] bg-[#F7EAFF] shadow-lg shadow-purple-300 rounded-[32px] flex flex-col 
                                            max-sm:w-auto max-sm:h-auto max-sm:p-6"> 
                                <p className="flex flex-row mt-9 text-xl items-center justify-center gap-4">
                                    <Image className="" src="/assets/ico/ico-ti.png" alt="logo" width={30} height={30}/>  
                                    <span>Tecnologia</span>
                                </p>
                                <p className="px-6 mt-6 text-base font-light">Plataforma 100% na sua mão, 24/7! Status em tempo real e captação de documentação de maneira ágil.</p>
                            </div>
                            <span className="w-7 h-7 rounded-full bg-[#6D3BF2] relative left-[100px] top-[-10px] max-sm:hidden" />
                            <div className="w-[388px] h-[180px] bg-[#F7EAFF] shadow-lg shadow-purple-300 rounded-[32px]
                                            max-sm:w-auto max-sm:h-auto max-sm:p-6">                
                                <p className="flex flex-row mt-9 text-xl items-center justify-center gap-4">
                                    <Image className="" src="/assets/ico/ico-finan.png" alt="logo" width={30} height={30}/> 
                                    Liberdade Financeira
                                
                                </p>
                                <p className="px-6 mt-6 text-base font-light">Trabalhe de onde quiser! <br /> Liberdade financeira e geográfica. Dedique seu tempo ao que realmente importa.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Image className="absolute left-[-200px] max-sm:hidden" src="/assets/image/ellipse-green.png" alt="logo" width={450} height={366}/>
                <Image className="absolute right-0 max-sm:hidden" src="/assets/image/ellipse-pink.png" alt="logo" width={250} height={250}/>
                <div className="flex flex-row gap-10 mt-12 justify-center max-sm:flex-col max-sm:mt-4 max-sm:px-4">
                    <div className="w-[264px] h-[286px] bg-[#F7EAFF] shadow-lg shadow-purple-300 rounded-[32px] text-[#191A30] flex flex-col items-center justify-start px-6
                                    max-sm:w-auto max-sm:h-auto max-sm:p-6">
                        <span className="w-7 h-7 rounded-full bg-[#6D3BF2] relative left-[-55px] top-[-10px] max-sm:hidden" />
                        <Image className="mb-4" src="/assets/ico/ico-suport.png" alt="logo" width={50} height={50}/>
                        <p className="text-xl mb-4">Suporte exclusivo</p>
                        <p className="font-light">Apoio integral. <br /> Tenha um consultor exclusivo para auxilia-lo nas suas operações do começo ao fim.</p>
                    </div>
                    <div className="w-[264px] h-[286px] bg-[#F7EAFF] shadow-lg shadow-purple-300 rounded-[32px] flex flex-col items-center justify-start px-6
                                    max-sm:w-auto max-sm:h-auto max-sm:p-6">
                    <span className="w-7 h-7 rounded-full bg-[#6D3BF2] relative left-[-55px] top-[-10px] max-sm:hidden" />
                        <Image className="mb-4" src="/assets/ico/ico-autonomia.png" alt="logo" width={50} height={50}/>
                        <p className="text-xl mb-4">Autonomia</p>
                        <p className="font-light">Cadastre e acompanhe suas propostas diretamente na plataforma.</p>
                    </div>
                    <div className="w-[264px] h-[286px] bg-[#F7EAFF] shadow-lg shadow-purple-300 rounded-[32px] flex flex-col items-center justify-start px-6
                                    max-sm:w-auto max-sm:h-auto max-sm:p-6">
                        <span className="w-7 h-7 rounded-full bg-[#6D3BF2] relative left-[-55px] top-[-10px] max-sm:hidden" />
                        <Image className="mb-4" src="/assets/ico/ico-efic.png" alt="logo" width={50} height={50}/>
                        <p className="text-lg mb-4">Eficiência e assertividade</p>
                        <p className="font-light">Unificação dos dados cadastrais com bases de dados públicas. Análise com birôs de crédito reconhecidos no mercado.</p>
                    </div>
                    <div className="w-[264px] h-[286px] bg-[#F7EAFF] shadow-lg shadow-purple-300 rounded-[32px] flex flex-col items-center justify-start px-6
                                    max-sm:w-auto max-sm:h-auto max-sm:p-6">
                        <span className="w-7 h-7 rounded-full bg-[#6D3BF2] relative left-[-55px] top-[-10px] max-sm:hidden" />
                        <Image className="mb-4" src="/assets/ico/ico-product.png" alt="logo" width={50} height={50}/>
                        <p className="text-xl mb-4">Produtos focados em sua rentabilidade</p>
                        <p className="font-light">Portfólio de produtos direcionado para operações rentáveis.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}