import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", display: "flex", gap: "20px" }}>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/clients">Clientes</Link>
      <Link href="/settings">Ajustes</Link>
    </nav>
  );
}
