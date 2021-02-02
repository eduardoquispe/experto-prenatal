import React, { useEffect, useState } from "react";
import {
  Card,
  Grid,
  Loader,
  Message,
} from "semantic-ui-react";
import { getQuestionnaire } from "../../api/questionnaire";
import { useParams } from "react-router-dom";
import FormQuestionnaire from "../../components/FormQuestionnaire";
import './Questionnaire.scss';
import ResultsList from "../../components/ResultsList";

const ControlQuestionnaire = () => {
  const { id } = useParams();
  const [dataQuestionnaire, setDataQuestionnaire] = useState(null);
  const [loading, setLoading] = useState(null);
  const [responseList, setResponseList] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getQuestionnaire(parseInt(id));
      setDataQuestionnaire(data);
      setLoading(false);
    })();
  }, [id]);

  if (loading === null || loading) return <Loader active inlane="centered" />;
  if (!dataQuestionnaire)
    return <Message info content="No hay datos para mostrar." />;

  return (
    <div className="Questionnaire">
      <h1>{dataQuestionnaire.name}</h1>
      <Grid>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={8}>
            <Card style={{width: "100%"}}>
              <Card.Content header='Formulario de control' />
              <Card.Content>
                <FormQuestionnaire 
                  setResponseList={setResponseList}
                />
              </Card.Content>              
            </Card>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={8}>
            <Card style={{width: "100%"}}>
              <Card.Content header='Resultados' />
              <Card.Content>
                <ResultsList 
                  results={responseList}
                />
              </Card.Content>              
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ControlQuestionnaire;
