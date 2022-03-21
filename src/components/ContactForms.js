import React, {useState,useEffect} from "react";


const ContactForms = (props ) => {
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: '',
    }

    var [Values, setValues] = useState(initialFieldValues)
const handleInputChange = e => {
    var { name, value } = e.target
    setValues({
        ...Values,
        [name] : value
    })
}
const handleFormSubmit = e => [
    e.preventDefault(),
    props.addOrEdit(Values)
]
    return (

  
        <form autoComplete="off " onSubmit={ handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>

                    </div>

                </div>

                <input className="form-control" placeholder="full Name" Name="fullName" 
                value={Values.fullName} onChange={handleInputChange}/>

             </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile"></i>

                        </div>

                    </div>

                    <input className="form-control" placeholder="Mobile" Name="mobile" value={Values.mobile} onChange={handleInputChange}/>

                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope  "></i>

                        </div>

                    </div>

                    <input className="form-control" placeholder="Email" Name="e mail" value={Values.email} onChange={handleInputChange}/>

                </div>

                <div className="from-group">
                    <textarea className="form-control"placeholder="address" Name="address" value={Values.address} onChange={handleInputChange}/>


                </div>

              


            </div>
            <div className="form-control">
                    <input type= "submit" value="Save" className="btn- btn-primary btn-block" />

                </div>

        </form>
       
    );
}

export default ContactForms;