import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import {Provider} from "react-redux";
import {store,persistor} from "./store.js";
//import {persistGate} from "redux-persist/es/integration/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <provider store={store}>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <persistGate loading={null} persistor={persistor}>
              <App />
          </persistGate>
      </provider>
    </StrictMode>,
)
