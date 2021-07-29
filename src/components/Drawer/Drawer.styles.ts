import styled from "@emotion/styled";

type StyledProps = {
  isCollapsed: boolean;
};

const StyledDrawer = styled.div<StyledProps>`
  position: fixed;
  z-index: 10002;
  top: 50px;
  right: 0;
  height: 100%;
  width: 400px;
  color: #fff;
  display: flex;
  transition: 0.5s ease;
  transform: ${({ isCollapsed }) =>
    isCollapsed ? "translateX(0)" : "translateX(720px)"};

  @media (max-width: 450px) {
    width: 100%;
  }
  .back-btn {
    display: block;
    color: gray;
    text-align: left;
    margin-bottom: 30px;
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
  .drawer-body {
    text-align: left;
    background: #ebedf1;
    height: 100%;
    flex-grow: 1;
    color: black;
    padding: 40px 15px;
  }
`;

export default StyledDrawer;
