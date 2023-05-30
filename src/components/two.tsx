import Image from 'next/image'
import { FacebookLogo, InstagramLogo, WhatsappLogo, EnvelopeSimple } from 'phosphor-react'

export default function Two() {
    return (
        <div className="w-full h-[200vh] flex flex-col items-center bg-gradient-to-b from from-[#F7EAFF] from-25% via-[#F7EAFF] via-50% to-[#FFFFFF] to-90%">
            <Image className="absolute left-[-20px]" src="/assets/ellipse-blue.png" alt="logo" width={286} height={366}/>
            <div className="grid grid-cols-2 ml-44">
                <div className="mt-52 w-[600px]">
                    <p className="flex justify-end text-3xl text-[#222222]">Por que ser um</p>
                    <div className="flex justify-end text-4xl text-[#222222] mb-5 font-bold">Banker do Kanal?</div>
                    <p className="flex text-justify text-xl">Uma estrutura completa para garantir a rentabilidade máxima da sua carteira de clientes e seus ganhos. 
                                                            Supere seus maiores desafios contando com soluções de ponta em um só lugar!</p>
                    <div className="bg-[#6D3BF2] flex flex-col justify-start mt-10 rounded-3xl gap-4">
                        <p className="text-4xl text-white pl-8 pt-8">Como funciona?</p>
                        <p className="text-xl text-white pl-8 pb-8">Você se cadastra, avaliamos sua experiência e você tem até 60 dias disponíveis para acessar e conhecer nossa plataforma.</p>
                    </div>
                </div>
                <div>
                    <Image className="relative top-40 left-4" src="/assets/detail-phone.png" alt="logo" width={100} height={50}/>
                    <Image className="relative top-[100px] right-6" src="/assets/detail-phone.png" alt="logo" width={100} height={50}/>
                    <Image className="absolute ml-5 z-50" src="/assets/iphone.png" alt="logo" width={295} height={600}/>
                    <Image className="ml-40 mt-32" src="/assets/ellipse-green.png" alt="logo" width={286} height={366}/>
                    <Image className="relative top-[-45px] left-[270px] z-10" src="/assets/detail-phone-one.png" alt="logo" width={100} height={50}/>
                    <Image className="relative top-[-70px] left-[290px] z-10" src="/assets/detail-phone-two.png" alt="logo" width={30} height={10}/>
                    <Image className="relative top-[-220px] right-0 z-10" src="/assets/detail-for.png" alt="logo" width={50} height={50}/>
                    <Image className="relative top-[-280px] right-14 z-10" src="/assets/detail-for.png" alt="logo" width={50} height={50}/>
                    <Image className="relative top-[-280px] right-10 z-10" src="/assets/detail-three.png" alt="logo" width={100} height={50}/>
                </div>                    
            </div>
            <div className="mt-20">
                <div className="flex flex-row">
                    {/* <div className="bg-[#6D3BF2] rounded-full w-80 h-80" /> */}
                    <Image className="mr-5" src="/assets/tie.png" alt="logo" width={350} height={100} />
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center text-[#2C2E50] text-4xl">
                            Vantagens para o Banker do Kanal.
                        </div>
                        <div className="flex flex-row gap-3 mt-12">
                            <div className="w-[388px] h-[175px] bg-[#F7EAFF] shadow-lg shadow-purple-300 rounded-[32px] flex flex-col">
                                <span className="w-7 h-7 rounded-full bg-[#6D3BF2] absolute left-[600px]" />
                                <p className="text-center mt-9 text-xl font-semibold">Tecnologia</p>
                                <p className="px-6 mt-6 text-base">Plataforma 100% na sua mão, 24/7! Status em tempo real e captação de documentação de maneira ágil.</p>
                            </div>
                            <div className="w-[388px] h-[175px] bg-[#F7EAFF] shadow-lg shadow-purple-300 rounded-[32px]">
                                <span className="w-7 h-7 rounded-full bg-[#6D3BF2] absolute left-[1000px]" />
                                <p className="text-center mt-9 text-xl font-semibold">Liberdade Financeira</p>
                                <p className="px-6 mt-6 text-base">Trabalhe de onde quiser! <br /> Liberdade financeira e geográfica. Dedique seu tempo ao que realmente importa.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Image className="absolute left-[-100px]" src="/assets/ellipse-green.png" alt="logo" width={286} height={366}/>
                <div className="flex flex-row gap-7 mt-12">
                    <div className="w-[264px] h-[286px] bg-[#F7EAFF] shadow-lg shadow-purple-300 rounded-[32px] text-[#191A30] flex flex-col items-center justify-center px-6">
                        <span className="w-7 h-7 rounded-full bg-[#6D3BF2] relative left-[-55px] top-[-45px]" />
                        <Image className="" src="/assets/suport.png" alt="logo" width={50} height={50}/>
                        <p className="text-xl font-semibold mb-4">Tecnologia</p>
                        <p>Plataforma 100% na sua mão, 24/7! Status em tempo real e captação de documentação de maneira ágil.</p>
                    </div>
                    <div className="w-[264px] h-[286px] bg-[#F7EAFF] shadow-lg shadow-purple-300 rounded-[32px] flex flex-col items-center justify-center px-6">
                    <span className="w-7 h-7 rounded-full bg-[#6D3BF2] relative left-[-55px] top-[-45px]" />
                        <Image className="" src="/assets/suport.png" alt="logo" width={50} height={50}/>
                        <p className="text-xl font-semibold mb-4">Tecnologia</p>
                        <p>Plataforma 100% na sua mão, 24/7! Status em tempo real e captação de documentação de maneira ágil.</p>
                    </div>
                    <div className="w-[264px] h-[286px] bg-[#F7EAFF] shadow-lg shadow-purple-300 rounded-[32px] flex flex-col items-center justify-center px-6">
                        <span className="w-7 h-7 rounded-full bg-[#6D3BF2] relative left-[-55px] top-[-45px]" />
                        <Image className="" src="/assets/suport.png" alt="logo" width={50} height={50}/>
                        <p className="text-xl font-semibold mb-4">Tecnologia</p>
                        <p>Plataforma 100% na sua mão, 24/7! Status em tempo real e captação de documentação de maneira ágil.</p>
                    </div>
                    <div className="w-[264px] h-[286px] bg-[#F7EAFF] shadow-lg shadow-purple-300 rounded-[32px] flex flex-col items-center justify-center px-6">
                        <span className="w-7 h-7 rounded-full bg-[#6D3BF2] relative left-[-55px] top-[-45px]" />
                        <Image className="" src="/assets/suport.png" alt="logo" width={50} height={50}/>
                        <p className="text-xl font-semibold mb-4">Tecnologia</p>
                        <p>Plataforma 100% na sua mão, 24/7! Status em tempo real e captação de documentação de maneira ágil.</p>
                    </div>
                    <Image className="absolute right-0" src="/assets/ellipse-pink.png" alt="logo" width={286} height={366}/>
                </div>
                
            </div>
        </div>
    )
}