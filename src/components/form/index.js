import React from "react";
import "./_form.scss";

const Form = () => (
  <div className="form">
    <form
      name="study-group"
      method="POST"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p>
        <label>
          Group Title:
          <input type="text" name="title" className="form-control" />
        </label>
      </p>

      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
);

export default Form;
