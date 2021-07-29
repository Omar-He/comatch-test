import styled from "@emotion/styled";

const StyledCard = styled.div`
  background: #fff;
  width: 250px;
  border: 1px solid #000;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 15px 20px;

  h2 {
    margin-bottom: 0;
    min-height: 60px;
  }
`;

export default StyledCard;
