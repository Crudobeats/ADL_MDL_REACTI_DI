import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardComponents = ({Src, Titulo, Descripcion}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Src} />
      <Card.Body>
        <Card.Title>{Titulo}</Card.Title>
        <Card.Text>
          {Descripcion}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponents;
