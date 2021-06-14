import React, {useState , useEffect} from 'react'
import {connect } from 'react-redux'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import {getbookbyid, Addcomment } from '../../actions/bookactions';
//import M from 'materialize-css/dist/js/materialize'
import { Link } from 'react-router-dom'




 const Singlebook = ({ getbookbyid , Addcomment,book, match}) => {

    const [Name , setName] = useState('');
    const [comment , setcomment] = useState('')

    const [ButtonName , setButtonName] = useState('Place Order');
    const [ButtonColor , setButtonColor] = useState('blue')


     useEffect(() => {
        
        getbookbyid(match.params.id);
        
        //eslint-disable-next-line
       
        }, [getbookbyid , match.params.id])

    const onSubmit=(e)=>{
         
        if(Name === '' || Comment === ''){

            M.toast({html:`Please fill in All fields`})
           

        }
        else{
        e.preventDefault();

        const newComment = {
            Name,
            comment
        }
         
         Addcomment(newComment , match.params.id);
         console.log(newComment);
            //M.toast({html:`Thank You for Your FeedBack`});
          
    
        }
        
    }

    return (
      
    <div className="grid-2">
     
   
      <div className="card">
     <Link to={`/singlebook/${book._id}`}>
         {book.image != undefined && book.image.length > 0 ?(
                <img src={book.image}
                alt="..." 
                className="card-img-top w-100" 
                height="300"/>
         ):(
            <img
            src="https://click2kemah.com/directory/wp-content/uploads/2019/04/No-image-available.jpg"
            className="card-img-top"
            alt="..."
            height="300"
          />
         )}
        
        </Link>
        <span className="card-title text-center">{book.Name}</span>  
        <span><br/><br/>

         <i className="fas fa-dollar-sign"></i> 
         <strong>{book.prize}</strong>
         
        </span>
        

        <div className="card-content">

          <p>{book.description}</p>

        </div>

        <div className="card-action text-center">

          <a href="#"  onClick={()=>{
              setButtonName('Order Placed')
              setButtonColor('#008000')

          }}  className="btn btn-primary btn-block" style={{backgroundColor:ButtonColor}}>{ButtonName}</a>

        </div>

    
     </div>
  

            <form onSubmit={onSubmit}>

                    <h3>Add a Comment</h3>

                    <div className="form-control">

                        <div>
                            <label>Name</label> 

                            <input type="text"
                                 
                                /*onChange={(e)=>setFormdata({...Formdata ,[e.target.Name]:e.target.value})}*/

                                onChange={e=>setName(e.target.value)}
                                />

                        </div>
                    
                        <div className="form-group mb-3">

                            <label>Comment</label>

                            <textarea type="text"
                            /*onChange={(e)=>setFormdata({...Formdata ,[e.target.Name]:e.target.value})}*/

                            onChange={e=>setcomment(e.target.value)}
                            />

                        </div>

                        <button type='submit' className="btn btn-block btn-success">Submit</button>
                          
                        <div className="mt-5 mb-5">

                          <h3> comments:</h3>
                        
                          <Fragment>

                                { book.comments && book.comments.length > 0 &&

                                book.comments.map((s) => (

                                    <div key={s.id}> 

                                    <p>Author : {s.Name}</p>

                                    <p>Comment : {s.comment}</p>

                                    <p>

                                        Created on :{" "}

                                        <Moment format="DD/MM/YYYY">{s.date}</Moment>

                                    </p>
                                    <br/>
                                    <hr />
                                    <br/>

                                    </div>

                                ))}

                                </Fragment>

                      </div>  
            
                </div>
       
            </form>
     </div>
       
        
    )
};

Singlebook.propTypes={
    Addcomment:PropTypes.func.isRequired,
    getbookbyid:PropTypes.func.isRequired,
   
    book:PropTypes.object.isRequired,
    
    
    
}

const mapStateToProps=state=>({
    book:state.book.book,
    
})
   



export default connect(mapStateToProps,{Addcomment ,getbookbyid })(Singlebook);




