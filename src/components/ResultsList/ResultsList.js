import { Message } from 'semantic-ui-react';
import Result from './Result';

const ResultsList = ({ results = [] }) => {
  return (
    <>
      {
        results.length > 0 ? (
          results.map((result, index) => (
            <Result key={index} {...result} />
          ))
        ) : (
          <Message info content="No hay resultados para mostrar." />
        )
      }
    </>
  );
}
 
export default ResultsList;