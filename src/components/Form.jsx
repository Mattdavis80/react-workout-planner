import React from "react";
import FormElement from "./FormElement";
import "./css/form.css";

const Form = ({ onClick, data }) => {
  return (
    <>
      <form onClick={onClick}>
        <div className="form-groups">
          {data.map((item, index) => (
            <FormElement
              key={index}
              idValue={`group-${++index}`}
              labelValue={item}
            />
          ))}
        </div>
      </form>
    </>
  );
};

export default Form;
