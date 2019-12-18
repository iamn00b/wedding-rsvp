import { animated } from 'react-spring';
import styled from '@emotion/styled';

const RSVPDescriptionText = styled(animated.p)`
  text-align: center;
  position: relative;
  font-style: italic;
  font-size: 18px;

  @media (max-width: 420px) {
    font-size: 14px;
  }
`;

export default RSVPDescriptionText;
