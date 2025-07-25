
'use client'
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0); //criando o State e iniciando com 0
  const [area, setArea] = useState(false);
  function toggleButton() {//função que é chamada pelo onClick do button
    setCount(count + 1);
  }
  const handleArea = () => {
    setArea(!area);
  }
  return (
    <>
      
      <div className="w-full h-screen whitespace-nowrap bg-indigo-400 flex flex-col justify-center align-middle items-center gap-2.5">
        
      </div>
    </>
  );
}
