import { BrowserRouter } from 'react-router-dom';
import Theme from './components/UI/Theme';
import Routes from './routes/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Theme>
        <Routes />
      </Theme>
    </BrowserRouter>
  );
};

export default App;
