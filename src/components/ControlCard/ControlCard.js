import { Link } from 'react-router-dom';
import { Card, Image, Button } from 'semantic-ui-react';

const ControlCard = ({ name, url, img, body }) => {
  return ( 
    <Card>
      <Image src={img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>Pre-natal</span>
        </Card.Meta>
        <Card.Description>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={url}>
          <Button color='primary'>
            Ir a cuestionario
          </Button>
        </Link>
      </Card.Content>
    </Card>
  );
}
 
export default ControlCard;