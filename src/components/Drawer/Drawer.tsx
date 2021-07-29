import React from "react";
import StyledDrawer from "./Drawer.styles";

interface DrawerProps {
  openDrawer?: boolean;
  onClose: () => void;
  children?: JSX.Element;
}

const Drawer: React.FC<DrawerProps> = ({ openDrawer, onClose, children }) => {
  return (
    <StyledDrawer isCollapsed={openDrawer || false}>
      <div className="drawer-body">
        <span className="back-btn" onClick={onClose}>
          Back
        </span>
        {children}
      </div>
    </StyledDrawer>
  );
};

export default Drawer;
