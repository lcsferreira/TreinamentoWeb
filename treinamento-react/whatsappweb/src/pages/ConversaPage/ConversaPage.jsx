import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "./ConversaPage.css"
import Conversa from '../../components/Conversa';
import { getContatoPorId } from "../../services/whatsAppApiService";

function ConversaPage() {
  const { id } = useParams();

  const [contato, setContato] = useState(null);

  useEffect(() => {
    getContatoPorId(id).then((data) => {
      setContato(data);
    })
  }, [id]);

  if (contato === null) {
    return <div>Carregando...</div>
  } else {
    return (
      <div className="conversa">
        <Conversa contato={contato}></Conversa>
      </div>
    );
  }
}

export default ConversaPage;