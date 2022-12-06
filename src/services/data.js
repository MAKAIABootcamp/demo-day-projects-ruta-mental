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
    question: "¿En que rango de edad te encuentras?",
      options: {
        option1: "De 6 a 11 años",
        option2: "De 12 a 18 años",
        option3: "De 19 a 26 años",
        option4: "De 27 a 59",
        option5: "60 años o más"
      }
  },
  {
    question: "Con que genero te identificas",
    options: {
      option1: "Masculino",
      option2: "Femenino",
      option3: "No binario",
      option4: "Prefiero no decirlo"
    }
  },
  {
    question: "¿Actualmente estas pasando por una de estas dificultades?",
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
    question: "¿Que acercamiento tienes con las drogas?",
    options: {
      option1: "No consumo",
      option2: "Consumo ocasional (Con poca frecuencia)",
      option2: "Consumo habitual (Con frecuencia)",
      option3: "Consumo compulsivo (Consumo incontrolado)",
      option4: "Policonsumo (Consumo frecuente de más de una sustancia)"
    }
  },
]