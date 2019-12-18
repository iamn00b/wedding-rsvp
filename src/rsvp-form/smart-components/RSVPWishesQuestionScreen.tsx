import React, { ChangeEvent, useState, useEffect } from 'react';

import RSVPQuestionText from '../presentational-components/RSVPQuestionText';
import RSVPTextArea from '../presentational-components/RSVPTextArea';
import Button from '../../shared/presentational-components/Button';
import { useSelector } from 'react-redux';
import { AppState } from '../../shared/states/AppState';
import { rsvpSubmitForm } from '../services/RSVPServices';
import useRSVPFormPageDispatch from '../states/useRSVPFormPageDispatch';

export type RSVPNameQuestionScreenProps = {
  onContinue: () => any;
};

export default function RSVPNameQuestionScreen(
  props: RSVPNameQuestionScreenProps
) {
  const { onContinue } = props;
  const [wishesAndNotes, setWishesAndNotes] = useState('');
  const rsvpForm = useSelector((state: AppState) => state.rsvp);
  const dispatch = useRSVPFormPageDispatch();

  useEffect(() => {
    if (rsvpForm.wishesAndNotes !== wishesAndNotes) {
      setWishesAndNotes(rsvpForm.wishesAndNotes || '');
    }
  }, [rsvpForm.wishesAndNotes]);

  const handleSubmitForm = () => {
    dispatch({ type: 'RSVP_CHANGE_WISHES', wishesAndNotes });

    const { name, willAttend, bringAdditionalGuest } = rsvpForm;
    rsvpSubmitForm({
      name,
      attendance: willAttend,
      plusone: bringAdditionalGuest,
      wishes: wishesAndNotes,
    });
    onContinue();
  };

  return (
    <>
      <label htmlFor="name">
        <RSVPQuestionText>Wishes & Notes 😀</RSVPQuestionText>
      </label>
      <RSVPTextArea
        id="name"
        placeholder="Anything to us?"
        value={wishesAndNotes}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setWishesAndNotes(e.target.value)
        }
      />
      <Button onClick={handleSubmitForm}>OK</Button>
    </>
  );
}
