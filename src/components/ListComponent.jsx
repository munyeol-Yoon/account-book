import styled from "styled-components";
import fakeData from "../fakeData.json";

function ListComponent({ accountBook }) {
  return (
    <section>
      <StListWrapper>
        {fakeData.map((element) => (
          <StListCardWrapper key={element.accountId}>
            <StListCardSummary>
              <span>{element.date}</span>
              <span>{element.item + "-" + element.description}</span>
            </StListCardSummary>
            <span>{element.amount}</span>
          </StListCardWrapper>
        ))}
      </StListWrapper>
    </section>
  );
}

const StListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StListCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  cursor: pointer;

  & span:last-child {
    font-weight: bold;
    color: rgb(0, 123, 255);
    flex-shrink: 0;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

const StListCardSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default ListComponent;
