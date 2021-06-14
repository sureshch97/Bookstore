import {combineReducers} from 'redux'
import BookReducers from './bookreducers';
import contactReducers from './contactreducers'
import alertReducers from './alertreducer'



export default combineReducers({
    book:BookReducers,
    contact:contactReducers,
    alert:alertReducers
    
});