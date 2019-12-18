export enum RSVPFormPageScreen {
  WELCOME_SCREEN = 1,
  NAME_SCREEN,
  CONFIRMATION_SCREEN,
  ADDITIONAL_GUEST_SCREEN,
  WISHES_SCREEN,
  THANK_YOU_SCREEN,
}

export type RSVPFormPageState = {
  step: RSVPFormPageScreen;
  name: string;
  willAttend: boolean | null;
  bringAdditionalGuest: boolean | null;
  wishesAndNotes?: string;
};

const initialState: RSVPFormPageState = {
  step: RSVPFormPageScreen.WELCOME_SCREEN,
  name: '',
  willAttend: null,
  bringAdditionalGuest: null,
};

export type RSVPFormPageAction =
  | { type: 'RSVP_CHANGE_STEP'; step: RSVPFormPageScreen }
  | { type: 'RSVP_CHANGE_NAME'; name: string }
  | { type: 'RSVP_CHANGE_CONFIRMATION'; willAttend: boolean }
  | { type: 'RSVP_CHANGE_ADDITIONAL_GUEST'; bringAdditionalGuest: boolean }
  | { type: 'RSVP_CHANGE_WISHES'; wishesAndNotes?: string }
  | { type: 'RSVP_RESET_FORM' };

export function RSVPFormPageStateReducer(
  state: RSVPFormPageState = initialState,
  action: RSVPFormPageAction
) {
  switch (action.type) {
    case 'RSVP_CHANGE_STEP':
      return { ...state, step: action.step };
    case 'RSVP_CHANGE_NAME':
      return { ...state, name: action.name };
    case 'RSVP_CHANGE_CONFIRMATION':
      return { ...state, willAttend: action.willAttend };
    case 'RSVP_CHANGE_ADDITIONAL_GUEST':
      return { ...state, bringAdditionalGuest: action.bringAdditionalGuest };
    case 'RSVP_CHANGE_WISHES':
      return { ...state, wishesAndNotes: action.wishesAndNotes };
    case 'RSVP_RESET_FORM':
      return initialState;
    default:
      return state;
  }
}
