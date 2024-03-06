import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Config from ".";

const mockNavegacao = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe("a pagina de configuracao", () => {
  test("deve ser renderizada corretamente", () => {
    const { container } = render(
      <RecoilRoot>
        <Config />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
