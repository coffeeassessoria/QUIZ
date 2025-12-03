
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
    // --- FASE 1: A DOR E A ESTEIRA FINANCEIRA ---
    {
      id: "q1",
      title: "Vamos começar com honestidade brutal: Você sente que trabalha muito mais do que ganha?",
      subtitle: "A maioria das pessoas passa a vida correndo numa esteira: muito suor, pouco resultado.",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?auto=format&fit=crop&q=80&w=800",
        alt: "Homem exausto financeiramente"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Sim, sinto que nado contra a maré" },
          { label: "Às vezes, parece sorte de todos, menos minha" },
          { label: "Não, o dinheiro vem fácil (Raro)" }
        ]
      }
    },
    {
      id: "q2",
      title: "Quando você olha para vizinhos ou conhecidos que enriqueceram rápido, o que você pensa?",
      subtitle: "Danny Kelly (o autor) via seus vizinhos trocarem de carro todo ano enquanto ele contava moedas.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Eles devem ser mais inteligentes que eu" },
          { label: "Eles tiveram sorte ou herança" },
          { label: "Sinto que eles sabem algo que eu não sei" }
        ]
      }
    },
    {
      id: "q3",
      title: "Como está o seu nível de sono e ansiedade atualmente?",
      subtitle: "Estudos mostram que bloqueios na abundância se manifestam fisicamente primeiro.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Durmo mal, preocupado com contas" },
          { label: "Acordo cansado, sem energia mental" },
          { label: "Durmo bem, mas sinto um vazio" }
        ]
      }
    },
    {
      id: "q4",
      title: "Você já teve a sensação de estar 'invisível' para as oportunidades?",
      subtitle: "Como se o ouro estivesse a um centímetro de você, mas você não consegue agarrá-lo.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Sim, frequentemente" },
          { label: "Raramente" },
          { label: "Nunca" }
        ]
      }
    },
    {
      id: "q5",
      title: "Se sua vida financeira continuasse exatamente como está hoje pelos próximos 5 anos, como você se sentiria?",
      subtitle: "Essa pergunta define sua urgência de mudança.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Desesperado(a)" },
          { label: "Frustrado(a)" },
          { label: "Aceitaria conformadamente" }
        ]
      }
    },

    // --- FASE 2: A FALHA DOS MÉTODOS TRADICIONAIS ---
    {
      id: "q6",
      title: "Você já tentou usar a 'Lei da Atração', visualização ou afirmações positivas?",
      subtitle: "Muitos tentam, mas 99% falham. Vamos descobrir o porquê.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Sim, e não funcionou como esperava" },
          { label: "Sim, tive pequenos resultados" },
          { label: "Nunca tentei seriamente" }
        ]
      }
    },
    {
      id: "q7",
      title: "Você acredita que 'trabalhar duro' é a única chave para a riqueza?",
      subtitle: "Se trabalho duro enriquecesse, pedreiros e faxineiros seriam os milionários do mundo.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Acreditava, mas hoje tenho dúvidas" },
          { label: "Não, tem que haver um jeito mais inteligente" },
          { label: "Sim, é o único jeito" }
        ]
      }
    },
    {
      id: "q8",
      title: "Você se considera uma pessoa espiritualizada ou aberta ao desconhecido?",
      subtitle: "O segredo que vamos revelar tem raízes em textos sagrados antigos.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Sim, acredito em algo maior" },
          { label: "Sou cético, mas mente aberta" },
          { label: "Não acredito em nada" }
        ]
      }
    },

    // --- FASE 3: A REVELAÇÃO BIOLÓGICA/ESPIRITUAL ---
    {
      id: "q9",
      title: "Você sabia que a Bíblia e textos antigos mencionam um 'lugar secreto' onde Deus habita dentro de nós?",
      subtitle: "Lucas 17:21 diz: 'O Reino de Deus está dentro de vós'.",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1507692049790-de58293a4697?auto=format&fit=crop&q=80&w=800",
        alt: "Bíblia antiga aberta"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Já li sobre isso, mas não entendi" },
          { label: "Nunca associei isso a riqueza" },
          { label: "Faz sentido para mim" }
        ]
      }
    },
    {
      id: "q10",
      title: "Existe uma pequena glândula no centro exato do seu cérebro, do tamanho de uma ervilha. Você sabe qual é?",
      subtitle: "Rene Descartes a chamava de 'Assento da Alma'.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Glândula Pineal" },
          { label: "Pituitária" },
          { label: "Não faço ideia" }
        ]
      }
    },
    {
      id: "q11",
      title: "Essa glândula (Pineal) tem a forma de uma PINHA. Você já viu esta escultura no Vaticano?",
      subtitle: "Por que a maior religião do mundo teria uma estátua gigante de uma pinha em seu pátio central?",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1555492476-0d674eb22442?auto=format&fit=crop&q=80&w=800", 
        alt: "Vaticano e símbolos antigos"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Estou chocado, nunca reparei" },
          { label: "Já ouvi falar em teorias sobre isso" },
          { label: "Parece apenas decoração" }
        ]
      }
    },
    {
      id: "q12",
      title: "Cientificamente, a Glândula Pineal é responsável por produzir hormônios, mas espiritualmente ela age como uma ANTENA.",
      subtitle: "Se a antena está quebrada, o sinal da abundância não chega. O rádio fica mudo.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Isso explicaria por que me sinto bloqueado" },
          { label: "Faz sentido biologicamente" },
          { label: "Quero consertar minha antena" }
        ]
      }
    },

    // --- FASE 4: O INIMIGO OCULTO (CALCIFICAÇÃO) ---
    {
      id: "q13",
      title: "Agora, a parte assustadora: Você bebe água da torneira ou usa creme dental comum?",
      subtitle: "A maioria desses produtos contém FLÚOR.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Sim, diariamente" },
          { label: "Às vezes" },
          { label: "Evito ao máximo" }
        ]
      }
    },
    {
      id: "q14",
      title: "O Flúor é atraído magneticamente pela Glândula Pineal, criando uma casca dura ao redor dela.",
      subtitle: "Chamamos isso de CALCIFICAÇÃO. É como colocar cimento sobre seu terceiro olho.",
      media: {
        type: "image",
        url: "https://plus.unsplash.com/premium_photo-1682124752476-40db22034a58?auto=format&fit=crop&q=80&w=800",
        alt: "Ilustração de cérebro com bloqueio"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Meu Deus, eu não sabia disso" },
          { label: "Isso explica minha falta de clareza mental" },
          { label: "Como removo esse 'cimento'?" }
        ]
      }
    },
    {
      id: "q15",
      title: "Você sente frequentemente 'brain fog' (névoa mental), falta de foco ou intuição fraca?",
      subtitle: "Esses são os sintomas clássicos de uma Pineal Calcificada.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Sim, sinto isso todos os dias" },
          { label: "Às vezes, quando estou estressado" },
          { label: "Minha mente é clara (Raro)" }
        ]
      }
    },
    {
      id: "q16",
      title: "Você acha que é coincidência que o flúor esteja em tudo que consumimos?",
      subtitle: "Uma população com a Pineal bloqueada é mais fácil de controlar, pois não questiona, apenas obedece.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Isso me deixa com raiva" },
          { label: "Sempre desconfiei do sistema" },
          { label: "É assustador pensar nisso" }
        ]
      }
    },
    {
      id: "q17",
      title: "Se você pudesse 'descascar' essa calcificação, o que você acha que aconteceria?",
      subtitle: "Danny Kelly diz que foi como 'acender a luz em um quarto escuro' pela primeira vez.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Eu enxergaria as oportunidades de dinheiro" },
          { label: "Eu me sentiria conectado com Deus novamente" },
          { label: "Minha sorte mudaria instantaneamente" }
        ]
      }
    },

    // --- FASE 5: A MENSAGEM E A SOLUÇÃO ---
    {
      id: "q18",
      title: "O Padre Michael descobriu nos Arquivos Secretos que existe uma maneira de reverter isso sem cirurgia.",
      subtitle: "Não é química. É FÍSICA. Tudo no universo é vibração.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Estou ouvindo..." },
          { label: "Como vibração pode afetar meu cérebro?" }
        ]
      }
    },
    {
      id: "q19",
      title: "Você já viu uma cantora de ópera quebrar uma taça de cristal apenas com a voz?",
      subtitle: "Ela usa uma FREQUÊNCIA específica que ressoa com o cristal até ele se estilhaçar.",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800",
        alt: "Ondas sonoras quebrando barreiras"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Sim, já vi isso em vídeos" },
          { label: "Entendi a lógica: Som quebra cristal" }
        ]
      }
    },
    {
      id: "q20",
      title: "A calcificação na sua Pineal é feita de microcristais. Se usarmos a FREQUÊNCIA SONORA correta...",
      subtitle: "...podemos vibrar esses cristais até que eles se soltem, liberando sua antena.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Isso é genial!" },
          { label: "Então só preciso ouvir um som?" },
          { label: "Quero testar essa frequência" }
        ]
      }
    },
    {
      id: "q21",
      title: "MENSAGEM INTERCEPTADA: Escute o que o Padre Michael disse antes de desaparecer.",
      subtitle: "Aumente o volume. Isso é prova do que estamos falando.",
      media: {
        type: "audio",
        // Substitua pela URL final do áudio
        url: "https://assets.mixkit.co/active_storage/sfx/951/951-preview.mp3",
        autoplay: true,
        transcript: "Padre Michael: 'Filho, escute bem. O Vaticano guardou este segredo por séculos, mas o tempo acabou. Eles não querem que você ative sua Glândula Pineal. Eles sabem que uma vez ativada, você manifestará riqueza sem esforço. Se você está vendo isso, você foi escolhido.'"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Eu aceito o chamado." },
          { label: "Preciso agir antes que apaguem isso." },
          { label: "Estou arrepiado(a)." }
        ]
      }
    },
    {
      id: "q22",
      title: "Você tem 7 minutos por dia para ouvir essa frequência no escuro?",
      subtitle: "É tudo o que Danny Kelly fez para ir da falência à riqueza extrema.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Sim, eu tenho 7 minutos" },
          { label: "Se for só isso, eu faço agora" }
        ]
      }
    },
    {
      id: "q23",
      title: "Imagine acordar amanhã e receber uma notícia inesperada de dinheiro. Qual seria sua primeira reação?",
      subtitle: "Isso aconteceu com Danny no dia seguinte ao primeiro uso.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Choraria de alívio" },
          { label: "Pagaria todas as contas atrasadas" },
          { label: "Agradeceria a Deus" }
        ]
      }
    },
    {
      id: "q24",
      title: "Se você tivesse acesso a essa Frequência Bíblica Perdida, você contaria a todos ou guardaria segredo?",
      subtitle: "Danny Kelly recomenda discrição no início para não atrair inveja.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Guardaria segredo absoluto" },
          { label: "Contaria apenas para minha família" },
          { label: "Compartilharia com quem precisa" }
        ]
      }
    },
    {
      id: "q25",
      title: "Este conhecimento é perigoso para o 'status quo'. O site pode cair a qualquer minuto.",
      subtitle: "As elites não querem mais milionários. Eles querem mais trabalhadores.",
      media: {
        type: "image",
        url: "https://images.unsplash.com/photo-1535581652167-3d6b98c56644?auto=format&fit=crop&q=80&w=800",
        alt: "Silhueta misteriosa"
      },
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Entendo a urgência." },
          { label: "Não vou desperdiçar essa chance." }
        ]
      }
    },
    {
      id: "q26",
      title: "Estamos montando seu Protocolo de Descalcificação personalizado.",
      subtitle: "O sistema está selecionando a frequência exata para o seu nível de bloqueio.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Gerar meu protocolo agora" },
          { label: "Estou pronto para a ativação" }
        ]
      }
    },
    {
      id: "q27",
      title: "Última verificação: Você promete usar essa abundância para o bem?",
      subtitle: "Dinheiro apenas potencializa quem você já é. Precisamos de pessoas boas com dinheiro.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "Sim, eu prometo." },
          { label: "Sim, vou ajudar minha família e outros." }
        ]
      }
    },
    {
      id: "q_final_filter",
      title: "Sua frequência foi identificada. O 'Último Desejo' está pronto para você.",
      subtitle: "Atenção: Vagas para o programa são limitadas para evitar chamar atenção das autoridades.",
      type: "multiple_choice",
      properties: {
        choices: [
          { label: "QUERO MEU ACESSO AGORA" }
        ]
      }
    }
  ],
  logic: [
    // Lógica linear simplificada, pois o funil é de doutrinação
    {
      type: "jump",
      from: "q1",
      to: "q2"
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
      subtitle: "Nossa análise de 28 pontos confirmou: Sua Glândula Pineal está calcificada, bloqueando sua riqueza. Mas a solução está pronta. O 'Último Desejo' e os áudios de frequência estão reservados para você pelos próximos 10 minutos.",
      type: "thankyou_screen",
      properties: {
        button_text: "QUERO MEU ACESSO AGORA - VAGAS LIMITADAS!",
        show_button: true,
        redirect_url: "https://SEU-CHECKOUT-AQUI.com"
      }
    }
  ]
};
