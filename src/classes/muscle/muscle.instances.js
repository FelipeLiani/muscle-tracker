import Muscle from "./muscle.class";

const dorsais = new Muscle(
  "dorsais",
  require('../../../assets/Muscles Icon Pack/Back muscle.png')
);
const costasSuperiores = new Muscle(
  "costas superiores",
  require('../../../assets/Muscles Icon Pack/Upper back muscle.png')
);
const costasInferiores = new Muscle(
  "costas inferiores",
  require('../../../assets/Muscles Icon Pack/Lower back muscle.png')
);
const peitorais = new Muscle(
  "peitorais",
  require('../../../assets/Muscles Icon Pack/Chest muscle.png')
);
const deltoides = new Muscle(
  "deltóides",
  require('../../../assets/Muscles Icon Pack/Shoulder muscle.png')
);
const deltoidesPosteriores = new Muscle(
  "deltóides posteriores",
  require('../../../assets/Muscles Icon Pack/Shoulder back.png')
);
const biceps = new Muscle(
  "bíceps",
  require('../../../assets/Muscles Icon Pack/Biceps muscle.png')
);
const triceps = new Muscle(
  "tríceps",
  require('../../../assets/Muscles Icon Pack/Triceps muscle.png')
);
const antebracos = new Muscle(
  "antebraços",
  require('../../../assets/Muscles Icon Pack/Forearms.png')
);
const quadriceps = new Muscle(
  "quadríceps",
  require('../../../assets/Muscles Icon Pack/Quadriceps.png')
);
const posterioresDeCoxa = new Muscle(
  "posteriores de coxa",
  require('../../../assets/Muscles Icon Pack/Hamstrings.png')
);
const panturrilhas = new Muscle(
  "panturrilhas",
  require('../../../assets/Muscles Icon Pack/Calves.png')
);
const adutoresDeCoxa = new Muscle(
  "adutores de coxa",
  require('../../../assets/Muscles Icon Pack/Inner thigh.png')
);
const abdutoresDeCoxa = new Muscle(
  "abdutores de coxa",
  require('../../../assets/Muscles Icon Pack/Outer thigh.png')
);
const gluteos = new Muscle(
  "glúteos",
  require('../../../assets/Muscles Icon Pack/Glutes.png')
);
const abdomen = new Muscle(
  "abdômen",
  require('../../../assets/Muscles Icon Pack/Abdominals.png')
);

export const muscles = {
  dorsais,
  costasSuperiores,
  costasInferiores,
  peitorais,
  deltoides,
  deltoidesPosteriores,
  biceps,
  triceps,
  antebracos,
  quadriceps,
  posterioresDeCoxa,
  panturrilhas,
  adutoresDeCoxa,
  abdutoresDeCoxa,
  gluteos,
  abdomen
}
