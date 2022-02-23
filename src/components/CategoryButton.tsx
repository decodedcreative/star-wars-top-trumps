import { MouseEventHandler } from "react";
import styled from "styled-components";

const StyledCategoryButton = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  background-color: #ffc625;
  border: 0;
  margin-top: 12px;
  margin-bottom: 12px;
  transition: all 0.2s ease-in-out;

  &:not([disabled]) {
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: #000000;
      color: #ffffff;
    }

    &:focus {
      outline: 2px solid #ffc625;
    }
  }
`;

interface CategoryButtonProps {
  label?: string;
  children?: string | number;
  disabled?: boolean;
  onClick?: MouseEventHandler;
}

const CategoryButton = ({
  children,
  disabled,
  label,
  onClick,
}: CategoryButtonProps) => (
  <StyledCategoryButton
    className="card__category"
    disabled={disabled}
    onClick={onClick}
  >
    <span>{label}</span>
    <span>{children}</span>
  </StyledCategoryButton>
);

export default CategoryButton;
