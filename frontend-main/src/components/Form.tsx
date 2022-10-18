import React, { useState } from "react";
import axios from "axios";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

export type FormState = {
  checkbox: boolean,
  username: string,
  password: string,
  confirmPassword: string,
  clue: string,
  validation: string
}

const initialState = {
  checkbox: false,
  username: "",
  password: "",
  confirmPassword: "",
  clue: "",
  validation: ""
};

type CreateUserResponse = {
  username: string;
  password: string;
};

function Form() {
  const [page, setPage] = useState<number>(0);
  const [formData, setFormData] = useState<FormState>(initialState);

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstStep formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SecondStep formData={formData} setFormData={setFormData} />;
    } else {
      return <ThirdStep formData={formData} setFormData={setFormData} />;
    }
  };

  async function createUser() {
    try {
      const {data} = await axios.post<CreateUserResponse>(
        'http://localhost:8080/api/create',
        { username: formData.username, password: formData.password },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      console.log(JSON.stringify(data, null, 4));
      setPage((currPage) => currPage + 1);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
      } else {
        console.log('An unexpected error occurred');
      }
    }
  }

  function validation() {
      if (formData.username === "" || formData.password === "" || formData.confirmPassword === "") {
        setFormData({ ...formData, validation: "error1" });
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setFormData({ ...formData, validation: "error1" });
        return false;
      }
      setFormData({ ...formData, validation: "" });
      return true;
  }

  const colorButton =  formData.checkbox === true ? page === 2 ? "back-button" : "green-button" : "next-button";

  return (
    <div className="form">
      <div className="form-container">
        <div className="header">
          <div className="header-top">
            <span className={page > 0 ? "num" : "active"}>{page === 0 ? "1" : "✓"}</span>
            <span className={page > 0 ? page > 1 ? "num" : "active" : "disabled"}>{page === 2 ? "✓" : "2"}</span>
            <span className={page > 1 ? "active" : "disabled"}>3</span>
          </div>
          <h2 className="title">Frontend</h2>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <hr />
          <button
          className="left-button back-button"
            disabled={page === 0 || page === 2}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Atras
          </button>
          <button
            className={"right-button " + colorButton}
            disabled={!formData.checkbox}
            onClick={() => {
              if (page === 2) {
                setPage(0);
                setFormData({ ...initialState });
              } else {
                if (page === 1) {
                  let resultValidation = validation();
                  if (resultValidation) {
                   createUser();
                  }
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }
            }}
          >
            {page === 2 ? "Volver al inicio" : "Siguiente >"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;