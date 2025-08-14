import Link from 'next/link'; 

export default function Header() {
  return (
    <header className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex gap-4">
          <Link href="/" className="font-bold">Resource Explorer</Link>
          <Link href="/favorites">Favorites</Link>
        </nav> 
      </div>
    </header>
  );
}
