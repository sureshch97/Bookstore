import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'


const Booksitem = ({book}) => {

   
    return (
      
        <div className="col-lg-4 col-md-4 col-xs-4 thumb" key={book.id}>
            <div className="col" style={styling}>
                <div className="col-sm-8" style={styling}>
                    
                <Link to={`/singlebook/${book._id}`}>
                  {book.image != undefined && book.image.length >0 ?(
                      

                       <img src={book.image}
                        alt="..." 
                        className="card-img-top w-100" 
                        height="300"/>
                       
                      
                  ):(
                          <img
                  src='https://segensolar.co.za/new/wp-content/uploads/2020/06/VIC-SMARTSOL-MPPT-250-100-MC4-CAN-280x280.jpg'
                  className="card-img-top"
                  alt="..."
                  height="300"
                />
                  ) }
                  
                </Link>
                <div className="card-header">
                  <p className="lead"><strong>{book.Name}</strong>
                  </p> 
               </div>
                 </div>
                   </div>
                     </div>
           
      
    )
}

Booksitem.propTypes = {
    book:PropTypes.object.isRequired
};
const styling ={
    margin:10
}

export default connect(null )(Booksitem)





