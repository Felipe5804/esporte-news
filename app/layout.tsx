import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import styles from './Navbar.module.css';

export const metadata: Metadata = {
  title: "Esporte News",
  description: "Portal de notícias esportivas feito com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <nav>
            <Link href="/">Esporte News</Link>
          </nav>
          <nav>
            {/*<Link href="/">Início</Link>*/}
            <Link href="/futebol">Futebol</Link>
            <Link href="/basquete">Basquete</Link>
            <Link href="/formula1">Fórmula 1</Link>
          </nav>
        </header>

        {children}

        <footer>
          <p>Felipe R. Bucci</p>
        </footer>
      </body>
    </html>
  );
}