import { Message } from "semantic-ui-react";

const Result = ({ msg, indicador }) => {
  return ( 
    <Message color='red'>
      <Message.Header>{indicador}</Message.Header>
      {msg}
    </Message>
  );
}
 
export default Result;