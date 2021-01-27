import { QUESTIONNAIRES } from "../utils/data/constants"
import axios from 'axios';

export const getAllQuestionnaires = () => {  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(QUESTIONNAIRES);
    }, 1000);
  });
}

export const getQuestionnaire = id => {
  const data = QUESTIONNAIRES.find(quizz => quizz.id === id);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
} 

export const getResult = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post('', data);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}
