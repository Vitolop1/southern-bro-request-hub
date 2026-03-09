import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-violet-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-violet-800">
          Southern Bro Request Hub
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-violet-700">
            Home
          </Link>
          <Link href="/delivery" className="text-sm font-medium text-gray-700 hover:text-violet-700">
            Delivery
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-violet-700">
            Services
          </Link>
          <Link href="/admin" className="text-sm font-medium text-gray-700 hover:text-violet-700">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}