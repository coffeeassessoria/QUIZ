
import { QuizData } from './types';

export const quizData: QuizData = {
  title: "Diagnóstico de Frequência da Riqueza",
  settings: {
    is_public: true,
    language: "pt",
    progress_bar: "percentage",
    show_progress_bar: true
  },
  fields: [
    {
      id: "q1",
      title: "Você sente que, não importa o quanto trabalhe duro, existe uma 'trava invisível' impedindo o dinheiro de chegar até você?",
      subtitle: "A maioria das pessoas passa a vida correndo numa esteira: muito suor, pouco resultado.",
      media: {
        type: "image",
        // Imagem de estresse financeiro/cansaço extremo
        url: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?auto=format&fit=crop&q=80&w=800",
        alt: "Homem desesperado com as mãos na cabeça"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Sim, sinto que nado contra a maré" },
          { label: "Às vezes, parece sorte de todos, menos minha" },
          { label: "Não, tudo flui facilmente (Raro)" }
        ]
      }
    },
    {
      id: "q2",
      title: "Você sabia que existe um órgão 'secreto' no centro do seu cérebro, citado na Bíblia como a morada de Deus?",
      subtitle: "Os antigos chamavam de 'Terceiro Olho'. O Vaticano sabe disso há séculos.",
      media: {
        type: "image",
        // Imagem com vibe de Vaticano/Sagrado/Ouro
        url: "https://images.unsplash.com/photo-1555492476-0d674eb22442?auto=format&fit=crop&q=80&w=800", 
        alt: "Arte sacra antiga e dourada"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Nunca ouvi falar disso" },
          { label: "Já ouvi rumores sobre o 'Terceiro Olho'" },
          { label: "Desconfio que a Igreja esconde segredos" }
        ]
      }
    },
    {
      id: "q3",
      title: "A Ciência Moderna chama esse órgão de Glândula Pineal. Mas há um problema grave acontecendo com você agora.",
      subtitle: "Toxinas modernas (como o flúor na água) estão CALCIFICANDO sua glândula, desligando sua conexão com a abundância.",
      media: {
        type: "image",
        // Imagem abstrata de cérebro/energia/raio-x
        url: "https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?auto=format&fit=crop&q=80&w=800",
        alt: "Ilustração de cérebro iluminado"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Isso explica meu cansaço mental e falta de sorte" },
          { label: "Faz sentido, sinto minha intuição bloqueada" },
          { label: "Quero saber como reverter isso urgente" }
        ]
      }
    },
    {
      id: "q4",
      title: "ESCUTE COM ATENÇÃO: Mensagem Urgente Interceptada.",
      subtitle: "Esta gravação explica por que precisamos agir rápido antes que o segredo seja apagado. Aumente o volume.",
      media: {
        type: "audio",
        // IMPORTANTE: Substitua esta URL pelo SEU áudio gravado.
        // Script Sugerido: "Filho, escute bem. O Vaticano guardou este segredo por séculos, mas o tempo acabou. Eles não querem que você ative sua Glândula Pineal, porque isso o tornaria livre do sistema. Se você está ouvindo isso, você foi escolhido."
        url: "https://assets.mixkit.co/active_storage/sfx/951/951-preview.mp3",
        autoplay: true,
        transcript: "Padre Michael: 'Filho, escute bem. O Vaticano guardou este segredo por séculos nos Arquivos Secretos, mas o tempo acabou. Eles não querem que você ative sua Glândula Pineal, porque isso o tornaria livre do sistema de escassez. Se você está lendo isso, você foi escolhido.'"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Eu ouvi e entendo o risco. Quero continuar." },
          { label: "Preciso desse segredo antes que o apaguem." },
          { label: "Estou cético, mas a mensagem me tocou." }
        ]
      }
    },
    {
      id: "q5",
      title: "Este método não exige orações, meditação ou trabalho duro. É baseado em FREQUÊNCIA SONORA.",
      subtitle: "Assim como o som pode quebrar uma taça de cristal, a frequência certa quebra a calcificação da sua pineal.",
      media: {
        type: "image",
        // Ondas sonoras/Abstrato
        url: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800",
        alt: "Ondas sonoras abstratas"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Eu tenho 7 minutos por dia para testar isso" },
          { label: "Se for comprovado cientificamente, eu quero" },
          { label: "Eu faria qualquer coisa para mudar de vida agora" }
        ]
      }
    },
    {
      id: "q6",
      title: "Imagine ativar essa parte do cérebro hoje à noite. O que você faria se o dinheiro deixasse de ser um problema amanhã?",
      subtitle: "Danny Kelly usou isso e foi de quebrado a vizinho de senadores. Agora é sua vez.",
      media: {
        type: "image",
        // Luxo/Carro
        url: "https://images.unsplash.com/photo-1549488497-69502a9e32d2?auto=format&fit=crop&q=80&w=800",
        alt: "Mão no volante de carro de luxo"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Daria uma vida digna para minha família" },
          { label: "Viajaria o mundo e sairia do aluguel" },
          { label: "Pagaria todas as minhas dívidas imediatamente" }
        ]
      }
    },
    {
      id: "q7",
      title: "Atenção: As Elites não querem que você saiba disso.",
      subtitle: "Eles preferem você trabalhando muito e ganhando pouco. Este site pode sair do ar a qualquer momento.",
      media: {
        type: "image",
        // Mistério/Sombra
        url: "https://images.unsplash.com/photo-1535581652167-3d6b98c56644?auto=format&fit=crop&q=80&w=800",
        alt: "Figura misteriosa na sombra"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Entendo o risco. Quero meu acesso agora." },
          { label: "Estou pronto para receber o que é meu por direito." }
        ]
      }
    },
    {
      id: "q_final_filter",
      title: "Última pergunta: Você se compromete a usar esse poder para o bem e ajudar sua família?",
      subtitle: "O 'Efeito Ímã' é real e poderoso. Precisamos de pessoas com o coração puro, como Danny.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Sim, eu prometo usar com sabedoria" },
          { label: "Sim, minha família merece o melhor" }
        ]
      }
    }
  ],
  logic: [
    {
      type: "jump",
      from: "q1",
      to: "q2"
    },
    {
      type: "jump",
      from: "q2",
      to: "q7",
      condition: {
        op: "equal",
        vars: ["response", "Desconfio que a Igreja esconde segredos"]
      }
    },
    {
      type: "jump",
      from: "q_final_filter",
      to: "thankyou_screen"
    }
  ],
  thankyou_screens: [
    {
      id: "thankyou_screen",
      title: "ACESSO CONCEDIDO: O Segredo do Vaticano Foi Revelado",
      subtitle: "Você foi selecionado. Sua Glândula Pineal pode ser reativada hoje. O 'Último Desejo' e os áudios de frequência estão disponíveis para você agora. Não deixe essa página ou a oportunidade passará para o próximo da fila.",
      type: "thankyou_screen",
      properties: {
        button_text: "QUERO MEU ACESSO AGORA - VAGAS LIMITADAS!",
        show_button: true,
        redirect_url: "https://SEU-CHECKOUT-AQUI.com"
      }
    }
  ]
};