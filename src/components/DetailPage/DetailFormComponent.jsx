import styled from "styled-components";

function DetailFormComponent() {
  return (
    <StDetailFormWrapper>
      <StDetailInputWrapper>
        <label htmlFor="date">날짜</label>
        <input type="date" name="date" id="date" />
      </StDetailInputWrapper>
      <StDetailInputWrapper>
        <label htmlFor="item">항목</label>
        <input type="text" name="item" id="item" />
      </StDetailInputWrapper>
      <StDetailInputWrapper>
        <label htmlFor="amount">금액</label>
        <input type="text" name="amount" id="amount" />
      </StDetailInputWrapper>
      <StDetailInputWrapper>
        <label htmlFor="content">내용</label>
        <input type="text" name="content" id="content" />
      </StDetailInputWrapper>
      <StDetailButtonWrapper>
        <button type="submit">수정</button>
        <button type="submit">삭제</button>
        <button type="submit">뒤로가기</button>
      </StDetailButtonWrapper>
    </StDetailFormWrapper>
  );
}

const StDetailFormWrapper = styled.form`
  border: 1px solid black;
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
