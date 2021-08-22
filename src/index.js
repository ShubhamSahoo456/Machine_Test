import react from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootreducer from './reducer/rootreducer';

const store = createStore(rootreducer);

ReactDom.render(
<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
</Provider>
,document.getElementById('root'))

