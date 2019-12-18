import axios from 'axios';

interface ValidFormPayload {
  name: string;
  attendance: boolean;
  plusone: boolean;
  wishes: string;
}

export function rsvpSubmitForm(payload: ValidFormPayload) {
  return axios.post('/api/send-rsvp', payload);
}
