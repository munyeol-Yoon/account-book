import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import useFormInputs from "../../hooks/useInputs";
import {
  deleteAccount,
  updateAccount,
} from "../../redux/slices/accountBook.slice";

function DetailFormComponent() {
  const accountBook = useSelector((state) => state.accountBook.accountBook);
  const dispatch = useDispatch();

  const { inputs, dateRef, handleOnChange, setInputs } = useFormInputs();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleDisplayInputValue();
  }, [params, accountBook]);

  const { date, item, amount, content } = inputs;

  const handleFindOne = (param) => {
    if (Array.isArray(accountBook)) {
      return accountBook.find(
        (item) => item.accountId.toString() === param.accountId.toString()
      );
    }
    console.log("2" + accountBook);

    return null;
  };

  const handleDisplayInputValue = () => {
    const findItem = handleFindOne(params);
    if (findItem) {
      setInputs({
        date: findItem.date,
        item: findItem.item,
        amount: findItem.amount,
        content: findItem.content,
      });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!date || !item || !amount || !content) {
      alert("빈칸은 허용되지 않습니다.");
      return;
    }

    dispatch(
      updateAccount({
        accountId: params.accountId,
        date,
        item,
        amount,
        content,
      })
    );
    navigate("/");
  };

  const handleDelete = () => {
    const isDelete = confirm("정말로 이 지출 할목을 삭제하시겠습니까?");
    if (!isDelete) return;

    dispatch(deleteAccount(params.accountId));
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
        <StDetailUpdateButton type="submit">수정</StDetailUpdateButton>
        <StDetailDeleteButton type="button" onClick={handleDelete}>
          삭제
        </StDetailDeleteButton>
        <StDetailGoBackButton type="button" onClick={handleGoBack}>
          뒤로가기
        </StDetailGoBackButton>
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
    text-align: left;
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

const StDetailUpdateButton = styled.button`
  padding: 10px 20px;
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const StDetailDeleteButton = styled.button`
  padding: 10px 20px;
  background-color: rgb(255, 77, 77);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const StDetailGoBackButton = styled.button`
  padding: 10px 20px;
  background-color: rgb(108, 117, 125);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default DetailFormComponent;
