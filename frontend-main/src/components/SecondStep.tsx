import React from "react";
import { FormState } from "./Form";

type IHeaderProps = {
  formData: FormState;
  setFormData: (formData: FormState) => void;
};


const SecondStep: React.FC<IHeaderProps> = ({ formData, setFormData }) => {
  return (
    <div className="second-step-container">
      <label htmlFor="username"><b>* Crea tu usuario</b></label>
      <input
        type="text"
        className="input-large"
        id="username"
        placeholder="Introduce tu usuario"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <div className="two-containers1">
      <label htmlFor="password"><b>* Crea tu contraseña</b></label>
      <input
        type="password"
        className="input-short"
        id="password"
        placeholder="Crea tu contraseña"
        value={formData.password}
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
      />
      </div>
      <div className="two-containers2">
      <label htmlFor="confirmPassword"><b>* Repite tu contraseña</b></label>
      <input
        type="password"
        className="input-short"
        id="confirmPassword"
        placeholder="Repite tu contraseña"
        value={formData.confirmPassword}
        onChange={(e) => {
          setFormData({ ...formData, confirmPassword: e.target.value });
        }}
      />
      </div>
      <p>También puedes crear una pista que te ayude a recordar tu contraseña.</p>
      <br />
      <label htmlFor="clue"><b>Crea tu pista para recordar tu contraseña (opcional)</b></label>
      <input
        type="text"
        className="input-large"
        id="clue"
        placeholder="Introduce tu pista"
        value={formData.clue}
        onChange={(e) => {
          setFormData({ ...formData, clue: e.target.value });
        }}
      />
      <p className={"error " + formData.validation}>Campos requeridos * y/o no coinciden las contraseñas.</p>
    </div>
    
  );
}

export default SecondStep;