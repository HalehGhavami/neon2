import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  //all component of App have access to the object of history in browser
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
