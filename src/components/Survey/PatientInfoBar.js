import React from "react";

export default function PatientInfoBar() {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb pl-0 pl-md-5">
        <li className="breadcrumb-item active" aria-current="page">
          Patient: <strong>DAD</strong> &nbsp; Age: <strong>65</strong>
        </li>
      </ol>
    </nav>
  );
}
