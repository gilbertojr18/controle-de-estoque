'use client'
import { useEffect, useState } from 'react';



type Tecido = {
  id: number;
  nome: string;
  tipo: string;
  cor: string;
  quantidade: number;
  preco_unitario: number;
  data_cadastro: string;
}
type Agulha = {

  id: number;
  tamanho: number;
  quantidade: number;
  preco_unitario: number;
  data_cadastro: string;
}

export default function Page() {
  const [tecidos, setTecidos] = useState<Tecido[]>([]);
  const [loading, setLoading] = useState(true);
  const [agulhas, setAgulhas] = useState<Agulha[]>([]);

  function formatarMoeda(valor, moeda = 'BRL', locale = 'pt-BR') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: moeda,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(valor);
}

  useEffect(() => {
    async function fetchTecidos() {
      try {
        const res = await fetch('/api/tecidos');
        const data = await res.json();
        setTecidos(data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar tecidos:', err);
        setLoading(false);
      }
    }

    fetchTecidos();
  }, []);
  useEffect(() => {
    async function fetchAgulhas() {
      try {
        const res = await fetch('/api/agulhas');
        const data = await res.json();
        setAgulhas(data);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar agulhass:', err);
        setLoading(false);
      }
    }

    fetchAgulhas();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="p-4 bg-sky-800 w-full h-screen flex flex-row justify-center  ">
     {/* Listando as Agulhas */}
      <div className=' w-screen ml-2  mr-2 mt-20 flex flex-col text-center p-3 border'>
         <p className='text-3xl text-left mb-2.5 '>Agulhas:</p>
      
        <table className='bg-gray-700  text-semibold w-full border'>
          <thead>
            <th className='border'>
              ID:
            </th>
            <th className='border'>
              Tamanho:
            </th>
            <th className='border'> 
              quantidade
            </th>
            <th className='border'>
              Preço Unitário:
            </th>
            <th className='border'>
              Data de Cadastro:
            </th>
          </thead>
          <tbody className='border'>
          {agulhas.map((agulha) => (

            <tr className='border'>
              <td className='border'>
                {agulha.id}
              </td>
              <td className='border'>
                {agulha.tamanho}
              </td>
              <td className='border'>
                {agulha.quantidade}

              </td>
              <td className='border'>
                {formatarMoeda(agulha.preco_unitario)}
              </td>
              <td className='border'>
                {new Date(agulha.data_cadastro).toLocaleDateString()}
              </td>
            </tr>
             ))}
          </tbody>
        </table>
      </div>
      {/* Listando os Tecidos */}
      <div className=' w-screen ml-2  mr-2 mt-20 flex flex-col text-center border p-3'>
         <p className='text-3xl text-left mb-2.5 '>Tecidos:</p>
      
        <table className='bg-gray-700  text-semibold w-full border p-3'>
          <thead>
            <th className='border'>
              ID:
            </th>
            <th className='border'>
              Nome:
            </th>
            <th className='border'> 
              Tipo:
            </th>
            <th className='border'>
              Cor :
            </th>
            <th className='border'>
             Quantidade:
            </th>
            <th className='border'>
             Preço unitário:
            </th>
            <th className='border'>
             Data de Cadastro
            </th>
          </thead>
          <tbody className='border'>
          {tecidos.map((tecido) => (

            <tr className='border'>
              <td className='border'>
                {tecido.id}
              </td>
              <td className='border'>
                {tecido.nome}
              </td>
              <td>
                {tecido.tipo}
              </td>
              <td className='border'>
                {tecido.cor}

              </td>
              <td className='border'>
                {tecido.quantidade}
              </td>
              <td className='border'>
                {formatarMoeda(tecido.preco_unitario)}
              </td>
              <td className='border'>
                {new Date(tecido.data_cadastro).toLocaleDateString()}
              </td>
            </tr>
             ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}





