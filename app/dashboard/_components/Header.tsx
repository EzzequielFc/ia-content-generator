import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between p-5 shadow-sm border-b-2 items-center bg-white">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-md bg-white">
        <Search />
        <input type="text" placeholder="Buscar..." className="outline-none" />
      </div>

      <div>
        <h2 className="bg-primary text-white rounded-full px-2 text-sm">
          🔥 Junte-se aos membros por R$9.99/Mês
        </h2>
      </div>
    </div>
  );
}

export default Header;
