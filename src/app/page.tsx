
import BarraSearch from "../widgets/BarraSearch";
import BarraSuperior from "../widgets/BarraSuperior";
import NavHorizontal from "../widgets/navHorizonatal";

export default function Home() {
  return (
    <>
     
     <header className="container mx-auto">
      <BarraSuperior/>
      <BarraSearch/>
     </header>

      <hr className="my-3 border-none"/>

      <main className="container mx-auto">
        <NavHorizontal/>


      </main>

      <footer className="container mx-auto"> Rodapé
         </footer>
    </>
  );
}
