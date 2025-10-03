import Link from "next/link";

export default function Menu() {
  return (
    <nav className="p-4">
      <ul className="flex justify-center space-x-4 md:space-x-20">
        <li>
          <Link href="/" className="font-bold text-white hover:text-red-500 hover:decoration-2 hover:underline hover:underline-offset-4">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="font-bold text-white hover:text-red-500 hover:decoration-2 hover:underline hover:underline-offset-4">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/contact" className="font-bold text-white hover:text-red-500 hover:decoration-2 hover:underline hover:underline-offset-4">
            Entrar Código
          </Link>
        </li>
      </ul>
    </nav>
  );
}
