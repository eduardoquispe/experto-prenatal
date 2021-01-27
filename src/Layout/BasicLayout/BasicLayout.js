import { Container } from "semantic-ui-react";
import Header from "../../components/Header"
import './BasicLayout.scss';

const BasicLayout = props => {
  
  const { children } = props;
  
  return ( 
    <div className="BasicLayout">
      <Header />
      <div className="wrapper-container">
        <Container>
          <main className='main'>
            {children}
          </main>
        </Container>
      </div>
    </div>
  );
}
 
export default BasicLayout;