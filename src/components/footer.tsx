import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <section className="w-full bg-[#212121] py-20">
            <div className="flex flex-row justify-between px-96 max-sm:flex-col max-sm:px-8">
                <div className="flex flex-col text-white gap-3">
                    <Image src="/assets/image/logo.png" alt="logo" width={120} height={45}/>
                    <Link className="underline" href="#">Termos de Uso</Link>
                    <Link className="underline" href="#">Politica de Privacidade</Link>
                </div>
                <div>
                    <p className="text-white">Siga o Kanal nas redes sociais</p>
                    <div className="flex flex-row gap-4 mt-4 ">
                        <Image src="/assets/ico/youtube.png" alt="logo" width={32} height={32}/>
                        <Image src="/assets/ico/instagram.png" alt="logo" width={32} height={32}/>
                        <Image src="/assets/ico/facebook.png" alt="logo" width={32} height={32}/>
                        <Image src="/assets/ico/linkedin.png" alt="logo" width={32} height={32}/>
                    </div>
                </div>
                
            </div>
            <div className="text-white text-[10px] px-96 mt-12 flex flex-col items-center justify-center max-sm:px-8">
                <hr className="bg-[#929292] h-[1px] px-96 my-6 max-sm:px-44" id="isMobile"/>
                    <p>
                        O Kanal não é uma instituição bancária ou agente de distribuição financeiro. Somos uma plataforma que fornece aos nossos parceiros denominados bankers, as ferramentas para divulgação de produtos, serviços e 
                        conveniências. O Kanal intermedia as negociações entre os Bankers e as instituições indicadas em nosso site sem qualquer intervenção direta ou responsabilidade.	
                        Seus dados financeiros e bancários estão protegidos nos termos da lei e são absolutamente sigilosos. O Kanal e seus parceiros não cobram nenhum valor adiantado pela prestação de serviços ou concessão de crédito.
                    </p>
                    <hr className="bg-[#929292] h-[1px] px-96 my-6 max-sm:px-44" />
                    <p>
                        Kanal Open Finance - Todos os direitos reservados - 2023. | CNPJ: 41.571.650/0001-74 | (11) 2424 6277
                    </p>
            </div>
            
        </section>
    )
}