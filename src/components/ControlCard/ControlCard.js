import { Link } from 'react-router-dom';
import { Card, Image, Button } from 'semantic-ui-react';

const ControlCard = ({ name, url, img }) => {
  return ( 
    <Card>
      <Image src={img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
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