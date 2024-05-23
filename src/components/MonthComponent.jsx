import styled from "styled-components";

function MonthComponent() {
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  return (
    <section>
      <StMonthWrapper>
        {months.map((month, index) => (
          <StMonthButton key={index}>{month}</StMonthButton>
        ))}
      </StMonthWrapper>
    </section>
  );
}

const StMonthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const StMonthButton = styled.button`
  text-align: center;
  font-family: Pretendard, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: black;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #f6f7fa;

  &:hover {
    color: #fff;
    background-color: #2ec4b6;
  }
`;

export default MonthComponent;
