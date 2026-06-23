import Image from "next/image";
import Link from "next/link";

export default function Futebol() {
    return (
        <main>
            <section>
                <h1>Futebol</h1>
                <p>Aqui você encontrará as últimas notícias sobre o mundo do futebol.</p>
                

                <article>
                    <h2>Seleção brasileira consegue superar o haiti na 2ª rodada da copa do mundo </h2>
                    <p>O Brasil venceu o Haiti por 3 a 0 no sábado, dia 20 de junho. Assim a seleção brasileira chega a 4 pontos, liderando o grupo, apesar de estar empatada em pontos com a seleção marroquina</p>
                    <p>O próximo jogo ocorrerá na próxima quarta-feira, dia 24 de junho, contra a seleção escocesa.</p>
                </article>
                <Image
                    src="/images/futebol.png"
                    alt="Imagem relacionada à Copa do Mundo"
                    width={400}
                    height={200}
                />
                <br />
                <Link href="/">Voltar para a página inicial</Link>
            </section>
        </main>
    );
}