import React from "react";

const Button = ({ title, data }) => {
  return (
    <div className="btn-div">
      <a href="#" class="button" data-back={title} data-front={title}></a>
      <p className="data">{data}</p>
    </div>
  );
};

export default Button;
