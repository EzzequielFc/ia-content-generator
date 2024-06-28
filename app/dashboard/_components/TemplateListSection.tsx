import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

interface TemplateListSectionProps {
  userSeachInput: string;
}

function TemplateListSection({ userSeachInput }: TemplateListSectionProps) {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if (userSeachInput) {
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSeachInput.toLowerCase())
      );

      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
  }, [userSeachInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {templateList.map((item: TEMPLATE, index: number) => {
        return <TemplateCard {...item} />;
      })}
    </div>
  );
}

export default TemplateListSection;
