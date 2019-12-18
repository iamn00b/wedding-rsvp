import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

import useRSVPFormPageDispatch from '../states/useRSVPFormPageDispatch';

import RSVPQuestionText from '../presentational-components/RSVPQuestionText';
import RSVPTextInput from '../presentational-components/RSVPTextInput';
import Button from '../../shared/presentational-components/Button';
import { useSpring } from 'react-spring';
import { useSelector } from 'react-redux';
import { AppState } from '../../shared/states/AppState';

export type RSVPNameQuestionScreenProps = {
  active: boolean;
  onContinue: () => any;
};

export default function RSVPNameQuestionScreen(
  props: RSVPNameQuestionScreenProps
) {
  const { active, onContinue } = props;

  // focus to input when screen activated
  const inputRef = useRef(null);
  useEffect(() => {
    if (active && inputRef) {
      inputRef.current.focus();
    }
  }, [active]);

  const [name, setName] = useState('');
  const [errorAnimationState, setErrorAnimationState] = useState(false);
  const nameOnState = useSelector((state: AppState) => state.rsvp.name);
  const dispatch = useRSVPFormPageDispatch();

  useEffect(() => {
    if (nameOnState !== name) {
      setName(nameOnState);
    }
  }, [nameOnState]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleSubmit() {
    if (!name) {
      setErrorAnimationState(!errorAnimationState);
      return;
    }

    dispatch({ type: 'RSVP_CHANGE_NAME', name });
    onContinue();
  }

  function enterKeyPressHandler({ key }: { key: string }) {
    if (key === 'Enter') {
      handleSubmit();
    }
  }

  const { errorAnimation } = useSpring({
    errorAnimation: errorAnimationState ? 1 : 0,
    from: { errorAnimation: 0 },
    config: { mass: 1, friction: 5, tension: 500 },
  });

  return (
    <>
      <label htmlFor="name">
        <RSVPQuestionText>
          Hey there, which one of our lovely friends is this?
        </RSVPQuestionText>
      </label>
      <RSVPTextInput
        id="name"
        ref={inputRef}
        value={name}
        onKeyDown={enterKeyPressHandler}
        onChange={handleChange}
        placeholder="Type your name here..."
        style={{
          marginLeft: errorAnimation.interpolate({
            range: [0, 0.5, 1],
            output: [0, 5, 0],
          }),
        }}
      />
      <Button onClick={handleSubmit}>OK</Button>
    </>
  );
}
