import Link from "next/link"
import Logo from "../components/logo/logo"


const BarraSuperior = () => {
    return(
         <div> 
        <div className=" container mx-auto flex justify-between items-center">

          <Logo/>
         
          <div className="flex gap-6">
            <Link className="font-semibold" href="/"> Acomodações </Link>
            <Link className="opacity-50" href="/"> Experiências </Link>
          </div>

          <button className="rounded-md border-2">Entrar</button>
         
        </div>

      </div>
    )
}

export default BarraSuperior