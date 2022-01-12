import { headerstate} from '../States/header.state';
import { COUNTER_STATE_NAME} from '../selectors/header.selector';
import { counterReducer } from '../Reducers/header.reducer';


export interface AppState {
  [COUNTER_STATE_NAME]: headerstate;
 
}

export const appReducer = {
  [COUNTER_STATE_NAME]:counterReducer,

};
