import { createContext, useReducer } from "react";

//create context
export const LogsContext = createContext();

// reducer function
export const logsReducer = (state, action) => {
  switch (action.type) {
    case "GET_LOGS":
      return {
        logs: action.payload,
      };

    case "CREATE_LOG":
      return {
        logs: [action.payload, ...state.logs],
      };

    default:
      return state;
  }
};

export const LogsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(logsReducer, {
    logs: null,
  });
  return (
    <LogsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LogsContext.Provider>
  );
};
