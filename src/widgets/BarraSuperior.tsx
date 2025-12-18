import Link from "next/link"
import Logo from "../components/logo"
import { IconUserFilled } from "@tabler/icons-react"
import BotaoIcone from "../components/logo/BotaoIcone"

const BarraSuperior = () => {
    return(
         <div> 
        <div className=" flex justify-between items-center">

          <Logo/>
         
          <div className="flex gap-6">
            <Link className="font-semibold" href="/"> Acomodações </Link>
            <Link className="opacity-50" href="/"> Experiências </Link>
          </div>

          <BotaoIcone icone={(
            <IconUserFilled
          aria-label="Icone de usuario"
          size={24}
          />
          )}>

            Entrar
          </BotaoIcone>

        </div>

      </div>
    )
}

export default BarraSuperior