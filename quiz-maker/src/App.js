import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quiz from './Quiz'
import QuizResult from './QuizResult';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Quiz} />
          <Route path="/quiz-result" component={QuizResult} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
