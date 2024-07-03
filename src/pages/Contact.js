import React,{useState} from 'react'
import { CiMail } from "react-icons/ci";
import {IconContext} from 'react-icons'


const Contact = ()=>{
    const myEmail = "roycejames1130@gmail.com"
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');


    function submitData(e){
        e.preventDefault()
        console.log({ name, email, message });
        

    }
    return (
        <div className="contact-container">
            <h2>Let's Connect!</h2>
            
                <h3 style={{color:'gray'}}>Feel free to fill in this form to send me an automated email, or you can write me an email from the icon below.</h3>
                <a href={`mailto:${myEmail}`} style={{textDecoration:'none', color:'inherit'}}><IconContext.Provider value = {{className:'mail-icon'}}><CiMail /></IconContext.Provider></a>

            <form className="contact-form">
                <label htmlFor="name" style ={{ display: 'block', textAlign: 'left',  fontSize: '18px',fontWeight: "bold"}} >Name:</label>
                <input type="text" id="name" className="contact-input" name="name" onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="email" style ={{ display: 'block', textAlign: 'left',  fontSize: '18px' ,fontWeight: "bold"}} >Email:</label>
                <input type="email" className="contact-input" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                
                <label htmlFor="subject" style ={{ display: 'block', textAlign: 'left',  fontSize: '18px' ,fontWeight: "bold"}} >Subject:</label>
                <input type="subject" className="contact-input" id="subject" name="subject" onChange={(e) => setSubject(e.target.value)}/>

                <label htmlFor="message" style ={{ display: 'block', textAlign: 'left', fontSize: '18px' ,fontWeight: "bold"}} >Message:</label>
                <textarea id="message" name="message" onChange={(e) => setMessage(e.target.value)} ></textarea>

                <button className='submit-btn' onClick={submitData}>Submit</button>
            </form>
        </div>
    )
}

export default Contact