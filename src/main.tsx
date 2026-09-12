import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Slide, ToastContainer} from 'react-toastify'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="bottom-right"
      autoClose={2400}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
      className="z-9999 bottom-3! left-6! right-2! w-auto! sm:bottom-4! sm:left-auto! sm:right-4!"
      toastClassName="mx-2 mb-2!"
    />
  </StrictMode>,
);
