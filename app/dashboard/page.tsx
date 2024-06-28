"use client";

import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";

function Dashboard() {
  const [userSeachInput, setUserSearchInput] = useState<string>("");

  return (
    <div>
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />

      <TemplateListSection userSeachInput={userSeachInput} />
    </div>
  );
}

export default Dashboard;
