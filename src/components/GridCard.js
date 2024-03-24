import Card from 'react-bootstrap/Card';

function GridCard({imageUrl, title, year}) {
  return (
    <Card style={{ width: '18rem', margin: '16px', backgroundColor:"#298F85"}} className="col-4 d-flex align-items-center flex-column">
        <Card.Img variant="top" src={imageUrl} style={{margin: '16px'}} />
        <Card.Body className="d-flex align-items-center flex-column" style={{margin: '16px'}}>
            <Card.Title className="text-center">{title}</Card.Title>
            <Card.Text>{year}</Card.Text>
        </Card.Body>
    </Card>
  );
}

export default GridCard;