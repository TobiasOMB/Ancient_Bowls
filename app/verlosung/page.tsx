export default function Verlosung() {
  return (
    <div className="flex flex-col items-center text-center py-20 px-6">
      <h1 className="text-4xl font-bold mb-6">Verlosung</h1>

      <div className="w-80 h-80 bg-gray-200 mb-6 rounded-lg" />

      <p className="max-w-xl mb-6">
        Nimm jetzt an unserer exklusiven Verlosung teil.
      </p>

      <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition">
        Verlosung teilnehmen
      </button>
    </div>
  );
}
