// import React from 'react'




// // const INPUTS_FORM = [
// //   {
// //     id: 'text',
// //     name: 'text',
// //     type: 'text',
// //     label: 'Text',
// //   },
// //   {
// //     id: 'email',
// //     name: 'email',
// //     type: 'email',
// //     label: 'Email',
// //   },
// //   {
// //     id: 'number',
// //     name: 'number',
// //     type: 'number',
// //     label: 'Number',
// //   },
// //   {
// //     id: 'radio',
// //     name: 'radio',
// //     type: 'radio',
// //     label: 'Radio',
// //   },
// //   {
// //     id: 'select',
// //     name: 'select',
// //     type: 'select',
// //     label: 'Select',
// //   },
// //   {
// //     id: 'select',
// //     name: 'select',
// //     type: 'select',
// //     label: 'Select',
// //   },
// //   {
// //     id: 'startdate',
// //     name: 'startdate',
// //     type: 'startdate',
// //     label: 'Startdate',
// //   },
// //   {
// //     id: 'enddate',
// //     name: 'enddate',
// //     type: 'enddate',
// //     label: 'Enddate',
// //   },
// //   {
// //     id: 'time',
// //     name: 'time',
// //     type: 'time',
// //     label: 'Time',
// //   },

// // ];


// const HazPage = () => {


//   const handleChange = (e) => {
//     e.preventDefault();
  
//   }


//   return (
//     <div>
       
//       <h2>Sample Form</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <div>
//           <label>Start Date:</label>
//           <input
//             type="date"
//             name="startDate"
//             value={formik.values.startDate}
//             onChange={formik.handleChange}
//           />
//           {formik.touched.startDate && formik.errors.startDate && (
//             <p className="error">{formik.errors.startDate}</p>
//           )}
//         </div>
//         <div>
//           <label>End Date:</label>
//           <input
//             type="date"
//             name="endDate"
//             value={formik.values.endDate}
//             onChange={formik.handleChange}
//           />
//           {formik.touched.endDate && formik.errors.endDate && (
//             <p className="error">{formik.errors.endDate}</p>
//           )}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// };

// export default HazPage;

//     // <form onSubmit={()=>{}}>
//     //   {INPUTS_FORM?.map((input)=>(
//     //     <div key={input.id} >
//     //       <label htmlFor="input.id">{input.label}</label>
//     //       <input 
//     //         type={input.type}
//     //         id={input?.id}
//     //         name={input?.name}
//     //         value=""
//     //         onChange={handleChange}
//     //       />
//     //     </div>
//     //   ))
//     //   }
//     // </form>