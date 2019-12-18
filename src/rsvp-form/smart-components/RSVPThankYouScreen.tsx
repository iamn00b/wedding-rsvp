import React from 'react';
import { config, useTrail } from 'react-spring';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import Button from '../../shared/presentational-components/Button';
import RSVPTitle from '../presentational-components/RSVPTitle';
import RSVPDescriptionText from '../presentational-components/RSVPDescriptionText';
import { AppState } from '../../shared/states/AppState';
import useRSVPFormPageDispatch from '../states/useRSVPFormPageDispatch';

const ContinueButton = styled(Button)`
  margin: 10px auto;
`;

export type RSVPThankYouScreenProps = {};

export default function RSVPThankYouScreen(props: RSVPThankYouScreenProps) {
  const isGuestConfirmAttendance = useSelector(
    (state: AppState) => state.rsvp.willAttend
  );
  const dispatch = useRSVPFormPageDispatch();

  const attendContent = {
    title: "That's really helpful, thanks! We can't wait to see you!",
    description:
      'This is the biggest day of our lives, and we look forward to sharing it with you.',
  };
  const noAttendContent = {
    title:
      "We're sorry to hear you can't make it but thank you for the wishes! :)",
    description: `We'll be sharing the great day with our friends, 
      family, and loved ones through social media.`,
  };
  const content = isGuestConfirmAttendance ? attendContent : noAttendContent;

  const handleBackToHome = () => {
    dispatch({ type: 'RSVP_RESET_FORM' });
  };

  const [firstTrail, secondTrail] = useTrail(2, {
    opacity: 1,
    top: '0%',
    config: config.slow,
    from: { opacity: 0, top: '-5%' },
  });

  return (
    <>
      <RSVPTitle style={firstTrail}>{content.title}</RSVPTitle>

      <RSVPDescriptionText style={secondTrail}>
        {content.description}
      </RSVPDescriptionText>

      {isGuestConfirmAttendance && (
        <a
          style={{ textDecoration: 'none' }}
          target="_blank"
          href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NHVibnZxbjdqbjQ5N3NxcmVqNW9zcHAyaWEganVybmFsZGlkZUBt&tmsrc=jurnaldide%40gmail.com"
        >
          <ContinueButton>Add to Calendar</ContinueButton>
        </a>
      )}

      <ContinueButton onClick={handleBackToHome}>Back to Top</ContinueButton>
    </>
  );
}
