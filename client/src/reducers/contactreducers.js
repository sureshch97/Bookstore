import {
    ADD_CONTACT,
    ADD_CONTACT_RESET,
    CONTACT_ERROR

} from '../actions/types'

const intialstate={
    contacts:[],
    loading:true
    
};

export default (state = intialstate , action) => {

    switch (action.type) {
        case ADD_CONTACT:
            return{
                ...state,
                contacts:[action.payload , ...state.contacts],
                loading:false
            };
        case CONTACT_ERROR:
            return{
                ...state,
                contacts:null

            } 
            case ADD_CONTACT_RESET:
                return{
                    
                }   

            default:
                return state;

        }
       
    }