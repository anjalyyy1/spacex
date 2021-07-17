import Header from 'components/header';
import MenuBar from 'components/menu';
import Dashboard from 'pages/dashboard';
import { AppWrapper } from 'styles';

function App() {
  return (
    <div className="App">
      <Header />
      <AppWrapper>
        <MenuBar />
        <Dashboard />
      </AppWrapper>
    </div>
  );
}

export default App;
