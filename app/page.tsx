export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-20">
      
      {/* Top Banner */}
      <div className="bg-black text-white px-6 py-2 rounded-full mb-10">
        Jetzt bestellen und 20% sparen
      </div>

      {/* Logo */}
      <h1 className="text-5xl font-bold mb-10">
        Ancient Bowls
      </h1>

      <p className="max-w-xl text-gray-600">
        Willkommen bei Ancient Bowls – entdecke unsere Geschichte,
        Neuheiten und nimm an exklusiven Verlosungen teil.
      </p>
    </div>
  );
}
