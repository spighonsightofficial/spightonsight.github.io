import * as Yup from 'yup';

export const formValidationSchema = Yup.object({
  firstName: Yup.string()
                .min(1, 'Name cannot be shorter than 1 character')
                .max(30, 'Name cannot be longer than 30 characters')
                .ensure(),
               
  lastName:  Yup.string()
                .min(1, 'Name cannot be shorter than 1 character')
                .max(30, 'Name cannot be longer than 30 characters')
                .ensure(),

  email: Yup.string().email().ensure(),

  message: Yup.string()
              .min(5, 'Message cannot be shorter than 5 characters')
              .max(250, 'Message cannot be longer than 300 characters')
              .ensure(),
});