// app/components/Navbar.tsx
import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Pet Clinic
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/display"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
          >
            Display Clients
          </Link>
          <Link
            to="/add"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
          >
            Add Client
          </Link>
          <Link
            to="/delete"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
          >
            Delete Clients
          </Link>
        </div>
      </div>
    </nav>
  );
}
