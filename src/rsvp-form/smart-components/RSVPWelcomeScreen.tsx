import React from 'react';
import { config, useTrail } from 'react-spring';
import styled from '@emotion/styled';

import Button from '../../shared/presentational-components/Button';
import RSVPTitle from '../presentational-components/RSVPTitle';
import RSVPDescriptionText from '../presentational-components/RSVPDescriptionText';
import { AppColour } from '../../shared/constants/AppColour';

const Hero = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  & img {
    width: 47%;
    height: 47%;
    max-width: 250px;
  }
`;

const RSVPSecondaryDescriptionText = styled(RSVPDescriptionText)`
  color: ${AppColour.PRIMARY_DIMMED};
`;

const ContinueButton = styled(Button)`
  margin: 0 auto;
  padding: 10px 80px;
  font-size: 24px;

  @media screen and (max-width: 420px) {
    font-size: 16px;
  }
`;

const AddCalendarButton = styled(Button)`
  margin: 0 10px;
  padding: 5px 8px;
  font-size: 12px;
  font-weight: 500;
  background: #858da2;
  text-decoration: none;
  display: inline-block;
`;

export type RSVPWelcomeScreenProps = {
  onContinue: () => any;
};

export default function RSVPWelcomeScreen(props: RSVPWelcomeScreenProps) {
  const { onContinue } = props;

  const [firstTrail, secondTrail, thirdTrail] = useTrail(3, {
    delay: 500,
    opacity: 1,
    top: 0,
    config: config.slow,
    from: { opacity: 0, top: -60 },
  });

  return (
    <>
      <Hero>
        <img src="/images/hero.png" alt="Thirafi & Laila" />
      </Hero>

      <RSVPDescriptionText style={secondTrail}>
        #ThirafiLailaTakeTheLeap
      </RSVPDescriptionText>

      <RSVPTitle style={firstTrail}>
        We're getting married on Sunday, November 24th, 2019
        <a
          target="_blank"
          href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NHVibnZxbjdqbjQ5N3NxcmVqNW9zcHAyaWEganVybmFsZGlkZUBt&tmsrc=jurnaldide%40gmail.com"
        >
          <AddCalendarButton>Add to Calendar</AddCalendarButton>
        </a>
      </RSVPTitle>

      <RSVPDescriptionText style={secondTrail}>
        And we'd love for you to join us there for our special day.{' '}
      </RSVPDescriptionText>

      <RSVPDescriptionText style={secondTrail}>
        See you at{' '}
        <strong>
          Olympic Grand Ballroom, Hotel Olympic Renotel Sentul Bogor.
        </strong>
      </RSVPDescriptionText>

      <RSVPSecondaryDescriptionText style={thirdTrail}>
        Please RSVP before November 16th.
      </RSVPSecondaryDescriptionText>

      <ContinueButton onClick={onContinue}>RSVP</ContinueButton>
    </>
  );
}
