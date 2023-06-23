import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NoticiaCard from NoticiaCards.js;

function NoticiaCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='images/Anyo_nuevo_chino.jpeg' />
      <Card.Body>
        <Card.Title>Cabalgata año nuevo chino 2023</Card.Title>
        <Card.Text>
          Cabalgata año nuevo chino 2023
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default NoticiaCard;