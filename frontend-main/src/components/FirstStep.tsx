import React from "react";
import { FormState } from "./Form";

import Logo from '../assets/img/logo.png';


type IHeaderProps = {
  formData: FormState;
  setFormData: (formData: FormState) => void;
};


const FirstStep: React.FC<IHeaderProps> = ({ formData, setFormData }) => {
  return (
    <div className="first-step-container">
      <img src={Logo} alt={"openbank-logo"} /><br></br>
      <p><b>Lorem Ipsum</b></p>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
      <label><input type="checkbox" checked={formData.checkbox} onChange={(e) => {
          setFormData({ ...formData, checkbox: e.target.checked });
        }}/>  Confirma que es mayor de edad, y acepta el tratamiento de sus datos según la política de protección de datos vigente.</label>
    </div>
  );
}

export default FirstStep;