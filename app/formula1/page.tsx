import Image from "next/image";
import Link from "next/link";

export default function Formula1() {
  return (
    <main>
      <section>
        <h1>Fórmula 1</h1>

        <p>Aqui você encontrará as últimas notícias sobre o mundo da Fórmula 1.</p>

        <p>Nesta página, o Esporte News apresenta conteúdos sobre corridas, pilotos, equipes, desempenho dos carros e novidades</p>
        <br />

        

        <article>
            <h2>Italiano Kimi Antonelli, de apenas 19 anos, lidera campeonato de pilotos da Fórmula 1</h2>
            <p>A jovem estrela do automobilismo, Kimi Antonelli, está dominando o campeonato de pilotos da Fórmula 1 com 5 vitórias e uma segunda colocação em 7 corridas até o momento.</p>
            
            <small>Fonte consultada: Jornal da Paraíba</small>
        </article>
        <Image
           src="/images/formula1.jpg"
           alt="Imagem relacionada à Fórmula 1"
           width={400}
           height={200}
        />
        <br />
        <Link href="/">Voltar para a página inicial</Link>
      </section>
    </main>
  );
}