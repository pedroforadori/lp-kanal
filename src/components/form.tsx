interface IForm{
    radioGroupName: string
}

export default function Form(props: IForm){
    return(
        <form>
            <div className="grid grid-cols-2 text-white max-sm:flex max-sm:flex-col">
                <div className="flex flex-col">
                    <label className="mb-1">Nome completo</label>
                    <input className="rounded-lg w-[250px] h-[46px] py-4 pl-4 max-sm:w-full" type="text" placeholder="Seu nome" />
                </div>
                <div className="flex flex-col max-sm:mt-4 max-sm:ml-0 ml-4">
                    <label className="mb-1">E-mail</label>
                    <input className="rounded-lg w-[250px] h-[46px] py-4 pl-4 max-sm:w-full" type="text" placeholder="Insira seu melhor e-mail" />
                </div>
                <div className="flex flex-col max-sm:mt-4">
                    <label className="mb-1">Número de celular</label>
                    <input className="rounded-lg w-[250px] h-[46px] py-4 pl-4 max-sm:w-full" type="text" placeholder="(00) 00000-0000" />
                </div>
                <div className="flex flex-col max-sm:mt-4 max-sm:ml-0 ml-4">
                    <label className="mb-1">Principal área de atuação</label>
                    <input className="rounded-lg w-[250px] h-[46px] py-4 pl-4 max-sm:w-full" type="text" placeholder="Finanças, acessoria, etc." />
                </div>
            </div>
            <p className="mt-4 text-white max-sm:text-center">Eu prefiro que o time Kanal entre em <br /> contato no período da:</p>
            <div className="mt-1 gap-3 flex items-end text-white max-sm:flex-wrap max-sm:justify-between">
                <div className="bg-[#475467] flex items-center justify-center gap-1 rounded-lg active:bg-[#121323] focus:bg-[#121323] px-4 py-2">
                    <input className="accent-[#FF4C00]" type="radio" value="manha" name={props.radioGroupName} id={`manha${props.radioGroupName}`} /> 
                    <label htmlFor={`manha${props.radioGroupName}`}>Manhã</label>
                </div>
                <div  className="bg-[#475467] flex items-center justify-center gap-1 rounded-lg active:bg-[#121323] focus:bg-[#121323] px-5 py-2">
                    <input className="accent-[#FF4C00]" type="radio" value="tarde" name={props.radioGroupName} id={`tarde${props.radioGroupName}`} /> 
                    <label htmlFor={`tarde${props.radioGroupName}`}>Tarde</label>
                </div>
                <div  className="bg-[#475467] flex items-center justify-center gap-1 rounded-lg active:bg-[#121323] focus:bg-[#121323] px-5 py-2">
                    <input className="accent-[#FF4C00]" type="radio" value="noite" name={props.radioGroupName} id={`noite${props.radioGroupName}`} />
                    <label htmlFor={`noite${props.radioGroupName}`}>Noite</label> 
                </div>
                <button className="bg-[#FF4C00] rounded-lg max-sm:w-full py-3" type="submit">Quero ser um banker</button>
            </div>
            
            
            <p className="text-xs mt-3 text-white ">Ao clicar em &#34;quero ser banker&#34; voce aceita os termos e condições do Kanal Open Finance</p>
        </form>
    )
}