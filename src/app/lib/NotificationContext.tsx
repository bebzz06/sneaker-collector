"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface INotificationContext {
  isLoading: boolean;
  showLoading: (message?: string) => void;
  hideLoading: () => void;
  isError: boolean;
  showError: (message?: string) => void;
  hideError: () => void;
}

const NotificationContext = createContext<INotificationContext | undefined>(
  undefined
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

interface INotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<INotificationProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);

  const showLoading = (message?: string) => {
    setIsLoading(true);
    toast.info(message || "Loading...", { autoClose: false });
  };

  const hideLoading = () => {
    setIsLoading(false);
    toast.dismiss();
  };

  const showError = (message?: string) => {
    setIsError(true);
    toast.error(message || "An error occurred");
  };

  const hideError = () => {
    setIsError(false);
    toast.dismiss();
  };

  return (
    <NotificationContext.Provider
      value={{
        isLoading,
        showLoading,
        hideLoading,
        isError,
        showError,
        hideError,
      }}
    >
      {children}
      <ToastContainer />
    </NotificationContext.Provider>
  );
};
