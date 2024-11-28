import { useState } from "react";
import "./style.css";
import Titulo from "../Titulo/Titulo";
import { editarPst, removerPst } from "../../firebase/firestore";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Post(props) {
  const [curtidas, setCurtidas] = useState(0);
  const [descurtidas, setDescurtidas] = useState(0);

  async function removerPost() {
    await removerPst(props.id);
    props.buscarPosts();
  }

  async function editarPost() {
    const titulo = window.prompt("Digite o título", props.titulo);
    if (titulo) {
      await editarPst(props.id, { titulo });
      props.buscarPosts();
    }
  }

  function adicionarCurtida() {
    setCurtidas(curtidas + 1);
  }

  return (
    <Card className="mb-3">
      <Card.Header>
        <Titulo>{props.titulo}</Titulo>
      </Card.Header>
      <Card.Body>
        <Card.Img variant="top" src={props.imagem} alt="Publicação" style={{ maxWidth: "400px" }} />
        <Card.Text className="mt-3">{props.conteudo}</Card.Text>
        <Card.Text>
          <small>Autor: {props.autor}</small>
        </Card.Text>

        <Button variant="primary" onClick={adicionarCurtida} className="me-2">
          Curtidas: {curtidas}
        </Button>
        <Button
          variant="secondary"
          onClick={() => setDescurtidas(descurtidas + 1)}
          className="me-2"
        >
          Descurtidas: {descurtidas}
        </Button>
        <Button variant="info" onClick={() => window.alert(props.conteudo)} className="me-2">
          Detalhes
        </Button>
        <Button variant="danger" onClick={removerPost} className="me-2">
          Excluir
        </Button>
        <Button variant="warning" onClick={editarPost}>
          Editar
        </Button>

        {curtidas > 10 && <Card.Text className="mt-3 text-success">Post Popular!</Card.Text>}
      </Card.Body>
    </Card>
  );
}

export default Post;
