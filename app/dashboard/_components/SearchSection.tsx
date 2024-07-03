import { SearchIcon } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-br from-orange-500 via-orange-700 to-blue-600 flex flex-col justify-center items-center text-white">
      <h2 className="text-3xl font-bold">Navegue pelos seus modelos</h2>
      <p>O que você gostaria de criar hoje?</p>

      <div className="w-full flex justify-center ">
        <div className="flex ga-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]">
          <SearchIcon className="text-primary " />
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-transparent w-full outline-none text-black"
            onChange={(event) => onSearchInput(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
