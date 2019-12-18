import React from 'react';

import RSVPQuestionText from '../presentational-components/RSVPQuestionText';
import RSVPCheckbox from '../presentational-components/RSVPCheckbox';
import useRSVPFormPageDispatch from '../states/useRSVPFormPageDispatch';

export type RSVPConfirmationScreenProps = {
  onConfirm: () => any;
  onDeny: () => any;
};

export default function RSVPConfirmationScreen(
  props: RSVPConfirmationScreenProps
) {
  const { onConfirm, onDeny } = props;
  const dispatch = useRSVPFormPageDispatch();

  function handleConfirm() {
    dispatch({ type: 'RSVP_CHANGE_CONFIRMATION', willAttend: true });
    onConfirm();
  }

  function handleDeny() {
    dispatch({ type: 'RSVP_CHANGE_CONFIRMATION', willAttend: false });
    onDeny();
  }

  return (
    <>
      <RSVPQuestionText>Great! So, will you be joining us?</RSVPQuestionText>

      <RSVPCheckbox
        name="rsvp"
        id="rsvp_attend"
        value="rsvp_attend"
        onClick={handleConfirm}
      >
        <strong>Yes!</strong> I’d be delighted to attend
      </RSVPCheckbox>
      <RSVPCheckbox
        name="rsvp"
        id="rsvp_miss"
        value="rsvp_miss"
        onClick={handleDeny}
      >
        <strong>Sorry</strong>, I’m afraid I can’t make it
      </RSVPCheckbox>
    </>
  );
}
