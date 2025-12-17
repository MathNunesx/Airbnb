import { IconSearch } from "@tabler/icons-react";

const BarraSearch = () => {
    return (    
        <div className="border-2 border-[#7c7c7c98] flex items-center rounded-full px-3 py-2 w-full max-w-2xl mx-auto">
             <input className="w-full focus:outline-none px-2 " type="text" placeholder="Digite sua pesquisa" />
             <button className="bg-[#FF5A5F] rounded-full p-2">
                <IconSearch
          aria-label="Pesquisar"
          size={24}
          color="white"
          />
             </button>
        </div>
    )
}

export default BarraSearch;