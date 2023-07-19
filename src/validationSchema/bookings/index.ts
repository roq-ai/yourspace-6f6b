import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_time: yup.date().required(),
  booking_date: yup.date().required(),
  user_id: yup.string().nullable(),
  space_id: yup.string().nullable(),
});
