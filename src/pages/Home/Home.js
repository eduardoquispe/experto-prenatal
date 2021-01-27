import { useEffect, useState } from 'react';
import { Card, Message, Placeholder } from "semantic-ui-react";
import { getAllQuestionnaires } from '../../api/questionnaire';
import ControlCard from "../../components/ControlCard";
import './Home.scss';

const Home = () => {
 
  const [loading, setLoading] = useState(null);
  const [questionnires, setQuestionnaires] = useState([]);

  const handleGetAllQuestionnaires = async () => {
    setLoading(true);
    const data = await getAllQuestionnaires();
    setQuestionnaires(data);
    setLoading(false);
  }

  const showContent = () => {
    if(loading === null || loading) {
      return <ControlCardListPlaceholder />
    } else {
      return <ControlCardList 
        questionnires={questionnires}
      />
    }
  }

  useEffect(() => {
    handleGetAllQuestionnaires()
  }, [])
  
  return ( 
    <div className="Home">
      <h1>Lista de controles</h1>
      {showContent()}
    </div>
  );
}
 
export default Home;

const ControlCardList = ({ questionnires }) => {

  if(!questionnires.length) return (
    <Message 
      info
      content="No hay datos para mostrar."
    />
  ) 

  return (
    <Card.Group className='ControlCardList'>
      {
        questionnires.map((questionnaire, index) => (
          <ControlCard 
            key={index}
            {...questionnaire}
          />
        ))
      }
    </Card.Group>
  );
}

const ControlCardListPlaceholder = () => {
  return (
    <Card.Group className='ControlCardList'>
      {
        [1,2,3,4,5,6,7,8].map((item) => (
          <Card key={item}>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
            <Card.Content>
              <Placeholder>
                <Placeholder.Header>
                  <Placeholder.Line length='very short' />
                  <Placeholder.Line length='medium' />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Card.Content>
          </Card>
        ))
      }
    </Card.Group>
  )
}
