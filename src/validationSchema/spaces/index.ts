import * as yup from 'yup';

export const spaceValidationSchema = yup.object().shape({
  location: yup.string().required(),
  availability_time: yup.date().required(),
  availability_date: yup.date().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
});
