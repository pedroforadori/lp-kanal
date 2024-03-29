import { FormEvent, useState } from "react";
import { api } from "../lib";
import Swal from 'sweetalert2'
import Link from "next/link";

interface INewFormCadBanker {
    phone: string;
    name: string;
    email: string;
    linkedinUrl: string;
    policies: boolean;
    status: string;
    contactAt: string;
  }

interface IForm{
    radioGroupPeriod: string
    radioGroupContact: string
}

export default function Form(props: IForm){

    const [ email, setEmail ] = useState<string>()
    const [ name, setName ] = useState<string>()
    const [ linkedinUrl, setLinkedinUrl ] = useState<string>()
    const [ phone, setPhone ] = useState<string>()
    const [ occupation, setOccupation ] = useState<string>()
    const [ status, setStatus ] = useState<string>()
    const [ contactAt, setContactAt ] = useState<string>()
    const [swalProps, setSwalProps] = useState({});

    async function handleSubimit(event: FormEvent){
        event.preventDefault();
       
        await api.post('/bitrix/banker-lead',{
            TITLE: name,
            NAME: name,
            EMAIL: [{ VALUE: email, VALUE_TYPE: 'WORK' }],
            PHONE: [{ VALUE: '55 ' + phone, VALUE_TYPE: 'WORK' }],
            WEB: linkedinUrl,
            CONTACT_AT: contactAt,  
            OCCUPATION: occupation,  
            STATUS_ID: 'NEW',
            CUSTUMER_PORTIFOLIO: status,
        }).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Obrigado',
                text: "Cadastro realizado com sucesso.",
              })
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Erro',
                text: "Houve um erro na sua solicitação, tente novamente mais tarde.",
              })
        })

    }

    return(
        <form onSubmit={handleSubimit} className="w-[550px] max-sm:w-auto">
            <div className="flex flex-col">
                <label className="mb-1">Nome completo</label>
                <input 
                    className="rounded-lg w-full h-[46px] py-4 pl-4 max-sm:w-full text-[#9F9F9F]" 
                    type="text" 
                    placeholder="Seu nome" 
                    value={name}
                    onChange={(event) => setName(event.target.value)} 
                    required
                />
            </div>
            <div className="grid grid-cols-2 text-white max-sm:flex max-sm:flex-col">
                <div className="flex flex-col max-sm:mt-4 max-sm:ml-0 mt-2">
                    <label className="mb-1">E-mail</label>
                    <input 
                        className="rounded-lg w-full h-[46px] py-4 pl-4 text-[#9F9F9F]" 
                        type="text" 
                        placeholder="Insira seu melhor e-mail" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required    
                    />
                </div>
                <div className="flex flex-col ml-4 mt-2 max-sm:ml-0">
                    <label className="mb-1">Perfil do Linkedin</label>
                    <input 
                        className="rounded-lg w-full h-[46px] py-4 pl-4 text-[#9F9F9F]" 
                        type="text" 
                        placeholder="URL do seu Perfil do Linkedin" 
                        value={linkedinUrl}
                        onChange={(event) => setLinkedinUrl(event.target.value)}
                    />
                </div>
                <div className="flex flex-col max-sm:mt-4 mt-2">
                    <label className="mb-1">Número de celular</label>
                    <input 
                        className="rounded-lg w-full h-[46px] py-4 pl-4 text-[#9F9F9F]" 
                        type="text" 
                        placeholder="(00) 00000-0000" 
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        required 
                    />
                </div> 
                <div className="flex flex-col max-sm:mt-4 max-sm:ml-0 ml-4 mt-2">
                    <label className="mb-1">Principal área de atuação</label>
                    <select 
                        className="rounded-lg w-full h-[46px] py-3 px-4 text-[#9F9F9F]" 
                        name="select" 
                        id="select"
                        value={occupation}
                        onChange={(event) => setOccupation(event.target.value)}
                        required 
                    >
                        <option>Selecione uma área</option>
                        <option value="Bancos">Bancos</option>
                        <option value="Investimentos">Investimentos</option>
                        <option value="Seguros">Seguros</option>
                        <option value="Contabilidade">Contabilidade</option>
                        <option value="Correspondente Bancário">Correspondente Bancário</option>
                        <option value="Assessoria e Consultoria">Assessoria e Consultoria</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>
                <div className="flex flex-col items-center justify-between max-sm:items-start">
                    <p className="mt-4 justify-center text-white max-sm:text-center">Você possui carteira de clientes?</p>
                    <div className="mt-1 gap-3 flex justify-end text-white max-sm:flex-wrap max-sm:justify-between">
                        <div className="bg-[#475467] flex items-center justify-center gap-1 rounded-lg peer-checked:bg-[#121323] px-6 py-2 ">
                            <input 
                                className="accent-[#FF4C00]" 
                                type="radio" 
                                name={props.radioGroupContact} 
                                id={`s${props.radioGroupContact}`} 
                                value="Y" 
                                onChange={(event) => setStatus(event.target.value)}
                                required 
                            /> 
                            <label htmlFor={`s${props.radioGroupContact}`}>Sim</label>
                        </div>
                        <div  className="bg-[#475467] flex items-center justify-center gap-1 rounded-lg active:bg-[#121323] focus:bg-[#121323] px-6 py-2">
                            <input 
                                className="accent-[#FF4C00]" 
                                type="radio" 
                                name={props.radioGroupContact} 
                                id={`n${props.radioGroupContact}`} 
                                value="N" 
                                onChange={(event) => setStatus(event.target.value)}
                                required 
                            /> 
                            <label className="active:bg-[#121323] focus:bg-[#121323] " htmlFor={`n${props.radioGroupContact}`}>Não</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <p className="mt-4 text-white max-sm:text-start">Eu prefiro que o time Kanal entre em <br className="max-sm:hidden" /> contato no período da:</p>
                    <div className="mt-1 gap-3 flex items-end text-white max-sm:flex-wrap max-sm:justify-between">
                        <div className="bg-[#475467] flex items-center justify-center gap-1 rounded-lg active:bg-[#121323] focus:bg-[#121323] px-3 py-2">
                            <input 
                                className="accent-[#FF4C00]" 
                                type="radio" 
                                name={props.radioGroupPeriod} 
                                id={`manha${props.radioGroupPeriod}`}
                                value="manha" 
                                onChange={(event) => setContactAt(event.target.value)}
                                required 
                            /> 
                            <label htmlFor={`manha${props.radioGroupPeriod}`}>Manhã</label>
                        </div>
                        <div  className="bg-[#475467] flex items-center justify-center gap-1 rounded-lg active:bg-[#121323] focus:bg-[#121323] px-3 py-2">
                            <input 
                                className="accent-[#FF4C00]" 
                                type="radio" 
                                name={props.radioGroupPeriod} 
                                id={`tarde${props.radioGroupPeriod}`}
                                value="tarde" 
                                onChange={(event) => setContactAt(event.target.value)}
                                required 
                            /> 
                            <label htmlFor={`tarde${props.radioGroupPeriod}`}>Tarde</label>
                        </div>
                        <div  className="bg-[#475467] flex items-center justify-center gap-1 rounded-lg active:bg-[#121323] focus:bg-[#121323] px-3 py-2">
                            <input 
                                className="accent-[#FF4C00]" 
                                type="radio" 
                                name={props.radioGroupPeriod} 
                                id={`noite${props.radioGroupPeriod}`}
                                value="noite" 
                                onChange={(event) => setContactAt(event.target.value)}
                                required
                            />
                            <label htmlFor={`noite${props.radioGroupPeriod}`}>Noite</label> 
                        </div>
                        
                    </div>
                </div>
            </div>
           <hr className="mt-4 h-px my-8 bg-[#2A2B4F] border-0 " />
           <div className="flex flex-row justify-around items-center my-16 
                           max-sm:flex-col ">
             <p className="text-xs mt-3 text-white max-sm:mb-4">Ao clicar em &#34;quero ser banker&#34; você <Link className="underline" target="_blank" href="https://kanal-termos-uso.s3.sa-east-1.amazonaws.com/termos-de-uso-kanal-2.1.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=90"> aceita os termos <br className="max-sm:hidden" /> e condições</Link> do Kanal Open Finance.</p>
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
