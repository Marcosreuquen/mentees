import {  Label, RadioInput} from "components/form/styled";
import { PrimaryButton } from "UI/buttons";
import {
  UserTypeCheckContainer,
  RadioInputContainer,
  UserTypeForm,
} from "./styled";
import { Body } from "UI/text";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userType, userTypeSet } from "utils/atoms/atoms";
import { MenteesLogin } from "./mentees";
import { MentorLogin } from "./mentor";
import css from "./index.module.css"

export function Login(){
  const userTypeVal = useRecoilValue(userType);
  const userTypeSetVal = useRecoilValue(userTypeSet);
   
  return !userTypeSetVal? <UserType /> : <LoginForm userType={userTypeVal}/>;
}

// component to determine which user is loggin in
const UserType = () => {
    const setUserType =  useSetRecoilState(userType);
    const setUserTypeSet = useSetRecoilState(userTypeSet);

    function handleUserTypeSubmit(e:any) {
      e.preventDefault();
      const userType = e.target.userType.value

      if (!userType) {
            return;
      }

      if (userType == "mentor") {
        setUserType({
          mentor: true,
          mentees: false
        })
      } else {
        setUserType({
          mentor: false,
          mentees: true
        })
      }
      
        setUserTypeSet(true)
    }
  
    return (
      <>
          <UserTypeForm onSubmit={handleUserTypeSubmit}>
          <UserTypeCheckContainer>
              <Body>¿Eres mentor o mentoreado?</Body>
            <RadioInputContainer>
              <RadioInput type="radio" name="userType" id="mentor" value="mentor" />
              <Label htmlFor="mentor">
                <Body>Mentor</Body>
              </Label>
            </RadioInputContainer>
            <RadioInputContainer>
              <RadioInput
                type="radio"
                name="userType"
                id="mentees"
                value="mentees"
                />
              <Label htmlFor="mentees">
                <Body>Mentees</Body>
              </Label>
            </RadioInputContainer>
          </UserTypeCheckContainer>
          <PrimaryButton className={css["continue-button"]}>
            Continuar
          </PrimaryButton>
        </UserTypeForm>
      </>
    );
}

// component to render different loggin form base on user selection
const LoginForm = (userType: any)=>{ 
  if (userType.userType.mentor) {
      return <MentorLogin/>
  } else {
      return <MenteesLogin/>
  }
}