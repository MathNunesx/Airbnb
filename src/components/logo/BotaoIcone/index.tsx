import React from "react";

interface BotaoIconeProps {
    icone: React.ReactNode;
    children: React.ReactNode;
}


const BotaoIcone = (props: BotaoIconeProps) => {
    return(
        <>
               <button className=
               "rounded-xl border-2 flex items-center px-4 py-2 gap-2 hover:border-[#FF5A5F]">
                    <span>{props.icone}</span>
                    <span>{props.children}</span>
               </button>
        </>
    )
}

export default BotaoIcone 
