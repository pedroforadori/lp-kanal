import { Player } from 'video-react';

export default function Video() {
    return (
        <div className="w-full flex flex-col items-center bg-[#161616] text-white">
            <div className="grid grid-cols-2 mb-32">
                <div className="w-[30rem]">
                    <h2 className="mt-32 text-4xl">Quem já é do time recomenda<span className="text-[#6D3BF2]">!</span></h2>
                    <p className="mt-10 font-light">Guilherme Serafim é Banker do Kanal e sempre prezou pela autonomia em sua carreira.</p>
                    <p className="mt-10 font-light">Confira os motivos que fazem a diferença:</p>
                    <div className="text-base font-light rounded-lg bg-black p-6 w-[450px] mt-10">
                        “Posso oferecer tranquilidade aos meus clientes, cadastrando as operações e sempre buscando a melhor solução para suas necessidades. 
                        Faço meus horários e trabalho de onde eu quiser!”
                    </div>
                </div>
                <div className="flex justify-center items-end">
                    <Player fluid={false} width={300} height={400}>
                        <source width={300} height={300} src="/assets/video/bratz2.mp4" />
                    </Player>
                </div>
            </div>
            
        </div>
    )
}