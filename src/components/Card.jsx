// import React, { useEffect, useState } from "react";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import '../scss/Card.scss';
// import Service from '../services/employee';
// const service = new Service();


// export const Cards = () => {
//     const [employee, setEmployee] = useState([])

//     useEffect(() => {
//         service.getEmployee()
//         .then((res) => {
//             setEmployee(res.data.data)
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     }, [])
// }

// return(
//     <div className="root">
//     {employee.map((service)=> (        
//     <Card>
          
//         <CardContent>
//             <Typography className="pos">{service.firstName} (firstName)</Typography>
//           <Typography className="pos">{service.lastName}(lastName)</Typography>
//           <Typography className="pos">{service.email}(email)</Typography>
//           <Typography className="pos">{service.department}(department)</Typography>
//           <Typography className="pos">{service.salary}(salary)</Typography>
        
//         </CardContent>
//         <CardActions className="cardActions">
//           <IconButton>
//             <EditIcon onClick={handleEdit}></EditIcon>
//             {/* <ListItemText primary='Edit' /> */}
//           </IconButton>
//           <IconButton>
//             <DeleteIcon onClick={handleDelete}></DeleteIcon>
//             {/* <ListItemText primary='Delete' /> */}
//           </IconButton>
//         </CardActions>
        
//       </Card>
//       ))}
//     </div>
//   );




// // const SimpleCard = (props) => {
// //   const employee = props.employee;

// //   const handleEdit = () => {
// //     props.editItem(props.employee);
// //   };

// //   const handleDelete = () => {
// //     props.deleteItem(props.id);
// //   };

// //   return (

// // };

// // export default SimpleCard;