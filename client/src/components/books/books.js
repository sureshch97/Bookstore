import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Booksitem from './bookitem'
import { getbooks } from '../../actions/bookactions'
import PropTypes from 'prop-types'



const Books = ({ books: { books }, getbooks }) => {

   useEffect(() => {

      getbooks();

      // eslint-disable-next-line

   }, [getbooks]);



   return (
      <Fragment>

         <Link to="/addbook">
            <div class="d-grid gap-2">
               <button class="btn btn-block btn-primary" type="button">Add Book</button>
            </div>
         </Link><br />




         <div className="row">

            {books !== null && books.map(book => <Booksitem book={book} key={book.id} />)}

         </div>

      </Fragment>

   )
};

Books.propTypes = {
   books: PropTypes.object.isRequired,
   getbooks: PropTypes.func.isRequired,


}
const mapStateToProps = state => ({
   books: state.book,

});
export default connect(mapStateToProps, { getbooks })(Books);