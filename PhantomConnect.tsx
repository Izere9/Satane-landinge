// components/PhantomConnect.tsx
import { useEffect, useState } from 'react';

export default function PhantomConnect() {
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    if ('solana' in window) {
      const provider = (window as any).solana;
      if (provider.isPhantom) {
        provider.connect({ onlyIfTrusted: true }).then(() => setWalletConnected(true));
      }
    }
  }, []);

  const connectWallet = async () => {
    const provider = (window as any).solana;
    if (provider) {
      await provider.connect();
      setWalletConnected(true);
    }
  };

  return (
    <button
      className="bg-red-600 px-4 py-2 rounded-xl text-white font-bold hover:bg-red-700"
      onClick={connectWallet}
    >
      {walletConnected ? 'Wallet Connecté' : 'Connecter Phantom'}
    </button>
  );
}
