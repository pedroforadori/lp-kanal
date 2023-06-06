export default function Video() {
    return (
        <div className="w-full flex flex-col items-center bg-[#161616] text-white">
            <div className="grid grid-cols-2 mb-32 max-sm:flex max-sm:flex-col max-sm:items-center">
                <div className="w-[30rem] max-sm:w-auto">
                    <h2 className="mt-32 text-4xl max-sm:mt-12 max-sm:mx-8 max-sm:text-center">Quem já é do time recomenda<span className="text-[#6D3BF2]">!</span></h2>
                    <p className="mt-10 font-light max-sm:mx-8">Guilherme Serafim é Banker do Kanal e sempre prezou pela autonomia em sua carreira.</p>
                    <p className="mt-10 font-light max-sm:mx-8">Confira os motivos que fazem a diferença:</p>
                    <div className="text-base font-light rounded-lg bg-black p-6 w-[450px] mt-10 max-sm:w-auto max-sm:hidden">
                        “Posso oferecer tranquilidade aos meus clientes, cadastrando as operações e sempre buscando a melhor solução para suas necessidades. 
                        Faço meus horários e trabalho de onde eu quiser!”
                    </div>
                </div>
                <div className="flex justify-center items-end max-sm:mt-12">
                <iframe width="420" height="450" className="max-sm:w-[320px]"
                 src="https://www.youtube.com/embed/iMz-l4iEIy4">
                </iframe>
                </div>
                <div className="text-base p-6 w-auto" id="isMobile">
                        “Posso oferecer tranquilidade aos meus clientes, cadastrando as operações e sempre buscando a melhor solução para suas necessidades. 
                        Faço meus horários e trabalho de onde eu quiser!”
                </div>
            </div>
            
        </div>
    )
}