import { animated } from 'react-spring';
import styled from '@emotion/styled';

const RSVPTitle = styled(animated.h1)`
  text-align: center;
  position: relative;
  font-size: 24px;
  line-height: 1.45em;
  margin-bottom: 2em;

  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

export default RSVPTitle;
