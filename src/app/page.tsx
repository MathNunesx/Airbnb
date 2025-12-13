/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div> 
        <div className=" container mx-auto flex justify-between items-center">
          <img src="/img/Airbnb--Streamline-Svg-Logos (1).png" alt="logo" />

          <div className="flex gap-6">
            <Link className="font-semibold" href="/"> Acomodações </Link>
            <Link className="opacity-50" href="/"> Experiências </Link>
          </div>

          <button className="rounded-md border-2">Entrar</button>
         


        </div>
        




      </div>

      <hr/>

      <div className="border-green-600 border-2"> Área conteúdos </div>
      <div className="border-purple-600 border-2"> Rodapé </div>

      <div/>
    </>
  );
}
