import { LogsContext } from "../context/LogsContext";
import { useContext } from "react";

export const useLogsContext = () => {
  const context = useContext(LogsContext);

  if (!context) {
    throw Error("useLogContext must be used inside an LogsContextProvider");
  }
  return context;
};
