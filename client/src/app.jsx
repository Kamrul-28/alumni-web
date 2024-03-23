// import ReactGA from "react-ga4";

import Routes from "routes";
import StoreProvider from "store/provider";
import QueryProvider from "services/query-provider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ReactGA.initialize(process.env.import.meta.env.VITE_GOOGLE_ANLYTICS_TRAKING_ID);

function App() {
  return (
    <QueryProvider>
      <StoreProvider>
        <Routes />
        <ToastContainer theme="colored" hideProgressBar={true} />
      </StoreProvider>
    </QueryProvider>
  );
}

export default App;
