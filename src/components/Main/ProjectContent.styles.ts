import styled from "@emotion/styled";

type StyledProps = {
  statusColor: string;
};

const StyledProjectContent = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  .status {
    color: ${({ statusColor }) => statusColor};
    font-weight: 700;
    text-transform: capitalize;
  }

  .date-range {
    margin-bottom: 20px;
  }
  .description {
    margin-bottom: 10px;
    &.long {
      text-align: left;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  button {
    background: #e9dfeb;
    color: purple;
    border: 1px solid purple;
    border-radius: 8px;
    align-self: flex-end;
    padding: 6px 24px;
    font-size: 12px;
    cursor: pointer;
    &:hover {
      background: purple;
      color: #fff;
    }
    &:active {
      background: #590259;
    }
  }
`;

export default StyledProjectContent;
