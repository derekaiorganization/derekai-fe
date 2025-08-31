"use client"
import { createContext, useContext, useState } from "react";

// 1. Define the context type for open state and setter
type AlertDialogContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

// 2. Create the context with default value undefined
const AlertDialogContext = createContext<AlertDialogContextType | undefined>(undefined);

// 3. Provider component to wrap your app and manage dialog state
export function AlertDialogProvider({ children }: { children: React.ReactNode }) {
  // 4. useState to manage whether the dialog is open
  const [open, setOpen] = useState(false);

  // 5. Provide the state and setter to all children
  return (
    <AlertDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
}

// 6. Custom hook to access the context from any component
export function useGlobalAlertDialog() {
  const context = useContext(AlertDialogContext);
  // 7. Throw error if used outside the provider
  if (!context) throw new Error("useGlobalAlertDialog must be used within AlertDialogProvider");
  return context;
}