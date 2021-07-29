import styled from "@emotion/styled";

type StyledProps = {
  statusColor: string;
};

const StyledDrawerContent = styled.div<StyledProps>`
  span {
    display: block;
  }
  .status {
    color: ${({ statusColor }) => statusColor};
    font-weight: 700;
    text-transform: capitalize;
  }
  .section-label {
    color: #a5a5a5;
  }

  .drawer-duration,
  .drawer-desc {
    margin-bottom: 20px;
  }

  .consultants {
    padding: 10px 0px;
    .avatar-icon {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      font-size: 14px;
      svg {
        font-size: 40px;
        margin-right: 10px;
      }
      img {
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
        &.hide {
          display: none;
        }
      }
    }
  }
`;

export default StyledDrawerContent;
