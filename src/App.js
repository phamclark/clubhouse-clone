import './App.css';
import PlanLayout from './pages/layout/PlanLayout';
import Welcome from './pages/Welcome';
import {BrowserRouter, Route} from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
          <Route exact path ="/" component={Welcome}></Route>
          <Route exact path ="/invite" component={PhoneConfirmation}></Route>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
