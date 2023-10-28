import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Item({prod}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='h-50' src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {prod.description} 
         
        </Card.Text>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
  )
}

export default Item