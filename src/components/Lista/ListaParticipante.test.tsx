import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from ".";
import { useListaParticipante } from "src/states/hooks/useListaParticipante";

jest.mock("src/states/hooks/useListaParticipante", () => {
  return {
    useListaParticipante: jest.fn(),
  };
});

describe("uma lista vazia de participantes", () => {
  beforeEach(() => {
    (useListaParticipante as jest.Mock).mockReturnValue([]);
  });
  test("deve ser rendeizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(0);
  });
});

describe("uma lista preenchida de participantes", () => {
  beforeEach(() => {
    (useListaParticipante as jest.Mock).mockReturnValue(participantes);
  });
  const participantes = ["Ana", "Catarina"];
  test("deve ser rendeizada sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");
    expect(itens).toHaveLength(participantes.length);
  });
});
