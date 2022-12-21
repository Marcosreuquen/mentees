import * as yup from "yup";

export const mentorBodyForCreate = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required(),
    category: yup.string().required(),
    community: yup.string().required(),
    description: yup.string().required(),
    image: yup.string().required(),
  })
  .noUnknown()
  .strict();
export const mentorBodyForUpdate = yup
  .object()
  .shape({
    name: yup.string(),
    email: yup.string(),
    category: yup.string(),
    community: yup.string(),
    description: yup.string(),
    image: yup.string(),
  })
  .noUnknown()
  .strict();
export const CreateAuthBodySchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
  })
  .noUnknown(true)
  .strict();
export const createTokenBodySchema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    code: yup.number().positive().required(),
  })
  .noUnknown(true)
  .strict();
