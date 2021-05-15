import './App.css';
import PlanLayout from './pages/layout/PlanLayout';
import Welcome from './pages/Welcome';
import {BrowserRouter, Route} from 'react-router-dom';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
          <Route exact path ="/" component={Welcome}></Route>
          <Route exact path ="/invite" component={PhoneConfirmation}></Route>
          <Route exact path ="/code_confirm" component={CodeConfirm}></Route>
          <Route exact path="/allow_notification" component={AllowNotification}></Route>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
