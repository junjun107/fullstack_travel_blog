import { createContext, useState, useEffect, useReducer } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// //create context
export const LogsContext = createContext();

export const LogsContextProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);

  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      fetchLogs();
    }
  }, [user]);

  //get logs from db
  const fetchLogs = async () => {
    const res = await fetch("https://beige-gazelle-gear.cyclic.app/api/logs", {
      headers: { Authorization: `Bearer ${user.token}` },
    });

    const data = await res.json();
    setLogs(data);
  };

  //add a log
  const addLog = async (newLog) => {
    if (!user) {
      return;
    }

    const res = await fetch("https://beige-gazelle-gear.cyclic.app/api/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(newLog),
    });
    const data = await res.json();
    setLogs((prevLogs) => {
      return [data, ...prevLogs];
    });
  };

  // Delete a log
  const deleteLog = async (id) => {
    if (!user) {
      return;
    }
    await fetch(`https://beige-gazelle-gear.cyclic.app/api/logs/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    setLogs(logs.filter((item) => item._id !== id));
  };

  return (
    <LogsContext.Provider
      value={{
        logs,
        addLog,
        deleteLog,
      }}
    >
      {children}
    </LogsContext.Provider>
  );
};
