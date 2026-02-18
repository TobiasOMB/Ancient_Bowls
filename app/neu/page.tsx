export default function Neu() {
  return (
    <div className="flex flex-col items-center text-center py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">Neue Ancient Bowl</h1>
      <h2 className="text-xl text-gray-500 mb-6">
        Exklusiv erhältlich ab 2026
      </h2>

      <div className="w-80 h-80 bg-gray-200 mb-6 rounded-lg" />

      <p className="max-w-xl mb-6">
        Unsere neueste Kreation vereint Tradition und Innovation.
      </p>

      <a
        href="/verlosung"
        className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition"
      >
        Los erhalten
      </a>
    </div>
  );
}
