import { useState } from "react";
import FormComponent from "../../components/FormComponent";
function HomePage() {
  const [accountBook, setAccountBook] = useState([]);

  console.log(accountBook);

  return (
    <>
      <FormComponent setAccountBook={setAccountBook} />
    </>
  );
}

export default HomePage;
