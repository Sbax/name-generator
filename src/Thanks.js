import React from "react";
import styled from "styled-components";

const Container = styled.section`
  line-height: 1.5rem;

  > p + p {
    margin-top: 0.5rem;
  }
`;

const Thanks = () => {
  return (
    <Container>
      <p>
        Le risorse che popolano questa pagina sono fruibili{" "}
        <a href="https://docs.google.com/spreadsheets/d/1cS3qI3wuAMyZaBPVEcO0V9bIBzDRDCUiZteEnt16hQQ/">
          come tabella excel qui
        </a>
        .
      </p>
      <p>
        Per i nomi e l'idea ringrazio il{" "}
        <a href="https://www.facebook.com/groups/611330689648881">
          gruppo ufficiale di Brancalonia
        </a>
        , in particolare Francisco Pettigiani e il suo{" "}
        <a href="https://dismastersden.blogspot.com/2020/04/spaghetti-fantasy-name-generator.html">
          generatore di nomi spaghetti fantasy
        </a>{" "}
        , Lorenzo Ladogana per aver estratto nomi e luoghi dal{" "}
        <a href="https://en.wikipedia.org/wiki/Pentamerone">
          Cunto de li Cunti
        </a>{" "}
        e <a href="mailto:matteo.piraccini@outlook.it">Matteo Piraccini</a> che
        ci ha donato moltissimi nomi romagnoli.
      </p>
      <p>
        Per le ricette medievali ringrazio inoltre il sito{" "}
        <a href="http://www.sguardosulmedioevo.org/">sguardosulmedioevo.org</a>{" "}
        e <a href="http://www.comomedievale.it/">comomedievale.it</a>.
      </p>
      <p>
        Il sito è realizzato da <a href="http://mb.maletta.space/">me</a> per
        chi non vede l'ora di giocare a{" "}
        <a href="https://www.kickstarter.com/projects/acherongames/brancalonia-the-spaghetti-fantasy-rpg">
          Brancalonia
        </a>{" "}
        e chiunque altro. Il codice sorgente è disponibile su{" "}
        <a href="https://github.com/Sbax/name-generator">github</a>.
      </p>

      <p>
        <b>Questo sito raccoglie dati anonimi di navigazione</b>.
      </p>
    </Container>
  );
};

export default Thanks;
