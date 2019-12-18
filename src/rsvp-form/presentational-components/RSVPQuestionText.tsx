import { animated } from 'react-spring';
import styled from '@emotion/styled';

const RSVPQuestionText = styled(animated.h2)`
  position: relative;
  font-size: 22px;
  margin-bottom: 1.2em;

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

export default RSVPQuestionText;
