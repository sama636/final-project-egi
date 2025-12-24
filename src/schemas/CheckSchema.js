import * as yup from "yup";
const CheckSchema = yup.object().shape({
    firstname: yup
    .string()
    .required("First Name is required")
    .min(3, "Name should be at least 3 characters"),
    lastname: yup
    .string()
    .required("Last Name is required")
    .min(3, "Name should be at least 3 characters"),
    city: yup
    .string()
    .required("City is required")
    .min(3, "City should be at least 3 characters"),
    state: yup
    .string()
    .required("State is required")
    .min(3, "State should be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email should be a valid email address"),
  phoneNumber: yup
    .string()
    .required("Number is required")
    .min(8, "Password should ce at least 8 characters")
    .max(11, "Password should ce at most 11 characters"),
  });
  
  export default CheckSchema;