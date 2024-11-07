import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { RouterProvider } from 'react-router-dom';
import router from './routers/router.jsx';
import store from './redux/store'
import { Provider } from 'react-redux'
import Swal from 'sweetalert2'



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>,
)
