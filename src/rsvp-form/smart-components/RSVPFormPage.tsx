import React from 'react';
import styled from '@emotion/styled';
import useDimensions from 'react-use-dimensions';
import { animated, useSpring, config } from 'react-spring';

import RSVPScreen from '../presentational-components/RSVPScreen';
import RSVPWelcomeScreen from './RSVPWelcomeScreen';
import RSVPNameQuestionScreen from './RSVPNameQuestionScreen';
import RSVPConfirmationScreen from './RSVPConfirmationScreen';
import RSVPAdditionalGuestQuestionScreen from './RSVPAdditionalGuestQuestionScreen';
import RSVPWishesQuestionScreen from './RSVPWishesQuestionScreen';
import { useSelector } from 'react-redux';
import { RSVPFormPageScreen } from '../states/RSVPFormPageState';
import { AppState } from '../../shared/states/AppState';
import RSVPThankYouScreen from './RSVPThankYouScreen';
import useRSVPFormPageDispatch from '../states/useRSVPFormPageDispatch';
import Button from '../../shared/presentational-components/Button';

const PageWrapper = styled.div`
  margin: 0 auto;
  padding: 0 2em;
  max-width: 800px;
  height: 100vh;
  box-sizing: border-box;
`;

const FormNav = styled(animated.div)`
  position: fixed;
  bottom: 1em;
  right: 1em;
`;

const PrevButton = styled(Button)`
  font-size: 10px;
`;

const FlowerTop = styled('div')<any>`
  position: fixed;
  width: ${props => props.width}px;
  top: 0;
  left: 50%;
  margin-left: -${props => props.width / 2}px;

  & * {
    width: 100%;
  }
`;

const FlowerBottom = styled('div')<any>`
  position: fixed;
  width: ${props => props.width}px;
  bottom: 0;
  left: 50%;
  margin-left: -${props => props.width / 2}px;

  & * {
    width: 100%;
    margin-bottom: -4px;
  }
`;

export default () => {
  const step = useSelector((state: AppState) => state.rsvp.step);
  const willAttend = useSelector((state: AppState) => state.rsvp.willAttend);
  const dispatch = useRSVPFormPageDispatch();

  function setStep(screen: RSVPFormPageScreen) {
    dispatch({ type: 'RSVP_CHANGE_STEP', step: screen });
  }

  function handleNavToPrevStep() {
    if (step === RSVPFormPageScreen.WELCOME_SCREEN) {
      return;
    }

    if (step === RSVPFormPageScreen.WISHES_SCREEN && !willAttend) {
      dispatch({
        type: 'RSVP_CHANGE_STEP',
        step: RSVPFormPageScreen.CONFIRMATION_SCREEN,
      });
      return;
    }

    dispatch({ type: 'RSVP_CHANGE_STEP', step: step - 1 });
  }

  const [pageWrapperRef, pageWrapperSize] = useDimensions();
  const fullWidth = pageWrapperSize.width || 0;
  const fullHeight = pageWrapperSize.height || 0;

  const showNav =
    step !== RSVPFormPageScreen.WELCOME_SCREEN &&
    step !== RSVPFormPageScreen.THANK_YOU_SCREEN;
  const navButtonAnimation = useSpring({
    bottom: showNav ? '1em' : '-10em',
    config: [config.gentle],
  });

  return (
    <>
      <FlowerTop width={(fullWidth * 3) / 5}>
        <img src="/images/flower-top.png" />
      </FlowerTop>

      <FlowerBottom width={(fullWidth * 3) / 4}>
        <img src="/images/flower-bottom.png" />
      </FlowerBottom>

      <PageWrapper ref={pageWrapperRef}>
        <RSVPScreen
          active={step === RSVPFormPageScreen.WELCOME_SCREEN}
          activeHeight={fullHeight}
        >
          <RSVPWelcomeScreen
            onContinue={() => setStep(RSVPFormPageScreen.NAME_SCREEN)}
          />
        </RSVPScreen>

        <RSVPScreen
          active={step === RSVPFormPageScreen.NAME_SCREEN}
          activeHeight={fullHeight}
        >
          <RSVPNameQuestionScreen
            active={step === RSVPFormPageScreen.NAME_SCREEN}
            onContinue={() => setStep(RSVPFormPageScreen.CONFIRMATION_SCREEN)}
          />
        </RSVPScreen>

        <RSVPScreen
          active={step === RSVPFormPageScreen.CONFIRMATION_SCREEN}
          activeHeight={fullHeight}
        >
          <RSVPConfirmationScreen
            onConfirm={() =>
              setStep(RSVPFormPageScreen.ADDITIONAL_GUEST_SCREEN)
            }
            onDeny={() => setStep(RSVPFormPageScreen.WISHES_SCREEN)}
          />
        </RSVPScreen>

        <RSVPScreen
          active={step === RSVPFormPageScreen.ADDITIONAL_GUEST_SCREEN}
          activeHeight={fullHeight}
        >
          <RSVPAdditionalGuestQuestionScreen
            onContinue={() => setStep(RSVPFormPageScreen.WISHES_SCREEN)}
          />
        </RSVPScreen>

        <RSVPScreen
          active={step === RSVPFormPageScreen.WISHES_SCREEN}
          activeHeight={fullHeight}
        >
          <RSVPWishesQuestionScreen
            onContinue={() => setStep(RSVPFormPageScreen.THANK_YOU_SCREEN)}
          />
        </RSVPScreen>

        <RSVPScreen
          active={step === RSVPFormPageScreen.THANK_YOU_SCREEN}
          activeHeight={fullHeight}
        >
          <RSVPThankYouScreen />
        </RSVPScreen>
      </PageWrapper>

      <FormNav style={navButtonAnimation}>
        <PrevButton onClick={handleNavToPrevStep}>Prev</PrevButton>
      </FormNav>
    </>
  );
};
