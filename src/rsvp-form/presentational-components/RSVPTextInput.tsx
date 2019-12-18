import { animated, useSpring } from 'react-spring';
import styled from '@emotion/styled';
import { AppColour } from '../../shared/constants/AppColour';

const RSVPTextInput = styled(animated.input)`
  display: block;
  border: none;
  background: none;
  width: 85%;
  line-height: 1.75em;
  font-size: 28px;
  font-family: inherit;
  margin-bottom: 0.5em;
  color: ${AppColour.SECONDARY};

  @media screen and (max-width: 420px) {
    font-size: 22px;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    display: block;
    padding: 5px 0;
    color: ${AppColour.SECONDARY};
    border-bottom: 1px solid ${AppColour.SECONDARY};
    opacity: 0.35;
  }
`;

export default RSVPTextInput;
