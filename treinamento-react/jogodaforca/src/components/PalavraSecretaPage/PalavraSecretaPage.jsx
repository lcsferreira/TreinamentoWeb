import React from 'react';
import "./PalavraSecretaPage.css";
import useIsPlaying from '../../services/IsPlaying/useIsPlaying';

function PalavraSecretaPage() {
  const { jogando } = useIsPlaying();

  return (
    <div className="secret-word-menu">
      {jogando}
    </div>
  );
}

export default PalavraSecretaPage;