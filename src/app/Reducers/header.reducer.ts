import {createReducer, on } from '@ngrx/store';
import { dynamic } from '../Actions/header.actions';
import { initialState } from '../States/header.state';
// import { initialState } from '../States/header.state'; 



const _counterReducer = createReducer(
 

    initialState,
    on(dynamic, (state,action)=>
    {
        console.log(action.hey)
        return {
       ...state,
       name:action.hey
        }
})
      
)
 
export function counterReducer(state:string |any , action:string | any ) {
        console.log(action)
  return _counterReducer(state, action);
}