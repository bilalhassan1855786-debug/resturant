import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-brown shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">Cookbook</h1>
        <Navbar />
      </div>
    </header>
  );
}
