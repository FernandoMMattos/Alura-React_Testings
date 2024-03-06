import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from ".";
import { useListaParticipante } from "src/states/hooks/useListaParticipante";

jest.mock("src/states/hooks/useListaParticipante", () => {
  return {
    useListaParticipante: jest.fn(),
  };
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});
jest.mock("../../states/hooks/useSorteador", () => {
  return {
    useSorteador: () => mockSorteio,
  };
});

describe("quando nao existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaParticipante as jest.Mock).mockReturnValue([]);
  });
  test("a brincadeira nao pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    expect(botao).toBeDisabled();
  });
});

describe("quando existem participantes suficientes", () => {
  beforeEach(() => {
    (useListaParticipante as jest.Mock).mockReturnValue([
      "Ana",
      "Catarina",
      "Josefina",
    ]);
  });
  test("a brincadeira pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const botao = screen.getByRole("button");
    expect(botao).not.toBeDisabled();
  });
  test("a brincadeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );
    const botao = screen.getByRole("button");
    fireEvent.click(botao);
    expect(mockNavegacao).toHaveBeenCalledTimes(1);
    expect(mockNavegacao).toHaveBeenCalledWith("/sorteio");
    expect(mockSorteio).toHaveBeenCalledTimes(1);
  });
});
