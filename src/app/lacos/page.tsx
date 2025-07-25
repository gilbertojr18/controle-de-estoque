'use client'
import { useEffect,useState } from "react";

type Laco = {
    id:number;
    nome:string;
    modelo:string;
    cor:string;
    quantidade:number;
    preco_unitario:number;
    data_cadastro:number;

}
export default function Lacos(){
    const [lacos, setLacos] = useState<Laco[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchLacos() {
          try {
            const res = await fetch('/api/lacos');
            const data = await res.json();
            setLacos(data);
            setLoading(false);
          } catch (err) {
            console.error('Erro ao buscar laços:', err);
            setLoading(false);
          }
        }
    
        fetchLacos();
      }, []);
    return(

        <>
             <div className="p-4 bg-sky-800 w-full h-screen  flex flex-col justify-center align-middle">
                <h1 className="text-5xl text-center font-sans">Laços:</h1>
                <br />
                <table className='bg-gray-700  text-semibold border p-3 h-auto'>
                    <thead className="border">
                        <th className="border">ID:</th>
                        <th className="border">Nome:</th>
                        <th className="border">Modelo:</th>
                        <th className="border"> Cor:</th>
                        <th className="border">Quantidade:</th>
                        <th className="border">Preço unitário</th>
                        <th className="border">Data de Cadastro:</th>
                    </thead>
                    {lacos.map((laco) =>(


                        <tbody className="border"> 
                        <tr className="border">
                            <td className="border"> {laco.id}</td>
                            <td className="border">{laco.nome}</td>
                            <td className="border">{laco.modelo}</td>
                            <td className="border">{laco.cor}</td>
                            <td className="border">{laco.quantidade}</td>
                            <td className="border">{laco.preco_unitario}</td>
                            <td className="border">{new Date(laco.data_cadastro).toLocaleDateString()}</td>
                        </tr>
                    </tbody>
                )
                   ) }
                </table>

            </div>
        
        
        
        </>


    )
}