import { useState } from "react";
import FormComponent from "../../components/FormComponent";
import ListComponent from "../../components/ListComponent";
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
      <ListComponent accountBook={accountBook} />
    </>
  );
}

export default HomePage;
