import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: "Dúvidas sobre como funciona a terapia, primeira sessão, duração, atendimento online, sigilo, adolescentes, horários e valores.",
};

const faq = [
  {
    question: "Nunca fiz terapia, como funciona?",
    answer: [
      "Você não precisa chegar sabendo exatamente o que dizer, nem ter tudo organizado na cabeça. Muitas vezes, começamos justamente pelo que está confuso.",
      "Nas primeiras sessões, o psicólogo procura conhecer melhor você, sua história, o que tem acontecido e o que fez você buscar ajuda naquele momento. Aos poucos, vocês vão identificando dificuldades, padrões, emoções e situações que merecem mais atenção.",
      "Durante o processo, você pode falar sobre pensamentos, sentimentos, relações, acontecimentos do dia a dia, medos, inseguranças ou qualquer questão que esteja sendo importante para você. O papel do psicólogo não é julgar, dar broncas ou simplesmente dizer o que você deve fazer, mas ajudar você a compreender melhor o que está vivendo e encontrar formas mais saudáveis de lidar com isso.",
      "A terapia também não precisa começar por uma grande crise. Você pode buscar acompanhamento porque está se sentindo sobrecarregado, quer se conhecer melhor, deseja mudar alguns padrões ou simplesmente sente que algumas coisas poderiam estar mais leves.",
      "E não se preocupe se houver silêncio, nervosismo ou dificuldade para falar no começo. Isso também faz parte. O vínculo e a confiança são construídos aos poucos, no seu ritmo.",
    ],
  },
  {
    question: "Como funciona a primeira sessão?",
    answer: [
      "É um momento para compreender o que motivou a busca pela terapia, sua história, dificuldades e expectativas. Também acolhemos sua trajetória, esclarecemos dúvidas e conversamos sobre como será o processo.",
      "Você não precisa chegar com tudo organizado ou saber exatamente por onde começar. Antes do acompanhamento, também recebe as informações e os combinados administrativos registrados em contrato ou termo.",
    ],
  },
  {
    question: "Qual a duração das sessões e do tratamento?",
    answer: [
      "Cada sessão dura aproximadamente 45 minutos e acontece em horário definido conforme disponibilidade e agendamento prévio.",
      "Não existe um tempo único ou previamente determinado para o tratamento. Cada processo acontece de forma individual, considerando as demandas apresentadas, os objetivos estabelecidos, a frequência das sessões e a evolução ao longo do acompanhamento.",
      "Ao longo da terapia, avaliamos juntos o progresso e a necessidade de continuidade, redução da frequência das sessões ou preparação para a alta.",
    ],
  },
  {
    question: "O atendimento é online?",
    answer: [
      "Sim. As sessões são realizadas por videochamada pelo Google Meet ou Microsoft Teams. Para preservar a privacidade e a qualidade da conversa, participe de um ambiente reservado e, se possível, utilize fones de ouvido e uma conexão estável.",
      "O link e as orientações práticas são informados antes do encontro.",
    ],
  },
  {
    question: "Como funciona para adolescentes?",
    answer: [
      "Há uma conversa inicial com responsáveis e combinados claros sobre participação e sigilo. Responsáveis colaboram com informações, autorização e condições para o atendimento, mas o adolescente precisa de privacidade para construir confiança no processo.",
      "O conteúdo detalhado das sessões não é repassado. Os limites do sigilo e as situações que exigem proteção são explicados desde o início.",
    ],
  },
  {
    question: "Como funciona o sigilo?",
    answer: [
      "O sigilo profissional é um dos princípios fundamentais da Psicologia. Tudo o que você compartilha durante as sessões é tratado com privacidade, ética e responsabilidade, conforme as normas que orientam a atuação profissional.",
      "Existem apenas situações excepcionais previstas pelas normas profissionais e pela legislação, especialmente quando é necessário proteger você ou terceiros diante de uma situação de risco. Mesmo nesses casos, a necessidade e os limites dessa comunicação são informados a você.",
    ],
  },
  {
    question: "Como saber horários e valores?",
    answer: [
      "Os horários disponíveis e o valor da sessão são informados no contato inicial, em espaço reservado e conforme disponibilidade para agendamento.",
      "A orientação profissional é que o preço não seja utilizado como forma de propaganda. Antes do acompanhamento, o contrato ou termo registra pagamento, horários, atrasos, cancelamentos, remarcações e responsabilidades de ambas as partes.",
    ],
  },
];

export default function Page() {
  return <main>
    <PageHero eyebrow="Perguntas frequentes" title="Informação também faz parte do cuidado." intro="Sete respostas diretas sobre como a terapia funciona, primeira sessão, duração, atendimento online, adolescentes, sigilo, horários e valores." />
    <section className="content narrow shell faq faq-expanded">
      {faq.map(({ question, answer }, index) => <details key={question} open={index === 0}>
        <summary>{question}</summary>
        <div className="faq-answer">{answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </details>)}
    </section>
  </main>;
}
