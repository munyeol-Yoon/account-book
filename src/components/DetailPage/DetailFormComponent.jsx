import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function DetailFormComponent({ accountBook, setAccountBook }) {
  const params = useParams();
  const navigate = useNavigate();

  const dateRef = useRef("");

  const [inputs, setInputs] = useState({
    date: "",
    item: "",
    amount: "",
    content: "",
  });

  useEffect(() => {
    handleDisplayInputValue();
  }, [params]);

  useEffect(() => {
    dateRef.current.focus();
  }, []);

  const { date, item, amount, content } = inputs;

  const handleFindOne = (param) => {
    const findItem = accountBook.find(
      (item) => item.accountId === param.accountId
    );

    return findItem;
  };

  const handleDisplayInputValue = () => {
    const findItem = handleFindOne(params);

    setInputs({
      date: findItem.date,
      item: findItem.item,
      amount: findItem.amount,
      content: findItem.content,
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!date || !item || !amount || !content) {
      alert("빈칸은 허용되지 않습니다.");
      return;
    }

    const updatedAccountBook = accountBook.map((i) =>
      i.accountId === params.accountId
        ? { ...i, date, item, amount, content }
        : i
    );

    setAccountBook(updatedAccountBook);
    localStorage.setItem("accountBook", JSON.stringify(updatedAccountBook));
    navigate("/");
  };

  const handleDelete = () => {
    const updatedAccountBook = accountBook.filter(
      (i) => i.accountId !== params.accountId
    );

    setAccountBook(updatedAccountBook);
    localStorage.setItem("accountBook", updatedAccountBook);
    navigate("/");
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <StDetailFormWrapper onSubmit={handleUpdate}>
      <StDetailInputWrapper>
        <label htmlFor="date">날짜</label>
        <input
          type="date"
          name="date"
          id="date"
          ref={dateRef}
          value={date}
          onChange={handleOnChange}
        />
      </StDetailInputWrapper>
      <StDetailInputWrapper>
        <label htmlFor="item">항목</label>
        <input
          type="text"
          name="item"
          id="item"
          value={item}
          onChange={handleOnChange}
        />
      </StDetailInputWrapper>
      <StDetailInputWrapper>
        <label htmlFor="amount">금액</label>
        <input
          type="text"
          name="amount"
          id="amount"
          value={amount}
          onChange={handleOnChange}
        />
      </StDetailInputWrapper>
      <StDetailInputWrapper>
        <label htmlFor="content">내용</label>
        <input
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={handleOnChange}
        />
      </StDetailInputWrapper>
      <StDetailButtonWrapper>
        <button type="submit">수정</button>
        <button type="button" onClick={handleDelete}>
          삭제
        </button>
        <button type="button" onClick={handleGoBack}>
          뒤로가기
        </button>
      </StDetailButtonWrapper>
    </StDetailFormWrapper>
  );
}

const StDetailFormWrapper = styled.form`
  background-color: white;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 16px;
`;

const StDetailInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  & label {
    margin-bottom: 5px;
    font-size: 14px;
    color: rgb(51, 51, 51);
  }

  & input {
    padding: 10px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 4px;
    font-size: 14px;
  }
`;

const StDetailButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export default DetailFormComponent;
