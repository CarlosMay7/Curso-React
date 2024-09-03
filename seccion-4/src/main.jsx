import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './HelloWorldApp';
import FirstApp from './FirstApp';
// import CounterApp from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <FirstApp title="First App Props" subtitle={'No hay'}/>
        {/* <CounterApp value={7} /> */}
    </React.StrictMode>
)