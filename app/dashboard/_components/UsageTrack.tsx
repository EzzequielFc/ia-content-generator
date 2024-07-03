"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AiOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

async function UsageTrack() {
  const { user } = useUser();

  const result = await db
    .select()
    .from(AiOutput)
    .where(eq(AiOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

  const GetTotalUsage = () => {
    let total = 0;
    result.forEach((element) => {
      total = total + Number(element.aiResponse?.length);
    });

    console.log(total);
  };

  useEffect(() => {
    result && GetTotalUsage();
  }, [result]);

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981F9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: "35%" }}
          ></div>
        </div>
        <h2 className="text-sm my-2">350/10,000 Credit Used</h2>
      </div>
      <Button variant={"secondary"} className="w-full my-3 text-primary">
        Upgrade
      </Button>
    </div>
  );
}

export default UsageTrack;
