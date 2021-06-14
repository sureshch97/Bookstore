import React, { useState , useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize'
import { addcontact } from '../../actions/contactactions'
import { setAlert } from '../../actions/alert'
import { Fragment } from 'react'
import { ADD_CONTACT_RESET } from '../../actions/types'
import { selectFields } from 'express-validator/src/select-fields'

const Contact = ({ addcontact, history }) => {

    const [Name, setName] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");

    const onsubmit = (e) => {
        e.preventDefault();
        const newContact = {
            Name,
            email,
            contact
        }
        addcontact(newContact);
        console.log(newContact)
        //clearing input Fields
       

        
    }

    // useEffect(() => {

    //     setName("");
    //     setemail("");
    //     setcontact("");
    // }, [])
    
    return (
        <Fragment>
            <form className="col-lg-6 offset-lg-3 container" onSubmit={onsubmit}>
                <h1 className="text-center">Contact us</h1>

                <div className="form-group">
                    <input type="text"
                        placeholder="Name"
                        //className="form-control"
                        onChange={e => setName(e.target.value)} />

                </div>
                <div className="form-group">
                    <input type="email"
                        placeholder="Email"
                        //className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={e => setemail(e.target.value)} />
                </div>



                <div className="form-group">

                    <input type="text"
                        //className="form-control"
                        placeholder="what do you want to contact us"
                        onChange={e => setcontact(e.target.value)} />
                </div>


                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">submit</button>
                </div>



            </form>

        </Fragment>
    )
};
Contact.propTypes = {

    addcontact: PropTypes.func.isRequired,
}
export default connect(null, { addcontact })(Contact);

