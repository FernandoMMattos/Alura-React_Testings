import { useRef, useState } from "react";
import styles from "./Form.module.scss";
import { useAdicionarParticipante } from "src/states/hooks/useAdicionarParticipante";
import { useMensagemErro } from "src/states/hooks/useMensagemErro";

const Formulario = () => {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemErro = useMensagemErro();

  const adicionarParticipante = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adicionarNaLista(nome);
    setNome("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={adicionarParticipante}>
      <div className={styles.grupo_input_btn}>
        <input
          ref={inputRef}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!nome}>Adicionar</button>
      </div>
      {mensagemErro && (
        <p className={styles.alerta} role="alert">
          {mensagemErro}
        </p>
      )}
    </form>
  );
};

export default Formulario;
