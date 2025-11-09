export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 flex flex-col items-center justify-center p-10">
      <div className="max-w-3xl bg-white shadow-xl rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold text-orange-700 mb-4">About Us 🍴</h1>
        <p className="text-gray-700 text-lg mb-4">
          Welcome to <strong>My Restaurant</strong> — your go-to destination for
          exploring delicious recipes from around the world.
        </p>
        <p className="text-gray-600 mb-6">
          Whether you’re craving traditional Pakistani food like Biryani and
          Karahi, or international favorites like Pasta and Burgers — we bring
          everything together in one place.
        </p>
        <p className="text-orange-700 font-semibold text-lg">
          “Cooking is an art, and every dish tells a story.”
        </p>
      </div>
    </div>
  );
}
