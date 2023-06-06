interface IForm{
    radioGroupName: string
}

export default function Form(props: IForm){
    return(
        <form>
            <div className="flex flex-col">
                <label className="mb-1">Nome completo</label>
                <input className="rounded-lg w-full h-[46px] py-4 pl-4 max-sm:w-full text-[#9F9F9F]" type="text" placeholder="Seu nome" />
            </div>
            <div className="grid grid-cols-2 text-white max-sm:flex max-sm:flex-col">
                <div className="flex flex-col max-sm:mt-4 max-sm:ml-0 mt-2">
                    <label className="mb-1">E-mail</label>
                    <input className="rounded-lg w-full h-[46px] py-4 pl-4 text-[#9F9F9F]" type="text" placeholder="Insira seu melhor e-mail" />
                </div>
                <div className="flex flex-col ml-4 mt-2 max-sm:ml-0">
                    <label className="mb-1">Perfil do Linkedin</label>
                    <input className="rounded-lg w-full h-[46px] py-4 pl-4 text-[#9F9F9F]" type="text" placeholder="URL do seu Perfil do Linkedin" />
                </div>
                <div className="flex flex-col max-sm:mt-4 mt-2">
                    <label className="mb-1">Número de celular</label>
                    <input className="rounded-lg w-full h-[46px] py-4 pl-4 text-[#9F9F9F]" type="text" placeholder="URL do seu Perfil do Linkedin" />
                </div> 
                <div className="flex flex-col max-sm:mt-4 max-sm:ml-0 ml-4 mt-2">
                    <label className="mb-1">Principal área de atuação</label>
                    <select className="rounded-lg w-full h-[46px] py-3 px-4 text-[#9F9F9F]" name="select" id="select">
                        <option value="Bancos e correlatos">Bancos e correlatos</option>
                        <option value="Corretoras de Investimento e correlatos">Corretoras de Investimento e correlatos</option>
                        <option value="Segudoras e correlatos">Segudoras e correlatos</option>
                        <option value="Escritório Contábil e correlatos">Escritório Contábil e correlatos</option>
                        <option value="Corretores Imobiliários e correlatos">Corretores Imobiliários e correlatos</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
                <div className="flex flex-col items-center justify-between max-sm:items-start">
                    <p className="mt-4 justify-center text-white max-sm:text-center">Você possui carteira de clientes?</p>
                    <div className="mt-1 gap-3 flex justify-end text-white max-sm:flex-wrap max-sm:justify-between">
                        <div className="bg-[#475467] flex items-center justify-center gap-1 rounded-lg active:bg-[#121323] focus:bg-[#121323] px-4 py-2">
                            <input className="accent-[#FF4C00]" type="radio" value="manha" name={props.radioGroupName} id={`manha${props.radioGroupName}`} /> 
                            <label htmlFor={`manha${props.radioGroupName}`}>Manhã</label>
                        </div>
                        <div  className="bg-[#475467] flex items-center justify-center gap-1 rounded-lg active:bg-[#121323] focus:bg-[#121323] px-5 py-2">
                            <input className="accent-[#FF4C00]" type="radio" value="tarde" name={props.radioGroupName} id={`tarde${props.radioGroupName}`} /> 
                            <label htmlFor={`tarde${props.radioGroupName}`}>Tarde</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <p className="mt-4 text-white max-sm:text-start">Eu prefiro que o time Kanal entre em <br className="max-sm:hidden" /> contato no período da:</p>
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
                        
                    </div>
                </div>
            </div>
           <hr className="mt-4 h-px my-8 bg-[#2A2B4F] border-0 " />
           <div className="flex flex-row justify-around items-center my-16 
                           max-sm:flex-col ">
             <p className="text-xs mt-3 text-white max-sm:mb-4">Ao clicar em &#34;quero ser banker&#34; voce aceita os termos <br className="max-sm:hidden" /> e condições do Kanal Open Finance</p>
             <button className="bg-[#FF4C00] rounded-lg max-sm:w-full py-3 px-6" type="submit">Quero ser um banker</button>
           </div>
        </form>
    )
}

// {
//     TITLE: `Novo cadastro ${bankerInfo.name}`,
//     NAME: bankerInfo.name,
//     EMAIL: [{ VALUE: bankerInfo.email, VALUE_TYPE: 'WORK' }],
//     PHONE: [{ VALUE: '55 ' + bankerInfo.tel, VALUE_TYPE: 'WORK' }],
//     WEB: bankerInfo.linkedinURL,
//     CONTACT_AT: bankerInfo.contactAt,  
//     OCCUPATION: bankerInfo.occupation,  
//     STATUS_ID: 'NEW',
//     OPENED: 'Y',
// }