// function Contactus(){
//     return(
//         <div>
//             <h1>Contact Us</h1>
//         </div>
//     );
// }
// export default Contactus;

import contactImage from './contact.jpg';

function ContactUs() {
    return (
        <div>
            <img className="contact" src={contactImage} alt="ContactUs" />
        </div>
    );
}

export default ContactUs;
