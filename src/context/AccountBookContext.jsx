import { createContext, useContext, useMemo, useState } from "react";

export const AccountBookContext = createContext({});
export const MonthContext = createContext({});

export const AccountBookProvider = ({ children }) => {
  const [accountBook, setAccountBook] = useState(() => {
    const localData = localStorage.getItem("accountBook");
    return localData ? JSON.parse(localData) : [];
  });

  const accountBookValue = useMemo(
    () => ({ accountBook, setAccountBook }),
    [accountBook]
  );

  return (
    <AccountBookContext.Provider value={accountBookValue}>
      {children}
    </AccountBookContext.Provider>
  );
};

export const MonthProvider = ({ children }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  const monthValue = useMemo(
    () => ({ selectedMonth, setSelectedMonth }),
    [selectedMonth]
  );

  return (
    <MonthContext.Provider value={monthValue}>{children}</MonthContext.Provider>
  );
};

export const useAccountBook = () => {
  const context = useContext(AccountBookContext);
  if (!context) {
    throw new Error("context error");
  }
  return context;
};

export const useMonth = () => {
  const context = useContext(MonthContext);
  if (!context) {
    throw new Error("context error");
  }
  return context;
};
