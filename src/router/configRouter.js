import Home from "../pages/Home";
import Questionnaire from "../pages/Questionnaire";

const Routes = [
  {
    exact: true,
    path: '/home',
    component: Home
  },
  {
    exact: true,
    path: '/questionnaire/:id',
    component: Questionnaire
  }
]

export default Routes;