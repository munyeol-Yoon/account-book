import { useState } from "react";
import FormComponent from "../../components/FormComponent";
import MonthComponent from "../../components/MonthComponent";
import StatusBarComponent from "../../components/StatusBarComponent";
function HomePage() {
  const [accountBook, setAccountBook] = useState([]);
  const [month, setMonth] = useState("1월");

  return (
    <>
      <FormComponent setAccountBook={setAccountBook} />
      <MonthComponent setMonth={setMonth} />
      <StatusBarComponent month={month} />
    </>
  );
}

export default HomePage;
