import React from "react";
import { FormState } from "./Form";

import SuccessLogo from '../assets/img/success.png';


type IHeaderProps = {
  formData: FormState;
  setFormData: (formData: FormState) => void;
};


const ThirdStep: React.FC<IHeaderProps> = ({ formData, setFormData }) => {
  return (
    <div className="third-step-container">
      <div className="success-container">
        <img src={SuccessLogo} alt={"openbank-logo"} />
      </div>
      <div className="success-text-container">
        <p><b>¡La cuenta se creó correctamente!</b></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  );
}

export default ThirdStep;