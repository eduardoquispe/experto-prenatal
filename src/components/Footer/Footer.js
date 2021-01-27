import { Container } from 'semantic-ui-react';
import './Footer.scss';

const Footer = () => {
  return ( 
    <footer className='Footer'>
      <Container>
        {new Date().getFullYear()} Derechos reservados
      </Container>
    </footer>
  );
}
 
export default Footer;