import * as Yup from 'yup';

export const formValidationSchema = Yup.object({
  firstName: Yup.string()
                .min(1, 'Name cannot be shorter than 1 character')
                .max(5, 'Name cannot be longer than 40 characters')
                .ensure(),
               
  lastName:  Yup.string()
                .min(1, 'Name cannot be shorter than 1 character')
                .max(5, 'Name cannot be longer than 5 characters')
                .ensure(),

  email: Yup.string().email().ensure(),

  message: Yup.string()
              .min(5, 'Message cannot be shorter than 5 characters')
              .max(20, 'Message cannot be longer than 20 characters')
              .ensure(),
});
