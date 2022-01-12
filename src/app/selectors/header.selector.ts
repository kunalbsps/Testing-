import { headerstate} from '../States/header.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const COUNTER_STATE_NAME = 'counter';

const getCounterState = createFeatureSelector<headerstate>(COUNTER_STATE_NAME);


export const getChannelName = createSelector(getCounterState, (state) => {

  // return state.name;
});