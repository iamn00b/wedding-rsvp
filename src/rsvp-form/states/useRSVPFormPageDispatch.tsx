import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { RSVPFormPageAction } from './RSVPFormPageState';

function useRSVPFormPageDispatch() {
  return useDispatch<Dispatch<RSVPFormPageAction>>();
}

export default useRSVPFormPageDispatch;
