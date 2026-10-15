import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
import { RegistryLink } from "../../components/RegistryLink";

export const metadata: Metadata = {
  title: "Psicoterapia online para adolescentes: como funciona?",
  description: "Entenda como funciona a psicoterapia online para adolescentes, o papel dos responsáveis, o sigilo e o que esperar das primeiras sessões.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <main>
    <PageHero
      eyebrow="Conteúdo · Em revisão profissional"
      title="Psicoterapia online para adolescentes: como funciona e qual o papel dos responsáveis?"
      intro="Um guia para adolescentes e responsáveis entenderem o início do acompanhamento, o sigilo e a participação da família sem transformar a terapia em fiscalização."
    />

    <article className="content narrow shell prose">
      <div className="notice">
        <strong>Rascunho para revisão profissional</strong>
        <p>Este conteúdo ainda não está publicado no Google. Ele foi preparado para revisão final de Ana Lívia Calado da Costa, Psicóloga · <RegistryLink />, antes de ser indexado.</p>
      </div>

      <p>Quando um adolescente começa a psicoterapia, é comum surgirem dúvidas dos dois lados. O adolescente pode se perguntar se tudo o que disser será contado aos responsáveis. A família, por sua vez, pode querer entender como acompanhar o processo sem ficar completamente de fora.</p>

      <p>Essas dúvidas fazem sentido. O atendimento psicológico de adolescentes precisa conciliar proteção, autonomia progressiva, participação dos responsáveis e sigilo profissional. Na prática, isso significa construir combinados claros desde o início.</p>

      <h2>Como costuma começar a psicoterapia de um adolescente?</h2>

      <p>Antes das sessões regulares, normalmente existe um contato inicial para entender informações básicas sobre o atendimento, disponibilidade, modalidade e contexto geral da procura. Em atendimentos não eventuais de crianças e adolescentes, o Código de Ética Profissional do Psicólogo prevê autorização de ao menos um responsável, observadas as determinações da legislação vigente.</p>

      <p>Depois dessa etapa administrativa, a psicóloga pode conversar com responsáveis e adolescente para compreender o contexto e explicar como o acompanhamento funciona. Não existe um roteiro único: idade, maturidade, motivo da procura, dinâmica familiar e necessidades de proteção influenciam a forma como esse início é organizado.</p>

      <h2>Qual é o papel dos responsáveis?</h2>

      <p>Participar não significa receber um relatório de cada sessão. Os responsáveis têm um papel importante na autorização, na organização prática do atendimento e, quando necessário, no fornecimento de informações relevantes sobre rotina, mudanças recentes, escola, saúde e contexto familiar.</p>

      <p>Também podem existir momentos em que orientações aos responsáveis sejam úteis para favorecer o cuidado fora da sessão. Isso é diferente de acompanhar cada conversa ou exigir que o adolescente revele tudo o que foi discutido.</p>

      <p>Uma relação terapêutica precisa de espaço para que o adolescente consiga falar com segurança. Quando a sessão é percebida como uma extensão da vigilância familiar, pode ficar mais difícil construir confiança e abordar justamente os temas que precisam de atenção.</p>

      <h2>Então os responsáveis não ficam sabendo de nada?</h2>

      <p>Não é isso. O sigilo profissional é uma regra central da Psicologia, mas não significa ausência de comunicação em qualquer circunstância. No atendimento de crianças e adolescentes, o Código de Ética orienta que, quando for necessário comunicar algo aos responsáveis, sejam compartilhadas apenas as informações estritamente essenciais para promover medidas em benefício da pessoa atendida.</p>

      <p>Também existem situações em que questões de proteção, risco ou exigências legais precisam ser avaliadas pela profissional. Por isso, os limites do sigilo devem ser explicados de maneira compreensível desde o começo, tanto ao adolescente quanto aos responsáveis.</p>

      <div className="notice">
        <strong>Um combinado importante</strong>
        <p>O objetivo do sigilo não é afastar a família. É criar condições para uma conversa protegida, preservando ao mesmo tempo as responsabilidades de cuidado e proteção.</p>
      </div>

      <h2>O que acontece nas primeiras sessões?</h2>

      <p>O adolescente não precisa chegar sabendo explicar exatamente o que sente. As primeiras sessões também servem para conhecer sua história, entender situações atuais, perceber como ele interpreta o que está vivendo e identificar o que gostaria que fosse diferente.</p>

      <p>Podem aparecer assuntos como ansiedade, insegurança, autoestima, medo de julgamento, autocobrança, dificuldades nos relacionamentos, adaptação escolar, mudanças familiares ou transições próprias da adolescência. Isso não significa que toda dificuldade seja um transtorno. A psicoterapia não deve começar de um diagnóstico presumido, mas da compreensão cuidadosa do que está acontecendo com aquela pessoa.</p>

      <h2>E como funciona quando as sessões são online?</h2>

      <p>No atendimento online, além dos mesmos cuidados éticos do trabalho psicológico, existem questões práticas importantes. O adolescente precisa de um ambiente em que consiga conversar com privacidade, conexão suficientemente estável e um dispositivo adequado para a sessão.</p>

      <p>A profissional também precisa avaliar se a modalidade mediada por tecnologia é apropriada para aquela situação. A Resolução CFP nº 9/2024 regulamenta o exercício profissional da Psicologia mediado por Tecnologias Digitais da Informação e da Comunicação e reforça responsabilidades relacionadas ao uso dessas tecnologias, ao sigilo e ao manejo das informações.</p>

      <p>Por isso, “ser online” não significa simplesmente fazer uma chamada de vídeo. A modalidade faz parte do planejamento do atendimento e precisa oferecer condições compatíveis com o cuidado psicológico.</p>

      <h2>Quando pode ser uma boa ideia procurar psicoterapia?</h2>

      <p>Não é necessário esperar uma crise grave. A procura pode acontecer quando alguma dificuldade começa a ocupar espaço demais na rotina, nas relações, na escola, no sono, na autoestima ou nas escolhas do adolescente.</p>

      <p>Também pode fazer sentido quando ele próprio percebe que gostaria de compreender melhor suas emoções, padrões de comportamento ou formas de reagir a determinadas situações. O papel da avaliação profissional é justamente entender o contexto antes de definir objetivos para o acompanhamento.</p>

      <h2>Como conversar com um adolescente sobre terapia?</h2>

      <p>Apresentar a terapia como punição, correção ou prova de que “há algo errado” pode aumentar resistência. Uma conversa mais útil costuma explicar o motivo da preocupação sem transformar o adolescente em um problema a ser consertado.</p>

      <p>Também ajuda deixar espaço para perguntas: quem é a profissional, como funciona uma sessão, o que é sigiloso, quando responsáveis participam e o que o adolescente pode esperar do primeiro encontro.</p>

      <p>A decisão de começar um acompanhamento envolve adultos responsáveis, mas a construção de vínculo depende também de o adolescente compreender o processo e poder participar dele de forma respeitosa.</p>

      <h2>Quer entender como funciona o atendimento?</h2>

      <p>Na página de adolescentes e responsáveis, explico com mais detalhes como organizo o início do acompanhamento, o papel da família e os combinados sobre sigilo.</p>

      <div className="actions">
        <a className="button" href="/adolescentes">Atendimento para adolescentes</a>
        <a className="text-link" href="/primeiro-contato">Conversar sobre atendimento →</a>
      </div>

      <h2>Referências para revisão</h2>

      <ul>
        <li><a className="text-link" href="https://site.cfp.org.br/wp-content/uploads/2022/05/WEB_29535_Codigo_de_etica_da_profissao_14.04.pdf" target="_blank" rel="noopener noreferrer">Código de Ética Profissional do Psicólogo — Conselho Federal de Psicologia ↗</a></li>
        <li><a className="text-link" href="https://transparencia.cfp.org.br/crp10/pergunta-frequente/sigilo-profissional/" target="_blank" rel="noopener noreferrer">Orientações sobre sigilo profissional — Sistema Conselhos de Psicologia ↗</a></li>
        <li><a className="text-link" href="https://pesquisa.in.gov.br/imprensa/servlet/INPDFViewer?captchafield=firstAccess&amp;data=30%2F07%2F2024&amp;jornal=515&amp;pagina=167" target="_blank" rel="noopener noreferrer">Resolução CFP nº 9/2024 — Diário Oficial da União ↗</a></li>
      </ul>

      <p className="notice">Conteúdo informativo. Não substitui avaliação psicológica individual e não deve ser usado para realizar diagnóstico à distância.</p>
    </article>
  </main>;
}
