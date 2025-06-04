// pages/index.tsx
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const PhantomConnect = dynamic(() => import('@/components/PhantomConnect'), { ssr: false });
const BuySTNButton = dynamic(() => import('@/components/BuySTNButton'), { ssr: false });

export default function Home() {
  const [holders, setHolders] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const holdersMock = 666;
        const priceMock = 0.00066;
        setHolders(holdersMock);
        setPrice(priceMock);
      } catch (error) {
        console.error('Erreur lors du fetch des données STN', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <Image src="/logo-satanecoin.gif" alt="$STN" width={200} height={200} className="mb-4" />
      <h1 className="text-4xl font-bold mb-2">Bienvenue dans l'enfer de SatanéCoin ($STN)</h1>
      <p className="text-lg text-red-500 mb-4">Le token maudit de Solana 🔥</p>
      {holders !== null && <p className="text-sm text-gray-400">Nombre de holders : {holders}</p>}
      {price !== null && <p className="text-sm text-gray-400">Prix actuel : {price} SOL</p>}
      <div className="mt-6">
        <PhantomConnect />
        <BuySTNButton />
      </div>
      <audio autoPlay loop className="hidden">
        <source src="/hell-theme.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
