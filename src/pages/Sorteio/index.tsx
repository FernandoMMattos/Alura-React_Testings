import styles from "./Sorteio.module.scss";

import { useState } from "react";
import Card from "src/components/Card";
import { useListaParticipante } from "src/states/hooks/useListaParticipante";
import { useResultadoSorteio } from "src/states/hooks/useResultadoSorteio";

const Sorteio = () => {
  const participantes = useListaParticipante();
  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");
  const resultado = useResultadoSorteio();
  const sortear = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <Card>
      <section className={styles.sorteio}>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <select
            required
            name="participanteDaVez"
            id="participanteDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={(e) => setParticipanteDaVez(e.target.value)}
          >
            <option>Selecione seu nome</option>
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
          <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
          <button className={styles.botao_sortear}>Sortear!</button>
        </form>
        {amigoSecreto && <p className={styles.resultado} role="alert">{amigoSecreto}</p>}
        <footer className={styles.sorteio}>
          <img
            src="/imagens/aviao.png"
            className="aviao"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
};

export default Sorteio;
