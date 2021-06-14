import {

    GET_BOOKS,
    ADD_BOOK,
    ADD_COMMENT,
    GET_COMMENTS,
    COMMENT_ERROR,
    BOOKS_ERROR,
    SET_LOADING,
    GET_BOOK,
} from './types'
import {setAlert} from './alert'
import {v4 as uuid} from 'uuid';
import axios from 'axios'

//GET BOOKS
export const getbooks =()=> async dispatch =>{

    try {
        const res =  await axios.get('/api/books')
        dispatch({
            type:GET_BOOKS,
            payload:res.data
        })
    } catch (error) {

        dispatch({
            type:BOOKS_ERROR
        })
        
    }
};


// //GET COMMENTS

export const getcomments =() => async dispatch =>{

    try {
        

        const res = await fetch('/comments');
        const data = await res.json();
        
        
       
    
        dispatch({
            type:GET_COMMENTS,
            payload:data
        })

    } catch (error) {

        dispatch({
            type:COMMENT_ERROR,
            payload:error
        })
        
    }

   
};

// GET BOOK BY ID 
export const getbookbyid = (bookID)=> async dispatch=>{
   
    try {
        
        const res = await axios.get(`/api/books/${bookID}`);
       
       
        
        dispatch({

            type:GET_BOOK,
            payload:res.data
        }) 
    } catch (err) {

       dispatch({
        type:BOOKS_ERROR,
        payload:{ msg: err.message}
       }) 
        
    }


}

//ADD BOOK
export const addBook =(formData ,history)=> async dispatch =>{

    const config = {
      headers:{
        'Content-Type':'multipart/form-data'
      }
    };

try {
    const res =  await axios.post('/api/books' , formData ,  config)
    dispatch({
        type:ADD_BOOK,
        payload:res.data
    });
    dispatch(setAlert('You Book is Added' ,  'success')); 
    history.push('/');  
          
} catch (err) {

    dispatch(setAlert('Please Fill in All Fields' ,  'danger'));
    
}
};


//ADD COMMENT

export  const Addcomment = (comment,bookID)=> async dispatch=>{

    try {
        console.log('123' + comment)
        const config = {
            headers:{
                'content-type':'application/json'
            }
        }
         const res = await axios.post(`/api/books/comment/${bookID}`,comment , config)
          dispatch({
              type:ADD_COMMENT,
              payload: res.data
          });
          dispatch(setAlert('You Comment is Added' ,  'success'));

   } catch (err) {

    dispatch(setAlert('Please Fill in All Fields' ,  'danger'));
        
    } 
};

//SET LOADING
    export const setloading =()=>{

        return{
            type:SET_LOADING
        }

    } 


  

   




