// import React, { useState } from 'react';
// import './style.css'
// function Form() {
//   const [formData, setFormData] = useState({
//     text: '',
//     email: '',
//     number: '',
//     check: false,
//     radio: '',
//     select: '',
//     startDate: '',
//     endDate: '',
//     time: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const newValue = type === 'checkbox' ? checked : value;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: newValue,
//     }));
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (formData.text === '') {
//       newErrors.text = 'Please enter text.';
//     }

    
//     if (formData.email === '' || !formData.email.includes('@')) {
//       newErrors.email = 'Please enter a valid email address.';
//     }

//     if (isNaN(formData.number)) {
//       newErrors.number = 'Please enter a valid number.';
//     }

//     if (!formData.check) {
//       newErrors.check = 'Please check the checkbox.';
//     }

//     if (formData.radio === '') {
//       newErrors.radio = 'Please select a radio option.';
//     }

//     if (formData.select === '') {
//       newErrors.select = 'Please select an option from the dropdown.';
//     }

//     if (formData.startDate === '' || formData.endDate === '') {
//       newErrors.dates = 'Please enter start and end dates.';
//     } else if (new Date(formData.startDate) > new Date(formData.endDate)) {
//       newErrors.dates = 'End date must be after start date.';
//     }

//     if (formData.time === '') {
//       newErrors.time = 'Please enter a time.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert('Form submitted successfully.');
      
//     }
//   };

//   return (
//     <div>
//       <h2>Sample Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Text:</label>
//           <input
//             type="text"
//             name="text"
//             value={formData.text}
//             onChange={handleInputChange}
//           />
//           {errors.text && <p className="error">{errors.text}</p>}
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//           {errors.email && <p className="error">{errors.email}</p>}
//         </div>
//         <div>
//           <label>Number:</label>
//           <input
//             type="number"
//             name="number"
//             value={formData.number}
//             onChange={handleInputChange}
//           />
//           {errors.number && <p className="error">{errors.number}</p>}
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="check"
//               checked={formData.check}
//               onChange={handleInputChange}
//             />
//             Check
//           </label>
//           {errors.check && <p className="error">{errors.check}</p>}
//         </div>
//         <div>
//           <label>Radio:</label>
//           <label>
//             <input
//               type="radio"
//               name="radio"
//               value="option1"
//               checked={formData.radio === 'option1'}
//               onChange={handleInputChange}
//             />
//             Option 1
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="radio"
//               value="option2"
//               checked={formData.radio === 'option2'}
//               onChange={handleInputChange}
//             />
//             Option 2
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="radio"
//               value="option3"
//               checked={formData.radio === 'option3'}
//               onChange={handleInputChange}
//             />
//             Option 3
//           </label>