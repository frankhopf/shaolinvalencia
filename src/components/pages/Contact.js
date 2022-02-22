import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../Footer';
import './Contact.css';


export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
      
        emailjs.sendForm('gmail', 'template_13wopve', e.target, 'user_95Q2jYA2RjvJKcWB9rylb')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
        e.target.reset()
    }
    return(
        <>
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                <div className="form-container">
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Nombre" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Tema" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Tu texto aquí" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Enviar"></input>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
    <Footer />
    </>
    );
    
}