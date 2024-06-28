import { Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between p-5 shadow-sm border-b-2 items-center bg-white">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-md bg-white">
        <Search />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>

      <div>
        <h2 className="bg-primary text-white rounded-full px-2 text-sm">
          🔥 Join Membership just for $9.99/Month
        </h2>
      </div>
    </div>
  );
}

export default Header;
