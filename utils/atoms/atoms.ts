import { atom } from "recoil";

// USER TYPE
export const userType = atom ({
  key: "userType",
  default: {
    mentor: false,
    mentees: false
  }
})
// USER TYPE BOOLEAN
export const userTypeSet = atom ({
  key: "userTypeSet",
  default: false
})

