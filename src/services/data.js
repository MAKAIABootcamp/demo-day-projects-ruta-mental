import { facebook, google } from '../firebase/firebaseConfig';

export const loginProvider = [
    {
      name: "google",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
      provider: google,
    },
    {
      name: "facebook",
      image: "https://reposteriaquetayyeya.com/wp-content/uploads/2016/10/facebook-icon-basic-round-social-iconset-s-icons-7.png",
      provider: facebook,
    },
  ];

export const questionnaire = [
  {
    question: "¿En qué rango de edad te encuentras?",
      options: {
        option1: "De 6 a 11 años",
        option2: "De 12 a 18 años",
        option3: "De 19 a 26 años",
        option4: "De 27 a 59",
        option5: "60 años o más"
      }
  },
  {
    question: "¿Con qué género te identificas?",
    options: {
      option1: "Masculino",
      option2: "Femenino",
      option3: "No binario",
      option4: "Prefiero no decirlo"
    }
  },
  {
    question: "¿Actualmente estás pasando por una de estas dificultades?",
    options: {
      option1: "Familiar (Conflictos, maltrato, abuso)",
      option2: "Pareja (Ruptura, conflictos, duelo)",
      option3: "Académico (Bajo rendimiento, perdida de año o semestre)",
      option4: "Social (Introversión, adaptación, cultural, bullying)",
      option5: "Físico (Enfermedad, autoestima)"
    }
  },
  {
    question: "¿Has pensado en la muerte?",
    options: {
      option1: "He pensado en el suicidio",
      option2: "He pensado y lo he intentado o planeado",
      option3: "Me he autolesionado",
      option4: "Ninguna de las anteriores"
    }
  },
  {
    question: "¿Qué acercamiento tienes con las drogas?",
    options: {
      option1: "No consumo",
      option2: "Consumo ocasional (Con poca frecuencia)",
      option3: "Consumo habitual (Con frecuencia)",
      option4: "Consumo compulsivo (Consumo incontrolado)",
      option5: "Policonsumo (Consumo frecuente de más de una sustancia)"
    }
  },
]
export const category = [
  
  {
    label: "Barbosa",
    value: 1,
  },
  {
    label: "Bello",
    value: 2,
  },
  {
    label: "Carepa",
    value: 3,
  },
  {
    label: "Copacabana",
    value: 4,
  },
  {
    label: "Envigado",
    value: 5,
  },
  {
    label: "La Estrella",
    value: 6,
  },
  {
    label: "Girardota",
    value: 7,
  },
  {
    label: "Guarne",
    value: 8,
  },
  {
    label: "Guatapé",
    value: 9,
  },
  {
    label: "Itagüí",
    value: 10,
  },
  {
    label: "Marinilla",
    value: 11,
  },
  {
    label: "Medellín",
    value: 12,
  },
  {
    label: "Rionegro",
    value: 13,
  },
  {
    label: "Sabaneta",
    value: 14,
  },
  {
    label: "Santuario",
    value: 15,
  }
  
];