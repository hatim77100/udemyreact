import React from "react";

function article({title, content}) {
  return (
    <div className="card p-20 mb-20">
      <h2 className="mb-20">{title}</h2>
      <p>
       {content}
      </p>
    </div>
  );
}

export default article;
