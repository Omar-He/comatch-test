import React from "react";
import StyledCard from "./Card.styles";

interface CardProps {
  title: string;
  innerRef?: (node: HTMLHeadingElement) => void;
}

const Card: React.FC<CardProps> = ({ title, innerRef, children }) => {
  return (
    <StyledCard>
      {title && <h2 ref={innerRef}>{title}</h2>}
      {children}
    </StyledCard>
  );
};

export default Card;
