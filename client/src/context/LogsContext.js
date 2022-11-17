import { createContext, useState, useEffect } from "react";

//create context
export const LogsContext = createContext();

export const LogsContextProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);
  // const [logEdit, setLogEdit] = useState({
  //   entry: {},
  //   edit: false,
  // });

  const API_URL = "http://localhost:5000";

  useEffect(() => {
    fetchLogs();
  }, []);

  //get logs from db
  const fetchLogs = async () => {
    const res = await fetch(`${API_URL}/api/logs`);
    const data = await res.json();
    setLogs(data);
  };

  //add a log
  const addLog = async (newLog) => {
    const res = await fetch(`${API_URL}/api/logs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLog),
    });
    const data = await res.json();
    setLogs([data, ...logs]);
  };

  // Edit a log
  // const editLog = async (entry) => {
  //   setLogEdit({
  //     entry,
  //     edit: true,
  //   });
  // };

  // Delete a log
  const deleteLog = async (id) => {
    await fetch(`${API_URL}/api/logs/${id}`, { method: "DELETE" });
    setLogs(logs.filter((item) => item._id !== id));
  };

  return (
    <LogsContext.Provider
      value={{
        logs,
        addLog,
        deleteLog, //to form
      }}
    >
      {children}
    </LogsContext.Provider>
  );
};
