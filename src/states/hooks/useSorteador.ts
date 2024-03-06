import { useSetRecoilState } from "recoil";
import { realizarSorteio } from "../helpers/realizarSorteio";
import { useListaParticipante } from "./useListaParticipante";
import { resultadoDoAmigoSecreto } from "../atom";

export const useSorteador = () => {
  const participantes = useListaParticipante();
  const setResultado = useSetRecoilState(resultadoDoAmigoSecreto);
  return () => {
    const resultado = realizarSorteio(participantes);
    setResultado(resultado);
  };
};
