import React from "react";

const Form = () => {
  return (
    <>
      <form className="form">
        <div className="form__control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form__input"
            autoComplete="off"
          />
        </div>
        <div className="form__control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form__input"
            autoComplete="off"
          />
        </div>
        <div className="form__control">
          <label htmlFor="channel">Channel</label>
          <input
            type="channel"
            name="channel"
            id="channel"
            className="form__input"
            autoComplete="off"
          />
        </div>
        <button className="btn btn__submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
