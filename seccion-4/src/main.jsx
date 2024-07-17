import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './HelloWorldApp';
import CounterApp from './CounterApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        {/* <FirstApp title="Firt App Props" subtitle={20}/> */}
        <CounterApp value={7} />
    </React.StrictMode>
)