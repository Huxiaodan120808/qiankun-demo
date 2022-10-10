import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root'));
function render() {
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
    // ReactDOM.render(
    //     <React.StrictMode>
    //         <App />
    //     </React.StrictMode>,
    //     document.getElementById('root')
    // );
}
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap(props) {
    console.log('bootstrap:', props);
}

export async function mount(props) {
    console.log('mount:', props);
    render();
}

export async function unmount(props) {
    console.log('unmount:', props);
    // 卸载节点
    // ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    root.unmount();
}
