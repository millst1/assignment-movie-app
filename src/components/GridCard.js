import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GridCard({imageUrl, title, year}) {
  return (
    <Card style={{ width: '18rem', margin: '16px'}} className="col-4">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body class="d-flex align-items-center flex-column" style={{margin: '16px'}}>
            <Card.Title class="text-center">{title}</Card.Title>
            <Card.Text>{year}</Card.Text>
            <Button class="align-self-end" variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
  );
}

export default GridCard;