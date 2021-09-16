import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Contact = (props) => {
  return (
    <div>
      <Modal />
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/ömer" className="ui header">
          ÖMER
        </Link>
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
          dolores?
        </p>
      </div>

      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/soner" className="ui header">
          SONER
        </Link>
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum,
          dolores?
        </p>
      </div>
    </div>
  );
};

export default Contact;
