
import BarraSearch from "../widgets/BarraSearch";
import BarraSuperior from "../widgets/BarraSuperior";

export default function Home() {
  return (
    <>
     
     <div>
      <BarraSuperior/>
      <BarraSearch/>
     </div>

      <hr className="mt-10 border-none"/>

      <div className="border-green-600 border-2"> Área conteúdos </div>
      <div className="border-purple-600 border-2"> Rodapé </div>

      <div/>
    </>
  );
}
