import axios from 'axios';
import {
    ADD_CONTACT, ADD_CONTACT_RESET
} from './types'
import {setAlert} from './alert'


//addcontact

export const addcontact =(formData)=> async dispatch =>{

    const config = {
      headers:{
        'Content-Type':'application/json'
      }
    };

try {
    const res =  await axios.post('/api/contacts' , formData ,  config);
    console.log('123')
    console.log(res.data);
    dispatch({
        type:ADD_CONTACT,
        payload:res.data
    });
     
    dispatch(setAlert('Thank You for Contacting us' ,  'success'));
    
          
} catch (err) {
       
    dispatch(setAlert('Please Fill in All Fields', "danger"));
    
}
};
