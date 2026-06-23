import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <Image
          src="/images/home.png"
          alt="Imagem principal do portal Esporte News"
          width={800}
          height={400}
        />
        <h1>Esporte News</h1>

        <p>
          Bem-vindo ao Esporte News, um portal objetivo de notícias esportivas.
        </p>

        <p>
          Aqui você encontrará notícias e conteúdos sobre futebol, basquete e
          Fórmula 1.
        </p>

        <nav>
          <Link href="/futebol">Futebol</Link>
          <br />
          <Link href="/basquete">Basquete</Link>
          <br />
          <Link href="/formula1">Fórmula 1</Link>
        </nav>
      </section>
    </main>
  );
}