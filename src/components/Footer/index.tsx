import { useListaParticipante } from "src/states/hooks/useListaParticipante";
import styles from "./Footer.module.scss";
import { useNavigate } from "react-router-dom";
import { useSorteador } from "src/states/hooks/useSorteador";

const Footer = () => {
  const participantes = useListaParticipante();
  const navegarPara = useNavigate();
  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara("/sorteio");
  };

  return (
    <footer className={styles.rodape_configuracoes}>
      <button
        disabled={participantes.length < 3}
        onClick={iniciar}
        className={styles.botao}
      >
        Iniciar Brincadeira
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};

export default Footer;
