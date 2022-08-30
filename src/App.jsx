import './App.css';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Landing from './pages/Landing';
import Reading from './pages/Reading';
import ReadingFlow from './components/ReadingFlow';
import readingConfig from './configs/reading.config';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="reading" element={<Reading />}>
          <Route
            path="gecko"
            element={
              <ReadingFlow
                pages={readingConfig.gecko.pages}
                cutOff={readingConfig.gecko.cutOff}
                questions={readingConfig.gecko.questions}
              />
            }
          />
          <Route
            path="ant"
            element={
              <ReadingFlow
                pages={readingConfig.ant.pages}
                cutOff={readingConfig.ant.cutOff}
                questions={readingConfig.ant.questions}
              />
            }
          />
        </Route>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
