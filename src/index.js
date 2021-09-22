import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TestComponent from './component/TestComponent';
import Timer from './component/Timer';
import TodoApp from './component/TodoApp';
import MarkdownEditor from './component/MarkdownEditor';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

ReactDOM.render(
  // <MarkdownEditor/>,
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  // <Timer/>,
  // <TestComponent name="test"/>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
