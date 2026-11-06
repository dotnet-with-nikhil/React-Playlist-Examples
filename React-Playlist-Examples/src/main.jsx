import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
// import { store } from './components/redux-example/store';
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);





// createRoot(document.getElementById("root")).render(
//     <Provider store={store}>
//         <App />
//     </Provider>

// );

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
