"use client";

import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useState } from "react";

const BuilderPage: React.FC = () => {
  const router = useRouter();
  const [textEntry, setTextEntry] = useState<string>("");

  return (
    <div className="card flex justify-content-center">
      <InputText
        value={textEntry}
        onChange={(e) => setTextEntry(e.target.value)}
      />
      <Button
        label="Submit"
        onClick={() => router.push("/viewer/?projectId=" + textEntry)}
      />
    </div>
  );
};

export default BuilderPage;
