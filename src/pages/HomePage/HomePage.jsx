import { useState } from "react";
import FormComponent from "../../components/FormComponent";
import MonthComponent from "../../components/MonthComponent";
function HomePage() {
  const [accountBook, setAccountBook] = useState([]);

  console.log(accountBook);

  return (
    <>
      <FormComponent setAccountBook={setAccountBook} />
      <MonthComponent />
    </>
  );
}

export default HomePage;
