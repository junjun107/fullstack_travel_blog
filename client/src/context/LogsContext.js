import { createContext, useState, useEffect, useReducer } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// //create context
export const LogsContext = createContext();

// export const logsReducer = (state, action) => {

//   switch (action.type) {
//     case "GET_LOGS":
//       return {
//         logs: action.payload,
//       };
//     case "ADD_Log":
//       return {
//         logs: [action.payload, ...state.logs],
//       };

//     default:
//       return state;
//   }
// };

export const LogsContextProvider = ({ children }) => {
  //   const [state, dispatch] = useReducer(logsReducer, { logs: null });

  const [logs, setLogs] = useState([]);
  const [logEdit, setLogEdit] = useState({
    entry: {},
    edit: false,
  });
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      fetchLogs();
    }
  }, [user]);

  //get logs from db
  const fetchLogs = async () => {
    const res = await fetch("http://localhost:5001/api/logs", {
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

    const res = await fetch(
      `http://localhost:5001/api/logs?email=${user.email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(newLog),
      }
    );
    const data = await res.json();
    setLogs((prevLogs) => {
      return [data, ...prevLogs];
    });
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
    if (!user) {
      return;
    }
    await fetch(`/api/logs/${id}`, { method: "DELETE" });
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
