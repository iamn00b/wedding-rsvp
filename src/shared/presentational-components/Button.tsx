import styled from '@emotion/styled';
import { AppColour } from '../constants/AppColour';

const Button = styled.button`
  display: block;
  font-size: 16px;
  background: #293045;
  padding: 0.5em 1em;
  border-radius: 5px;
  color: ${AppColour.PRIMARY_LIGHT};
  font-weight: 700;
  cursor: pointer;

  /* reset */
  border: none;
  margin: 0;
  width: auto;
  overflow: visible;
  font-family: inherit;
  line-height: normal;
  text-align: inherit;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  &:hover {
    opacity: 0.85;
  }
`;

export default Button;
