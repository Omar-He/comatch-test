import styled from "@emotion/styled";

const StyledMainContainer = styled("div")`
  background: transparent;
  padding: 100px 50px;

  @media (max-width: 450px) {
    padding: 100px 25px;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 30px;
    justify-content: center;
  }

  .loading-section {
    font-size: 24px;
    margin-top: 30px;
    color: purple;
  }
`;

export default StyledMainContainer;
