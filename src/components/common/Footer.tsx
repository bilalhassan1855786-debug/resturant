export default function Footer() {
  return (
    <footer className="bg-white shadow mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Cookbook App. All rights reserved.
      </div>
    </footer>
  );
}
