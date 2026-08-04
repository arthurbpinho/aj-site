import { openCookiePreferences } from "../utils/cookieConsent.js";

export default function PoliticaCookies() {
  return (
    <section className="container-prose py-20">
      <p className="text-xs uppercase tracking-[0.3em] text-gold-600">Legal</p>
      <h1 className="mt-4 font-serif text-4xl text-forest-900">Política de Cookies</h1>

      <div className="prose-aj mt-8">
        <p>
          Cookies são pequenos arquivos que um site pode guardar no seu navegador. Nesta
          página explicamos exatamente quais cookies o site da Academia Junguiana usa, para
          que servem e como você pode controlar cada um.
        </p>

        <p>
          Ao visitar o site pela primeira vez, mostramos um aviso com três opções: aceitar
          todos os cookies, recusar os não-essenciais, ou escolher categoria por categoria.
          Nenhuma categoria opcional vem marcada por padrão. Você pode alterar sua escolha a
          qualquer momento clicando em "Preferências de cookies" no rodapé do site.
        </p>

        <h2>Necessários (sempre ativos)</h2>
        <p>
          O único cookie desta categoria guarda, no seu próprio navegador, a escolha que você
          fez neste aviso — para não perguntarmos de novo a cada visita. Ele não identifica
          você nem é usado para rastreamento. Como essa categoria não envolve nenhum
          rastreamento, ela não pode ser desativada; sem ela, o site simplesmente pede sua
          permissão novamente a cada visita.
        </p>

        <h2>Estatísticos</h2>
        <p>
          Serviriam para medir, de forma agregada, quantas pessoas acessam as páginas e quais
          conteúdos são mais procurados. <strong>Nenhuma ferramenta desse tipo está em uso no
          site atualmente</strong>, então nada é gravado nesta categoria. Se isso mudar,
          atualizaremos esta política e pediremos seu consentimento novamente antes de ativar
          qualquer coisa.
        </p>

        <h2>Marketing</h2>
        <p>
          Usamos o <strong>Pixel da Meta</strong> (Facebook/Instagram) para medir o resultado
          das nossas divulgações. Esse cookie só é criado no seu navegador se você autorizar,
          aceitando todos os cookies ou ativando "Marketing" em "Escolher". Enquanto não há
          autorização, o pixel fica desligado: nenhum evento é enviado e nenhum cookie é
          gravado.
        </p>
        <p>
          Ao autorizar essa categoria, informações sobre a sua navegação no site (como quais
          páginas você visita) são compartilhadas com a Meta Platforms, Inc., que pode
          processar esses dados fora do Brasil, conforme a própria política de privacidade da
          Meta. Você pode retirar essa autorização a qualquer momento em "Preferências de
          cookies", no rodapé do site — a retirada tem efeito imediato sobre os próximos
          acessos.
        </p>

        <h2>Conteúdo incorporado do YouTube</h2>
        <p>
          Os vídeos exibidos no site usam o modo com privacidade reforçada do YouTube
          (<code>youtube-nocookie.com</code>), fornecido pelo Google. Nesse modo, o player não
          grava cookies de rastreamento antes que você interaja com ele (dê play, por
          exemplo). Essa incorporação não é controlada pelo aviso de cookies deste site — trata-se
          de conteúdo de terceiro, sujeito à política de privacidade do próprio Google.
        </p>

        <h2>Como alterar sua escolha</h2>
        <p>
          A qualquer momento, clique em{" "}
          <button
            type="button"
            onClick={openCookiePreferences}
            className="link-underline font-medium text-forest-800"
          >
            "Preferências de cookies"
          </button>{" "}
          (também disponível no rodapé do site) para revisar ou mudar sua escolha.
        </p>

        <h2>Contato</h2>
        <p>
          Dúvidas sobre esta política podem ser enviadas para{" "}
          <a href="mailto:academiajunguiana@gmail.com" className="link-underline">
            academiajunguiana@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
