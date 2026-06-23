import Image from "next/image";
import Link from "next/link";

export default function Basquete() {
  return (
    <main>
      <section>
        <h1>Basquete</h1>

        <p>
            Aqui você encontrará as últimas notícias sobre o mundo do basquete.
        </p>

        <p>
          Nesta página, o Esporte News apresenta conteúdos sobre jogos,
          campeonatos, atletas, arremessos decisivos e grandes momentos do
          basquete nacional e internacional.
        </p>
        <br />
        

        <article>
          <h2>O brasileiro Mathias Alessanco escolhe a universidade de South Carolina</h2>
          <p>Um dos maiores prospectos do basquete brasileiro, Mathias Alessanco definiu seu futuro no basquete universitário dos Estados Unidos. O ala de 2,06m se comprometeu com a Universidade de South Carolinana temporada 2027/28 da NCAA, principal competição universitária do país.</p>
          
          <small>Fonte consultada: GE Esporte</small>
        </article>
        <Image
          src="/images/basquete.png"
          alt="Imagem relacionada ao basquete"
          width={400}
          height={200}
        />
        <br />
        <Link href="/">Voltar para a página inicial</Link>
      </section>
    </main>
  );
}