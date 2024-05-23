import { useState } from "react";
import FormComponent from "../../components/HomePage/FormComponent";
import ListComponent from "../../components/HomePage/ListComponent";
import MonthComponent from "../../components/HomePage/MonthComponent";
import StatusBarComponent from "../../components/HomePage/StatusBarComponent";

function HomePage() {
  console.log("HomePage 렌더링");
  const [month, setMonth] = useState("1월");

  const handleGetMonthData = (data, month = 2) => {
    return data.filter((element) => {
      const entryMonth = new Date(element.date).getMonth() + 1;
      return entryMonth === month;
    });
  };

  return (
    <>
      <FormComponent />
      <MonthComponent setMonth={setMonth} />
      <StatusBarComponent
        month={month}
        handleGetMonthData={handleGetMonthData}
      />
      <ListComponent month={month} handleGetMonthData={handleGetMonthData} />
    </>
  );
}

export default HomePage;
