import { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

function FormComponent({ setAccountBook }) {
  const [inputs, setInputs] = useState({
    date: "",
    item: "",
    amount: "",
    content: "",
  });

  const { date, item, amount, content } = inputs;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!date || !item || !amount || !content) {
      alert("빈칸은 허용되지 않습니다.");
      return;
    }

    const newAccountBook = {
      accountId: uuid(),
      date,
      item,
      amount,
      content,
    };

    setAccountBook((prevAccountBook) => [...prevAccountBook, newAccountBook]);
    setInputs({
      date: "",
      item: "",
      amount: "",
      content: "",
    });
  };

  return (
    <section>
      <StForm onSubmit={handleOnSubmit}>
        <StInputDiv>
          <label htmlFor="date">날짜</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handleOnChange}
          />
        </StInputDiv>
        <StInputDiv>
          <label htmlFor="item">항목</label>
          <input
            type="text"
            name="item"
            id="item"
            value={item}
            onChange={handleOnChange}
          />
        </StInputDiv>
        <StInputDiv>
          <label htmlFor="amount">금액</label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleOnChange}
          />
        </StInputDiv>
        <StInputDiv>
          <label htmlFor="content">내용</label>
          <input
            type="text"
            name="content"
            id="content"
            value={content}
            onChange={handleOnChange}
          />
        </StInputDiv>
        <button type="submit">저장</button>
      </StForm>
    </section>
  );
}

const StForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;

const StInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
  & > label {
    margin-bottom: 5px;
    font-size: 14px;
    color: rgb(51, 51, 51);
    text-align: left;
  }
`;

export default FormComponent;
