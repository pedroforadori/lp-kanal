import Image from "next/image";
import { Envelope, Phone, WhatsappLogo } from "phosphor-react";
import Form from "./form";

export default function NewBanker() {
    return (
        <section className="w-full bg-[#121323] py-20">
            <div className="grid grid-cols-2 text-white">
                <div className="flex flex-col items-start justify-around px-28">
                    <h2 className="text-4xl">Seja um Banker do Kanal</h2>
                    <p className="text-xl">No Kanal, você tem total autonomia sobre suas propostas e solicitações</p>
                    <p className="text-xl">Caso tenha alguma dúvida utilize os canais abaixo</p>
                    <button className="flex justify-center items-center text-white px-[10px] py-3 bg-[#6D3BF2] rounded-lg gap-[10px]  mt-4">
                        <Phone size={32} weight="fill" />
                        11 2424 6277
                    </button>
                    <div className="flex flex-row gap-6 mt-4">
                        <button className="flex justify-center items-center text-white bg-[#6D3BF2] rounded-lg gap-[10px] px-10 py-4">
                            <WhatsappLogo size={40} />
                        </button>
                        <button className="flex justify-center items-center text-white bg-[#6D3BF2] rounded-lg gap-[10px] px-10 py-4">
                            <Envelope size={40} />
                        </button>
                    </div>
                </div>
                <div>
                    <Form radioGroupName="period-new-banker"/>
                </div>
            </div>
        </section>
    )
}