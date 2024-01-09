import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStore from './components/AddStore/AddStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/leaflet-advertisement">
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/add' element={<AddStore/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;