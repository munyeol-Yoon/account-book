import { useEffect, useState } from "react";
import FormComponent from "../../components/HomePage/FormComponent";
import ListComponent from "../../components/HomePage/ListComponent";
import MonthComponent from "../../components/HomePage/MonthComponent";
import StatusBarComponent from "../../components/HomePage/StatusBarComponent";
function HomePage({
  accountBook,
  setAccountBook,
  selectedMonth,
  setSelectedMonth,
}) {
  const [month, setMonth] = useState("1월");

  useEffect(() => {
    localStorage.setItem("accountBook", JSON.stringify(accountBook));
  }, [accountBook]);

  const handleGetMonthData = (data, month = 2) => {
    return data.filter((element) => {
      const entryMonth = new Date(element.date).getMonth() + 1;
      return entryMonth === month;
    });
  };

  return (
    <>
      <FormComponent setAccountBook={setAccountBook} />
      <MonthComponent
        setMonth={setMonth}
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <StatusBarComponent
        accountBook={accountBook}
        month={month}
        handleGetMonthData={handleGetMonthData}
      />
      <ListComponent
        accountBook={accountBook}
        month={month}
        handleGetMonthData={handleGetMonthData}
      />
    </>
  );
}

export default HomePage;
