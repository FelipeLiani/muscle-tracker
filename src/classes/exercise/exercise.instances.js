import Exercise from "./exercise.class";
import { muscles } from '../muscle/muscle.instances';

const lagPress = new Exercise(
  "lag press",
  "exercício de musculação",
  [muscles.quadriceps, muscles.posterioresDeCoxa, muscles.panturrilhas],
  require("../../../assets/exercises/lag-press.jpeg")
);
const abdominalBarraFixa = new Exercise(
  "abdominal na barra fixa",
  "exercício de musculação",
  [muscles.abdomen],
  require("../../../assets/exercises/abdominal-barra-fixa.jpeg")
);
const abdominalParalelas = new Exercise(
  "abdominal nas barras paralelas",
  "exercício de musculação",
  [muscles.abdomen],
  require("../../../assets/exercises/abdominal-paralelas.jpeg")
);
const abdominalPolia = new Exercise(
  "abdominal na polia",
  "exercício de musculação",
  [muscles.abdomen],
  require("../../../assets/exercises/abdominal-polia.jpeg")
);
const abdominal = new Exercise(
  "abdominal tradicional",
  "exercício de musculação",
  [muscles.abdomen],
  require("../../../assets/exercises/abdominal.jpeg")
);
const agachamentoBulgaro = new Exercise(
  "agachamento bulgaro",
  "exercício de musculação",
  [muscles.quadriceps],
  require("../../../assets/exercises/agachamento-bulgaro.jpeg")
);
const agachamentoGoblet = new Exercise(
  "agachamento goblet",
  "exercício de musculação",
  [muscles.quadriceps],
  require("../../../assets/exercises/agachamento-goblet.jpeg")
);
const agachamentoHalter = new Exercise(
  "agachamento com halteres",
  "exercício de musculação",
  [muscles.quadriceps],
  require("../../../assets/exercises/agachamento-halter.jpeg")
);
const agachamentoLivre = new Exercise(
  "agachamento livre",
  "exercício de musculação",
  [muscles.quadriceps],
  require("../../../assets/exercises/agachamento-livre.jpeg")
);
const agachamentoSmith = new Exercise(
  "agachamento no smith",
  "exercício de musculação",
  [muscles.quadriceps],
  require("../../../assets/exercises/agachamento-smith.jpeg")
);
const agachamentoSumo = new Exercise(
  "agachamento sumô",
  "exercício de musculação",
  [muscles.quadriceps],
  require("../../../assets/exercises/agachamento-sumo.jpeg")
);
const barraFixa = new Exercise(
  "barra fixa",
  "exercício de musculação",
  [muscles.dorsais],
  require("../../../assets/exercises/barra-fixa.jpeg")
);
const bicicleta = new Exercise(
  "bicicleta",
  "exercício cardiovascular",
  [],
  require("../../../assets/exercises/bicicleta.jpeg")
);
const cadeiraAbdutora = new Exercise(
  "cadeira abdutora",
  "exercício de musculação",
  [muscles.abdutoresDeCoxa],
  require("../../../assets/exercises/cadeira-abdutora.jpeg")
);
const cadeiraAdutora = new Exercise(
  "cadeira adutora",
  "exercício de musculação",
  [muscles.adutoresDeCoxa],
  require("../../../assets/exercises/cadeira-adutora.jpeg")
);
const cadeiraExtensora = new Exercise(
  "cadeira extensora",
  "exercício de musculação",
  [muscles.quadriceps],
  require("../../../assets/exercises/cadeira-extensora.jpg")
);
const cadeiraFlexora = new Exercise(
  "cadeira flexora",
  "exercício de musculação",
  [muscles.posterioresDeCoxa],
  require("../../../assets/exercises/cadeira-flexora.jpeg")
);
const corrida = new Exercise(
  "corrida",
  "exercício cardiovascular",
  [],
  require("../../../assets/exercises/corrida.jpeg")
);
const crossoverPoliaBaixa = new Exercise(
  "crossover com a polia baixa",
  "exercício de musculação",
  [muscles.peitorais],
  require("../../../assets/exercises/crossover-polia-baixa.jpeg")
);
const crossover = new Exercise(
  "crossover",
  "exercício de musculação",
  [muscles.peitorais],
  require("../../../assets/exercises/crossover.jpeg")
);
const cruxifixoInclinadoHalter = new Exercise(
  "cruxifixo inclinado com halteres",
  "exercício de musculação",
  [muscles.peitorais],
  require("../../../assets/exercises/cruxifixo-inclinado-halter.jpeg")
);
const cruxifixoMaquina = new Exercise(
  "cruxifixo máquina",
  "exercício de musculação",
  [muscles.peitorais],
  require("../../../assets/exercises/cruxifixo-maquina.jpeg")
);
const cruxifixoRetoHalter = new Exercise(
  "cruxifixo reto com halteres",
  "exercício de musculação",
  [muscles.peitorais],
  require("../../../assets/exercises/cruxifixo-reto-halter.jpeg")
);
const desenvolvimentoBarra = new Exercise(
  "desenvolvimento com barra",
  "exercício de musculação",
  [muscles.deltoides, muscles.peitorais],
  require("../../../assets/exercises/desenvolvimento-barra.jpeg")
);
const desenvolvimentoHalter = new Exercise(
  "desenvolvimento com halteres",
  "exercício de musculação",
  [muscles.deltoides, muscles.peitorais],
  require("../../../assets/exercises/desenvolvimento-halter.jpeg")
);
const desenvolvimentoMaquina = new Exercise(
  "desenvolvimento máquina",
  "exercício de musculação",
  [muscles.deltoides, muscles.peitorais],
  require("../../../assets/exercises/desenvolvimento-maquina.jpeg")
);
const desenvolvimentoSmith = new Exercise(
  "desenvolvimento no smith",
  "exercício de musculação",
  [muscles.deltoides, muscles.peitorais],
  require("../../../assets/exercises/desenvolvimento-smith.jpeg")
);
const elevacaoFrontalBarra = new Exercise(
  "elevação frontal com barra",
  "exercício de musculação",
  [muscles.deltoides],
  require("../../../assets/exercises/elevacao-frontal-barra.jpeg")
);
const elevacaoFrontalHalter = new Exercise(
  "elevação frontal com halteres",
  "exercício de musculação",
  [muscles.deltoides],
  require("../../../assets/exercises/elevacao-frontal-halter.jpeg")
);
const elevacaoFrontalHalterSentado = new Exercise(
  "elevação frontal com halteres sentado",
  "exercício de musculação",
  [muscles.deltoides],
  require("../../../assets/exercises/elevacao-frontal-halter-sentado.jpeg")
);
const elevacaoFrontalPolia = new Exercise(
  "elevação frontal na polia",
  "exercício de musculação",
  [muscles.deltoidesPosteriores],
  require("../../../assets/exercises/elevacao-frontal-polia.jpeg")
);
const elevacaoLateralHalter = new Exercise(
  "elevação lateral com halteres",
  "exercício de musculação",
  [muscles.deltoidesPosteriores],
  require("../../../assets/exercises/elevacao-lateral-halter.jpeg")
);
const elevacaoLateralHalterSentado = new Exercise(
  "elevação lateral com halteres sentado",
  "exercício de musculação",
  [muscles.deltoidesPosteriores],
  require("../../../assets/exercises/elevacao-lateral-halter-sentado.jpg")
);
const elevacaoLateralMaquina = new Exercise(
  "elevação lateral máquina",
  "exercício de musculação",
  [muscles.deltoidesPosteriores],
  require("../../../assets/exercises/elevacao-lateral-maquina.jpeg")
);
const elevacaoLateralPolia = new Exercise(
  "elevação lateral na polia",
  "exercício de musculação",
  [muscles.deltoidesPosteriores],
  require("../../../assets/exercises/elevacao-lateral-polia.jpeg")
);
const elliptica = new Exercise(
  "máquina elíptica",
  "exercício cardiovascular",
  [],
  require("../../../assets/exercises/elliptica.jpeg")
);
const encolhimentoHalter = new Exercise(
  "encolhimento com halteres",
  "exercício de musculação",
  [muscles.costasSuperiores],
  require("../../../assets/exercises/encolhimento-halter.jpg")
);
const encolhimentoPolia = new Exercise(
  "encolhimento na polia",
  "exercício de musculação",
  [muscles.costasSuperiores],
  require("../../../assets/exercises/encolhimento-polia.jpeg")
);
const extensaoDeQuadril = new Exercise(
  "extensão de quadril",
  "exercício de musculação",
  [muscles.posterioresDeCoxa],
  require("../../../assets/exercises/extensao-de-quadril.jpeg")
);
const flexao = new Exercise(
  "flexões",
  "exercício de musculação",
  [muscles.peitorais, muscles.triceps],
  require("../../../assets/exercises/flexao.jpeg")
);
const graviton = new Exercise(
  "graviton",
  "exercício de musculação",
  [muscles.dorsais],
  require("../../../assets/exercises/graviton.jpeg")
);
const hack = new Exercise(
  "agachamento hack",
  "exercício de musculação",
  [muscles.quadriceps],
  require("../../../assets/exercises/hack.jpeg")
);
const levantamentoTerra = new Exercise(
  "levantamento terra",
  "exercício de musculação",
  [muscles.costasInferiores],
  require("../../../assets/exercises/levantamento-terra.jpeg")
);
const mergulho = new Exercise(
  "mergulho no banco",
  "exercício de musculação",
  [muscles.triceps],
  require("../../../assets/exercises/mergulho.jpeg")
);
const mesaFlexora = new Exercise(
  "mesa flexora",
  "exercício de musculação",
  [muscles.posterioresDeCoxa],
  require("../../../assets/exercises/mesa-flexora.jpeg")
);
const panturrilhaEmPeBarra = new Exercise(
  "panturrilha em pé com barra",
  "exercício de musculação",
  [muscles.panturrilhas],
  require("../../../assets/exercises/panturrilha-em-pe-barra.jpeg")
);
const panturrilhaEmPeHalter = new Exercise(
  "panturrilha em pé com halteres",
  "exercício de musculação",
  [muscles.panturrilhas],
  require("../../../assets/exercises/panturrilha-em-pe-halter.jpeg")
);
const panturrilhaEmPeMaquina = new Exercise(
  "panturrilha em pé máquina",
  "exercício de musculação",
  [muscles.panturrilhas],
  require("../../../assets/exercises/panturrilha-em-pe-maquina.jpeg")
);
const panturrilhaEmPe = new Exercise(
  "panturrilha em pé",
  "exercício de musculação",
  [muscles.panturrilhas],
  require("../../../assets/exercises/panturrilha-em-pe.jpeg")
);
const panturrilhaSentado = new Exercise(
  "panturrilha sentado",
  "exercício de musculação",
  [muscles.panturrilhas],
  require("../../../assets/exercises/panturrilha-sentado.jpeg")
);
const paralelas = new Exercise(
  "barras paralelas",
  "exercício de musculação",
  [muscles.peitorais, muscles.triceps],
  require("../../../assets/exercises/paralelas.jpeg")
);
const posteriorDeOmbroHalter = new Exercise(
  "posterior de ombro com halteres",
  "exercício de musculação",
  [muscles.deltoidesPosteriores],
  require("../../../assets/exercises/posterior-de-ombro-halter.jpeg")
);
const posteriorDeOmbroHalteresInclinado = new Exercise(
  "posterior de ombro com halteres inclinado",
  "exercício de musculação",
  [muscles.deltoidesPosteriores],
  require("../../../assets/exercises/posterior-de-ombro-halter-inclinado.jpeg")
);
const posteriorDeOmbroMaquina = new Exercise(
  "posterior de ombro máquina",
  "exercício de musculação",
  [muscles.deltoidesPosteriores],
  require("../../../assets/exercises/posterior-de-ombro-maquina.jpeg")
);
const posteriorDeOmbroPolia = new Exercise(
  "posterior de ombro na polia",
  "exercício de musculação",
  [muscles.deltoidesPosteriores],
  require("../../../assets/exercises/posterior-de-ombro-polia-alta.jpeg")
);
const prancha = new Exercise(
  "prancha",
  "exercício de musculação",
  [muscles.deltoidesPosteriores],
  require("../../../assets/exercises/prancha.jpeg")
);

