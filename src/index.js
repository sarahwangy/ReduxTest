import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />

    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 监测 redux中状态的改变，自己动手render。可以写在最外层，或者是当前使用的按个UI 中。（如果只有一个组件，没有container的情况下）
// 当用react -redux ， 可以不用这个subscribe，既可以render 状态
// store.subscribe(() =>{
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// })