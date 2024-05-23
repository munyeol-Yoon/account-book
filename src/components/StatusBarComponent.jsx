import styled from "styled-components";
import fakeData from "../fakeData.json";

/**
 * 1. 날짜에 맞는 데이터를 가져온다.
 * 2. 데이터들의 통계를 낸다.
 * 3. 통계를 낸 div 엘리먼트를 만든다.
 * 4. 통계에 따라 만든 엘리먼트에 색깔과 width 를 넣어준다.
 */

const colorPalette = [
  "#28d485",
  "#f5f87c",
  "#f36d54",
  "#f05650",
  "#d9d9d9",
  "#6499b0",
];

const handleCalculatePercentage = (part, whole) => {
  return ((part / whole) * 100).toFixed(2) + "%";
};

const handleCalculateMonthAmountTotalSum = (data) => {
  return data.reduce((prev, current) => prev + current.amount, 0);
};

const handleSortedData = (data) => {
  return data.sort((a, b) => b.amount - a.amount);
};

function StatusBarComponent({ month, handleGetMonthData }) {
  const filteredMonthData = handleGetMonthData(fakeData, ~~month[0]);

  const totalAmount = handleCalculateMonthAmountTotalSum(filteredMonthData);

  const sortedData = handleSortedData(filteredMonthData);

  return (
    <section>
      <StStatusFontTitle>
        {month} 총 지출 : {totalAmount} 원
      </StStatusFontTitle>
      <StStatusBarWrapper>
        {sortedData.map((element, index) => (
          <StStatusBarElement
            key={element.accountId}
            width={handleCalculatePercentage(element.amount, totalAmount)}
            color={colorPalette[index % colorPalette.length]}
          />
        ))}
      </StStatusBarWrapper>
      <StStatusBarSummary>
        {sortedData.map((element, index) => (
          <StStatusBarSummaryElement key={element.accountId}>
            <StStatusBarSummaryElementColorBox
              color={colorPalette[index % colorPalette.length]}
            />
            {element.item +
              ": " +
              element.amount +
              "원" +
              "(" +
              handleCalculatePercentage(element.amount, totalAmount) +
              ")"}
          </StStatusBarSummaryElement>
        ))}
      </StStatusBarSummary>
    </section>
  );
}

const StStatusFontTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

const StStatusBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  height: 40px;
  background-color: rgb(233, 236, 239);
  border-radius: 8px;
  overflow: 8px;
`;

const StStatusBarElement = styled.div`
  height: 100%;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width};
`;

const StStatusBarSummary = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const StStatusBarSummaryElement = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: rgb(85, 85, 85);
`;

const StStatusBarSummaryElementColorBox = styled.div`
  width: 20px;
  height: 10px;
  background-color: ${(props) => props.color};
  margin-right: 8px;
`;

export default StatusBarComponent;