export const exercises = {
  lagPress,
  abdominalBarraFixa,
  abdominalParalelas,
  abdominalPolia,
  abdominal,
  agachamentoBulgaro,
  agachamentoGoblet,
  agachamentoHalter,
  agachamentoLivre,
  agachamentoSmith,
  agachamentoSumo,
  barraFixa,
  bicicleta,
  cadeiraAdutora,
  cadeiraAbdutora,
  cadeiraFlexora,
  cadeiraExtensora,
  corrida,
  crossoverPoliaBaixa,
  crossover,
  cruxifixoInclinadoHalter,
  cruxifixoRetoHalter,
  cruxifixoMaquina,
  desenvolvimentoBarra,
  desenvolvimentoHalter,
  desenvolvimentoMaquina,
  desenvolvimentoSmith,
  elevacaoFrontalBarra,
  elevacaoFrontalHalter,
  elevacaoFrontalHalterSentado,
  elevacaoFrontalPolia,
  elevacaoLateralHalter,
  elevacaoLateralHalterSentado,
  elevacaoLateralMaquina,
  elevacaoLateralPolia,
  elliptica,
  encolhimentoPolia,
  encolhimentoHalter,
  extensaoDeQuadril,
  flexao,
  graviton,
  hack,
  levantamentoTerra,
  mergulho,
  panturrilhaEmPe,
  panturrilhaSentado,
  panturrilhaEmPeBarra,
  panturrilhaEmPeHalter,
  panturrilhaEmPeMaquina, 
  paralelas,
  posteriorDeOmbroHalter,
  posteriorDeOmbroHalteresInclinado,
  posteriorDeOmbroMaquina,
  posteriorDeOmbroPolia,
  prancha
};
