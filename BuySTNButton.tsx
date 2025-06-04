// components/BuySTNButton.tsx
export default function BuySTNButton() {
  const handleBuy = () => {
    window.open('https://jup.ag/swap/SOL-STN', '_blank');
  };

  return (
    <button
      className="mt-4 bg-yellow-500 px-4 py-2 rounded-xl text-black font-bold hover:bg-yellow-600"
      onClick={handleBuy}
    >
      Acheter $STN
    </button>
  );
}
