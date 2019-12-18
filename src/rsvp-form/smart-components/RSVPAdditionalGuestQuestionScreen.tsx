import React from 'react';

import useRSVPFormPageDispatch from '../states/useRSVPFormPageDispatch';

import RSVPQuestionText from '../presentational-components/RSVPQuestionText';
import RSVPCheckbox from '../presentational-components/RSVPCheckbox';

export type RSVPAdditionalGuestQuestionScreenProps = {
  onContinue: () => any;
};

export default function RSVPAdditionalGuestQuestionScreen(
  props: RSVPAdditionalGuestQuestionScreenProps
) {
  const { onContinue } = props;
  const dispatch = useRSVPFormPageDispatch();

  function handleNoAdditionalGuest() {
    dispatch({
      type: 'RSVP_CHANGE_ADDITIONAL_GUEST',
      bringAdditionalGuest: false,
    });
    onContinue();
  }

  function handleBringAdditionalGuest() {
    dispatch({
      type: 'RSVP_CHANGE_ADDITIONAL_GUEST',
      bringAdditionalGuest: true,
    });
    onContinue();
  }
  return (
    <>
      <RSVPQuestionText>Are you bringing a guest?</RSVPQuestionText>

      <RSVPCheckbox
        name="additional_guest"
        id="no_additional_guest"
        value="no_additional_guest"
        onClick={handleNoAdditionalGuest}
      >
        No, I’m coming alone
      </RSVPCheckbox>
      <RSVPCheckbox
        name="additional_guest"
        id="bring_additional_guest"
        value="bring_additional_guest"
        onClick={handleBringAdditionalGuest}
      >
        Yes, I’ll bring my +1
      </RSVPCheckbox>
    </>
  );
}
