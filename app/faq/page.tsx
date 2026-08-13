import type { Metadata } from "next";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: "Dúvidas sobre sigilo, duração da terapia, TCC e como as sessões podem ajudar.",
};

const faq = [
  {
    question: "O sigilo é real?",
    answer: [
      "Sim. O sigilo profissional é um dos princípios fundamentais da Psicologia. Tudo o que você compartilha durante as sessões é tratado com privacidade, ética e responsabilidade, conforme as normas que orientam a atuação profissional.",
      "Isso significa que suas falas, experiências e informações pessoais não são compartilhadas com outras pessoas. Existem apenas situações excepcionais previstas pelas normas profissionais e pela legislação, especialmente quando é necessário proteger você ou terceiros diante de uma situação de risco. Mesmo nesses casos, a necessidade e os limites dessa comunicação são informados a você.",
    ],
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer: [
      "Não existe um tempo único ou previamente determinado para a psicoterapia. Cada processo acontece de forma individual, considerando as demandas apresentadas, os objetivos estabelecidos, a frequência das sessões e a evolução ao longo do acompanhamento.",
      "Ao longo da terapia, avaliamos juntos o progresso e a necessidade de continuidade, redução da frequência das sessões ou preparação para a alta.",
    ],
  },
  {
    question: "O que é Terapia Cognitivo-Comportamental?",
    answer: [
      "A Terapia Cognitivo-Comportamental (TCC) é minha abordagem de trabalho. Ela foi desenvolvida a partir de princípios científicos e continua sendo estudada e aprimorada por meio de pesquisas.",
      "Suas técnicas e intervenções não são escolhidas apenas com base em opiniões ou no que ‘parece funcionar’. Elas são investigadas em estudos que avaliam efeitos, benefícios e limitações para diferentes dificuldades psicológicas.",
      "A TCC parte da ideia de que a forma como interpretamos o que acontece conosco influencia o que sentimos e como agimos. É uma terapia colaborativa: não estarei ali apenas dizendo o que você deve fazer. Vamos construir o processo juntos, respeitando sua história, seu ritmo e o que faz sentido para você.",
      "Com o tempo, a proposta é que você desenvolva ferramentas para se compreender melhor e consiga levá-las para a vida fora do consultório. Na TCC, acolhimento e ciência caminham juntos.",
    ],
  },
  {
    question: "Como uma conversa pode me ajudar?",
    answer: [
      "É comum pensar: ‘Mas como conversar sobre os meus problemas vai mudar alguma coisa?’. A terapia realmente envolve conversa, mas não é apenas uma conversa comum.",
      "Enquanto você fala, utilizo conhecimentos da Psicologia para compreender pensamentos, emoções, comportamentos, padrões e a forma como você interpreta e responde às situações. Não estamos apenas batendo papo ou dando conselhos: existe ciência, estudo, método e intencionalidade terapêutica por trás desse encontro.",
      "Na TCC, as intervenções são escolhidas de acordo com as necessidades e os objetivos de cada pessoa. O trabalho pode envolver questionamentos, exercícios, psicoeducação, técnicas e estratégias para compreender o que mantém uma dificuldade e experimentar novas maneiras de lidar com ela também fora da sessão.",
    ],
  },
  {
    question: "Como funciona a primeira sessão?",
    answer: ["É um momento para compreender o que motivou a busca pela terapia, sua história, dificuldades e expectativas. Também acolhemos sua trajetória, esclarecemos dúvidas e conversamos sobre como será o processo."],
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer: ["Cada sessão dura aproximadamente 45 minutos e acontece online pelo Google Meet, em horário definido conforme disponibilidade e agendamento prévio."],
  },
  {
    question: "Como saber o valor da sessão?",
    answer: ["O valor é informado no contato inicial, em espaço reservado. A orientação profissional é que o preço não seja utilizado como forma de propaganda."],
  },
  {
    question: "Receberei um contrato?",
    answer: ["Sim. Antes do acompanhamento, você receberá um contrato ou termo com valores, pagamento, horários, atrasos, cancelamentos, remarcações e responsabilidades de ambas as partes."],
  },
  {
    question: "Como funciona para adolescentes?",
    answer: ["Há uma conversa inicial com responsáveis e combinados claros sobre participação e sigilo. O espaço terapêutico do adolescente é preservado, observados os limites éticos e as situações de risco."],
  },
  {
    question: "Você atende emergências?",
    answer: ["Não. Este canal e as sessões agendadas não são serviços de emergência. Em risco imediato, acione o SAMU (192), uma emergência local ou o CVV (188)."],
  },
];

export default function Page() {
  return <main>
    <PageHero eyebrow="Perguntas frequentes" title="Informação também faz parte do cuidado." intro="Respostas claras sobre sigilo, duração da terapia, TCC e o que acontece durante as sessões." />
    <section className="content narrow shell faq faq-expanded">
      {faq.map(({ question, answer }, index) => <details key={question} open={index === 0}>
        <summary>{question}</summary>
        <div className="faq-answer">{answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </details>)}
    </section>
  </main>;
}
