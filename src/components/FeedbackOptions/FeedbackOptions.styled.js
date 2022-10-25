import { default as styled } from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.theme.colors.white};
  border: 0;
  border-radius: .5rem;
  box-sizing: border-box;
  color: ${props => props.theme.colors.black};
  font-family: "Roboto",sans-serif;
  font-size: .875rem;
  font-weight: 500;
  line-height: 1.25rem;
  padding: .5rem 1rem;
  text-align: center;
  text-decoration: none ${props => props.theme.colors.textDecorationColor} solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    background-color: ${props => props.theme.colors.secondaryBgc};
  }
  &:focus-visible {
    box-shadow: none;
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

export const FeedbackToolbar = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Capitalized = styled.span`
  text-transform: capitalize;
`;
