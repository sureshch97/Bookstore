import {
    ADD_BOOK,
    BOOKS_ERROR,
    GET_BOOK,
    GET_BOOKS,
    ADD_COMMENT,
    SET_LOADING,
    SET_ALERT,
    GET_COMMENTS
} from '../actions/types'

const intialstate={
    books:[], 
    book:{
    comments:[],
    },
    error:{},
    

};

export default (state = intialstate , action) => {
       
    switch (action.type) {

        case GET_BOOKS:
            return{
                ...state,
                books:action.payload,
                book:{
                    comments:[]
                },
                loading:false  
            };
            case GET_COMMENTS:
                return{
                    ...state,
                    comments:action.payload,
                    loading:false  
                };    
        case ADD_COMMENT:
            return{
                ...state,
                book:{
                    ...state.book,
                    comments:action.payload
                }
            }   
        case GET_BOOK:
            return{
                ...state,
                book:action.payload,
                loading:false
            }    
        case ADD_BOOK:
            return{
                ...state,
                books:[...state.books , action.payload],
                loading:false
               
            };
            
            case SET_LOADING:
                return{
                    ...state,
                    loading:true
                };
                case SET_ALERT:
                    return{
                        ...state,
                        loading:true
                    };
            case BOOKS_ERROR:
                return{
                    ...state,
                    error:action.payload
                };
               
                default:
                    return state;
            
        }
    }



