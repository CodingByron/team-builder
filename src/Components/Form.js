import React from "react";

const Form = (props) => {
  return (
    <form>
      <label>
        Name
        <input
          placeholder="Enter your name here"
          value={toHaveFormValues.name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          placeholder="Enter your email here"
          value={values.email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Role
        <input
          placeholder="Enter your role here"
          value={values.role}
          name="role"
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default Form;
