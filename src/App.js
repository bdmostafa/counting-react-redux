import './App.css';

import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
    Hello redux
  </Provider>
  );
}

export default App;
