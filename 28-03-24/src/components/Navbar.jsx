const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-xl">Logo</a>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none focus:bg-gray-700 px-3 py-2 rounded"
                  onClick={() => console.log("Toggle menu")}>
            Menu
          </button>
        </div>
        <div className="hidden md:flex flex-grow items-center justify-end space-x-4">
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded">About</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Services</a>
          <a href="#" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
