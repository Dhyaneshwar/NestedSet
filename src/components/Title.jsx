import React from "react";
import { Link } from "react-router-dom";

function Title() {
  return (
    <h1 className="mb-2 text-center text-4xl font-bold text-blue-600">
      <Link to="/">Nested Set Viewer Application</Link>
    </h1>
  );
}

export default Title;
