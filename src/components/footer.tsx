import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <section className="w-full flex flex-col items-center bg-[#212121] py-20 max-sm:items-stretch">
            <div className="max-w-7xl">
                <div className="flex flex-row justify-between max-sm:flex-col max-sm:px-8">
                    <div className="flex flex-col text-white gap-3">
                        <Image src="/assets/image/logo.png" alt="logo" width={120} height={45}/>
                        <Link className="underline" target="_blank" href="https://kanal-termos-uso.s3.sa-east-1.amazonaws.com/termos-de-uso-kanal-2.1.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=90">Termos de Uso</Link>
                        <Link className="underline" target="_blank" href="https://kanal-termos-uso.s3.sa-east-1.amazonaws.com/politica-privacidade-1.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=90">Politica de Privacidade</Link>
                    </div>
                    <div>
                        <p className="text-white">Siga o Kanal nas redes sociais</p>
                        <div className="flex flex-row gap-4 mt-4 ">
                            <Link href="https://www.youtube.com/@kanalopenfinance1348" target="_blank">
                                <Image src="/assets/ico/youtube.png" alt="logo" width={32} height={32}/>
                            </Link>
                            <Link href="https://www.instagram.com/kanal.open.finance/" target="_blank">
                                <Image src="/assets/ico/instagram.png" alt="logo" width={32} height={32}/>
                            </Link>
                            <Link href="https://www.facebook.com/Kanal.Open.Finance" target="_blank">
                                <Image src="/assets/ico/facebook.png" alt="logo" width={32} height={32}/>
                            </Link>
                            <Link href="https://www.linkedin.com/company/kanal-open-finance/" target="_blank">
                                <Image src="/assets/ico/linkedin.png" alt="logo" width={32} height={32}/>
                            </Link>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="text-white text-[10px] mt-12 flex flex-col items-center justify-center max-sm:px-8">
                    <hr className="bg-[#929292] h-[1px] my-6 max-sm:px-44" id="isMobile"/>
                        <p>
                            O Kanal não é uma instituição bancária ou agente de distribuição financeiro. Somos uma plataforma que fornece aos nossos parceiros denominados bankers, as ferramentas para divulgação de produtos, serviços e 
                            conveniências. O Kanal intermedia as negociações entre os Bankers e as instituições indicadas em nosso site sem qualquer intervenção direta ou responsabilidade.	
                            Seus dados financeiros e bancários estão protegidos nos termos da lei e são absolutamente sigilosos. O Kanal e seus parceiros não cobram nenhum valor adiantado pela prestação de serviços ou concessão de crédito.
                        </p>
                        <hr className="bg-[#929292] h-[1px] w-full my-6 max-sm:px-44" />
                        <p>
                            Kanal Open Finance - Todos os direitos reservados - 2023. | CNPJ: 41.571.650/0001-74 | (11) 2424 6277
                        </p>
                </div>
            </div>
           
            
        </section>
    )
}