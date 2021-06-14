import React, {Fragment ,useState , useEffect} from 'react'
import {connect } from 'react-redux'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import {getbookbyid, Addcomment } from '../../actions/bookactions';
//import M from 'materialize-css/dist/js/materialize'
import { Link } from 'react-router-dom'
import { setAlert } from '../../actions/alert'




 const Singlebook = ({ getbookbyid , Addcomment,book, match}) => {

    const [name , setName] = useState('');
    const [comment , setcomment] = useState('')

    const [ButtonName , setButtonName] = useState('Place Order');
    const [ButtonColor , setButtonColor] = useState('blue')


     useEffect(() => {
        
        getbookbyid(match.params.id);
        
        //eslint-disable-next-line
       
        }, [getbookbyid , match.params.id]);

    const onSubmit=(e)=>{

        e.preventDefault();
         
        if(name === '' || comment === ''){

            setAlert('Please Fill in All Fields' ,  'danger');
        }
        else{
      

        const newComment = {
        
           Name: name,
            comment
        }
         
         Addcomment(newComment , match.params.id);
    

         //Clear Fields
         setName({'Name':''});
         setcomment({'comment':''});
        }
       
         
        
    }
    return (
      
    <div className="row">
        <div className="col-md-4">
            <div className="card">
               <Link to={`/singlebook/${book.id}`}>
      

                {book.image != undefined && book.image.length >0 ?(
                                

                                <img src={book.image}
                                alt="..." 
                                className="card-img-top w-100" 
                                height="300"/>
                                 
                            
                        ):(
                                <img
                        src="https://segensolar.co.za/new/wp-content/uploads/2020/06/VIC-SMARTSOL-MPPT-250-100-MC4-CAN-280x280.jpg"
                        className="card-img-top"
                        alt="..."
                        height="300"
                        />
                        ) }
                </Link>
         <div className="card-header">
                <p className="lead ">{book.Name}
                <span><br/>
                <br />$<strong>{book.price}</strong>
                 </span>
                </p>
              
         </div>
       
      

      <div className="card-body">

        <p className="lead">{book.description}</p>

      </div>

      <div className="card-action text-center">

        <a href="#"  onClick={()=>{
            setButtonName('Order Placed')
            setButtonColor('#008000')

        }}  className="btn btn-primary btn-block" style={{backgroundColor:ButtonColor}}>{ButtonName}</a>

      </div>
        </div>
          </div>
      
        
       <div className="col-md-8 ">

            <form onSubmit={onSubmit}>

                    <h3><strong>Add a Comment</strong></h3>

                        <label>Name:</label> 

                                <input type="text"
                                onChange={e=>setName(e.target.value)}
                                    />
                    <div className="form-group mb-3">

                        <label>Comment:</label>

                <textarea type="text"
                onChange={e=>setcomment(e.target.value)}
                />
       </div>

          <button type='submit' className="btn btn-block btn-success">Submit</button>
    </form>
    
    
      <div className="mt-3">
              <h3> <strong>Comments</strong></h3>

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
                <br/></div>

            ))}

            </div>


  
    </div>
      </div>    
    )};

Singlebook.propTypes={
    Addcomment:PropTypes.func.isRequired,
    getbookbyid:PropTypes.func.isRequired,
   
    book:PropTypes.object.isRequired,
    
    
    
}

const mapStateToProps=state=>({
    book:state.book.book,
    
})
   



export default connect(mapStateToProps,{Addcomment ,getbookbyid })(Singlebook);




