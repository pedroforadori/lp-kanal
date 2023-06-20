import Link from "next/link";
import { List } from "phosphor-react";

export default function Header() {
    return (
        <div className="flex justify-between pt-12 max-sm:px-8">
            <img src="/assets/image/logo.svg" alt="logo" />
            <Link href="https://marketplace.kanal.com.br/login" className="bg-white rounded-lg px-6 py-4 font-bold max-sm:hidden">Área logada do Banker</Link>
            <Link href="https://marketplace.kanal.com.br/login" id="isMobile">
                <List size={32} className="text-white" />
            </Link>
        </div>        
                    

    )
} 