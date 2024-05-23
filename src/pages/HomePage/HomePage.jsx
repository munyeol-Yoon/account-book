import { useState } from "react";
import FormComponent from "../../components/FormComponent";
import ListComponent from "../../components/ListComponent";
import MonthComponent from "../../components/MonthComponent";
import StatusBarComponent from "../../components/StatusBarComponent";
function HomePage() {
  const [accountBook, setAccountBook] = useState([]);
  const [month, setMonth] = useState("1월");

  const handleGetMonthData = (data, month = 2) => {
    return data.filter((element) => {
      const entryMonth = new Date(element.date).getMonth() + 1;
      return entryMonth === month;
    });
  };

  return (
    <>
      <FormComponent setAccountBook={setAccountBook} />
      <MonthComponent setMonth={setMonth} />
      <StatusBarComponent
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
