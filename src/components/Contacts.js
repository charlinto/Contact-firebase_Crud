import React from "react";
import ContactForms from "./ContactForms";


const Contacts = ( ) => {

    const addOrEdit = obj=>{

    }
    return (
    <>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4 text-center ">Contact Register</h1>
            </div>
        </div>
        <div className="row">
                <div className="col-md-5">
                    <ContactForms addOrEdit/>

                </div>
                <div className="col-md-7">
                    <div>list of contacts </div>

                </div>

        </div>
    </>

      


 );
}

export default  Contacts;