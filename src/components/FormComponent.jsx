import styled from "styled-components";

function FormComponent() {
  return (
    <StFormWrapper>
      <StForm>
        <StInputDiv>
          <label htmlFor="date">날짜</label>
          <input type="date" name="date" id="date" />
        </StInputDiv>
        <StInputDiv>
          <label htmlFor="item">항목</label>
          <input type="text" name="item" id="item" />
        </StInputDiv>
        <StInputDiv>
          <label htmlFor="amount">금액</label>
          <input type="text" name="amount" id="amount" />
        </StInputDiv>
        <StInputDiv>
          <label htmlFor="content">내용</label>
          <input type="text" name="content" id="content" />
        </StInputDiv>
        <button type="submit">저장</button>
      </StForm>
    </StFormWrapper>
  );
}

const StFormWrapper = styled.section`
  border: 1px solid black;
  width: 100%;
  border-radius: 16px;
  padding: 20px;
`;

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
