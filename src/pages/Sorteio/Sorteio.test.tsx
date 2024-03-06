import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Sorteio from ".";
import { useListaParticipante } from "src/states/hooks/useListaParticipante";
import { useResultadoSorteio } from "src/states/hooks/useResultadoSorteio";

jest.mock("src/states/hooks/useListaParticipante", () => {
  return {
    useListaParticipante: jest.fn(),
  };
});
jest.mock("src/states/hooks/useResultadoSorteio", () => {
  return {
    useResultadoSorteio: jest.fn(),
  };
});

describe("na pagina de sorteio", () => {
  const participantes = ["Ana", "Catarina", "Josefina"];

  const resultado = new Map([
    ["Ana", "Jorel"],
    ["Jorel", "Catarina"],
    ["Catarina", "Jorel"],
  ]);

  beforeEach(() => {
    (useListaParticipante as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  });
  test("todos os participantes podem exibir o seu amigo secreto", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const opcoes = screen.queryAllByRole("option");
    expect(opcoes).toHaveLength(participantes.length + 1);
  });

  test("o amigo secreto eh exibido quando solicitado", () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: { value: participantes[0] },
    });

    const botao = screen.getByRole("button");
    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole("alert");
    expect(amigoSecreto).toBeInTheDocument();
  });
});
