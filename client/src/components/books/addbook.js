import React , {useState} from 'react'
import {addBook} from '../../actions/bookactions'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import axios from 'axios'
import { setAlert } from '../../actions/alert'


 const  Addbook=({addBook , history}) =>{
   
  const [Name , setName] = useState('');
  const [category , setcategory] = useState('');
  const [label , setlabel] = useState('');
  const [price , setprice] = useState('');
  const [description , setdescription] = useState('');
  const [file , setfile] = useState('');
  const [fileName , setfileName] = useState('');

  


  const onChange = e => {
    setfile(e.target.files[0]);
    setfileName(e.target.files[0].name);
    
    
  };
   

  const onsubmit= async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('Name', Name);
    formData.append('category', category);
    formData.append('label', label);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('fileName', fileName);
    formData.append('comments',[])
        
     addBook(formData , history);  

     history.push('/')
      };
    
 

    return (
      <Fragment>
          <form className="col-lg-6 offset-lg-3" onSubmit={onsubmit}>
        
              <h2 className="text-center">Add a Book</h2>

                  <input type="text"
                  placeholder="Enter Book Name"
                  onChange={e=> setName(e.target.value)}
                  />

                <div className="form-group">

                  <select name="category" onChange={(e) => setcategory(e.target.value)}>
                    <option>Category</option>
                    <option value="Action and Adventure"> Action and Adventure</option>
                    <option value="Classics">Classics</option>
                    <option value="spicy">Comic Book or Graphic Novel</option>
                    <option value="Comic Book or Graphic Novel">Detective and Mystery</option>
                    <option value="Fantasy.">Fantasy.</option>
                    <option value="Historical Fiction">Historical Fiction.</option>
                    <option value="Horror.">Horror.</option>
                    <option value="Others">Others</option>

                  </select>

              </div>

              <div className="form-group">
                  
                  <input type="text" placeholder='Label'
                  onChange={e=> setlabel(e.target.value)}
                  />

              </div>

              <div className="form-group">

                  <input type="text" 
                  placeholder='Price in Dollars' 
                  onChange={e=> setprice(e.target.value)}
                    />

              </div>
                  
              <div className="form-group">
                
                <textarea type="text"
                  placeholder="Write something about Book"
                  value={description}
                  onChange={e=> setdescription(e.target.value)}

                />

              </div>
                

                <div className="custom-file mb-4">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="customFile"
                      onChange={onChange}
                      />
                    <label className="custom-file-label" htmlFor="customFile"></label>
                  </div>

              

                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary btn-block">
                    </input>
                    
                </div>

          </form>
       
   
      </Fragment>
      
    )
    };
Addbook.propTypes={
  addBook:PropTypes.func.isRequired,
}
export default connect(null , {addBook})(Addbook)

