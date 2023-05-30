import Image from "next/image";

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
                    <form>
                        <div className="grid grid-cols-2 w-[33rem]">
                            <div className="flex flex-col">
                                <label className="mb-1">Nome completo</label>
                                <input className="rounded-lg w-[250px] h-[46px] py-4 pl-4" type="text" placeholder="Seu nome" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1">E-mail</label>
                                <input className="rounded-lg w-[250px] h-[46px] py-4 pl-4" type="text" placeholder="Insira seu melhor e-mail" />
                            </div>
                            <div className="flex flex-col mt-4">
                                <label className="mb-1">Número de celular</label>
                                <input className="rounded-lg w-[250px] h-[46px] py-4 pl-4" type="text" placeholder="(00) 00000-0000" />
                            </div>
                            <div className="flex flex-col mt-4">
                                <label className="mb-1">Principal área de atuação</label>
                                <input className="rounded-lg w-[250px] h-[46px] py-4 pl-4" type="text" placeholder="Finanças, acessoria, etc." />
                            </div>
                        </div>
                        <p className="mt-4">Eu prefiro que o time Kanal entre em <br /> contato no período da:</p>
                        <div className="mt-1 gap-3 flex items-end">
                            <div className="bg-[#475467] w-[88px] h-[40px] flex items-center justify-center gap-1 rounded-lg active:bg-[#121323] focus:bg-[#121323]">
                                <input className="accent-[#FF4C00]" type="radio" value="manha" id="manha" name="period" /> 
                                <label htmlFor="manha">Manhã</label>
                            </div>
                            <div  className="bg-[#475467] w-[88px] h-[40px] flex items-center justify-center gap-1 rounded-lg active:bg-[#121323] focus:bg-[#121323]">
                                <input className="accent-[#FF4C00]" type="radio" value="tarde" name="period" id="tarde"/> 
                                <label htmlFor="tarde">Tarde</label>
                            </div>
                            <div  className="bg-[#475467] w-[88px] h-[40px] flex items-center justify-center gap-1 rounded-lg active:bg-[#121323] focus:bg-[#121323]">
                                <input className="accent-[#FF4C00]" type="radio" value="noite" name="period" id="noite"/>
                                <label htmlFor="noite">Noite</label> 
                            </div>
                            <button className="w-[210px] h-[56px] bg-[#FF4C00] rounded-lg" type="submit">Quero ser um banker</button>
                        </div>
                        
                        
                        <p className="text-xs mt-3">Ao clicar em "quero ser banker" voce aceita os termos e condições do Kanal Open Finance</p>
                    </form>
                </div>
                <div className="flex justify-end items-start">
                    <Image src="/assets/athor.png" alt="logo" width={750} height={720}/>
                </div>
                
            </div>
        </section>
    )
}