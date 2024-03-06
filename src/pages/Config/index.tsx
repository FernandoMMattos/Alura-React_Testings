import Footer from "src/components/Footer";
import Formulario from "src/components/Form";
import ListaParticipantes from "src/components/Lista";
import "../../index.css";

import Card from "src/components/Card";

const Config = () => {
  return (
    <Card>
      <section>
        <h2>Vamos comecar</h2>
        <Formulario />
        <ListaParticipantes />
        <Footer />
      </section>
    </Card>
  );
};

export default Config;
