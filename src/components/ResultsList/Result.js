import { Message } from "semantic-ui-react";

const Result = ({ msg, indicador, estado }) => {
  
  const getColorMessage = (estado) => {
    if(estado === 'verde'){
      return 'green';
    }
    if(estado === 'naranja') {
      return 'yellow';
    }
    if(estado === 'rojo') {
      return 'red'
    }
  }
  
  return ( 
    <Message color={getColorMessage(estado)}>
      <Message.Header>{indicador}</Message.Header>
      {msg}
    </Message>
  );
}
 
export default Result;