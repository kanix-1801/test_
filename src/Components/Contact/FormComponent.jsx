// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const FormComponent = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const [isSubmitted, setIsSubmitted] = useState(false);

//     // Handle input change
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     // Handle form submission and send email via EmailJS
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Define the EmailJS parameters
//         const templateParams = {
//             from_name: formData.name,
//             from_email: formData.email,
//             message: formData.message,
//         };

//         // Send email using EmailJS
//         emailjs
//             .send(
//                 'YOUR_SERVICE_ID',   // Replace with your EmailJS service ID
//                 'YOUR_TEMPLATE_ID',  // Replace with your EmailJS template ID
//                 templateParams,
//                 'YOUR_USER_ID'       // Replace with your EmailJS user ID
//             )
//             .then(
//                 (response) => {
//                     console.log('SUCCESS!', response.status, response.text);
//                     setIsSubmitted(true); // Set submitted status
//                 },
//                 (err) => {
//                     console.log('FAILED...', err);
//                 }
//             );
//     };

//     return (
//         <div>
//             {isSubmitted ? (
//                 <p>Thank you! Your message has been sent.</p>
//             ) : (
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label htmlFor="name">Name:</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="email">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="message">Message:</label>
//                         <textarea
//                             id="message"
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>

//                     <button type="submit">Submit</button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default FormComponent;
