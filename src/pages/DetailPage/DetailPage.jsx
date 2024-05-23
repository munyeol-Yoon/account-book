import DetailFormComponent from "../../components/DetailPage/DetailFormComponent";

function DetailPage({ accountBook, setAccountBook }) {
  return (
    <>
      <DetailFormComponent
        accountBook={accountBook}
        setAccountBook={setAccountBook}
      />
    </>
  );
}

export default DetailPage;
