import React, { ReactNode } from 'react';
import { animated, useSpring, config } from 'react-spring';
import styled from '@emotion/styled';
import VerticalCenter from '../../shared/presentational-components/VerticalCenter';

const Root = styled(animated.div)`
  overflow: hidden;
`;

export type RSVPScreenProps = {
  active: boolean;
  activeHeight: number;
  children: ReactNode;
};

export default function RSVPScreen(props: RSVPScreenProps) {
  const { children, active, activeHeight = 0 } = props;

  const animationProps = useSpring({
    height: active ? activeHeight : 0,
    opacity: active ? 1 : 0,
    config: [config.slow],
  });

  return (
    <Root style={animationProps}>
      <VerticalCenter>{children}</VerticalCenter>
    </Root>
  );
}
