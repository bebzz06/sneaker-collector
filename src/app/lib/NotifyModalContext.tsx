"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface INotifyModalContext {
  isLoading: boolean;
  showLoading: (message?: string) => void;
  hideLoading: () => void;
  isError: boolean;
  showError: (message?: string) => void;
  hideError: () => void;
  isModalOpen: boolean;
  toggleModalDisplay: () => void;
}

const NotifyModalContext = createContext<INotifyModalContext | undefined>(
  undefined
);

export const useNotifyModalContext = () => {
  const context = useContext(NotifyModalContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

interface INotifyModalProviderProps {
  children: ReactNode;
}

export const NotifyModalProvider: React.FC<INotifyModalProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const toggleModalDisplay = () => setIsModalOpen(!isModalOpen);
  return (
    <NotifyModalContext.Provider
      value={{
        isLoading,
        showLoading,
        hideLoading,
        isError,
        showError,
        hideError,
        isModalOpen,
        toggleModalDisplay,
      }}
    >
      {children}
      <ToastContainer />
    </NotifyModalContext.Provider>
  );
};
