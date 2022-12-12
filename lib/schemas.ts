import * as yup from "yup";

export const mentorBody = yup
  .object()
  .shape({
    name: yup.string().required(),
    category: yup.string().required(),
    community: yup.string().required(),
    description: yup.string().required(),
    image: yup.string().required(),
  })
  .noUnknown()
  .strict();
