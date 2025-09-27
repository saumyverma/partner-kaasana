"use client";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { LoaderProvider } from "@/context/LoaderContext";

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
           <LoaderProvider>
        {children}
         <ToastContainer position="top-right" autoClose={3000} />
         </LoaderProvider>
      </PersistGate>
    </Provider>
  );
}
