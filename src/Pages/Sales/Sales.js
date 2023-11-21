import React from "react";
import EmptyError from "../../Components/EmptyError/EmptyError";

export default function Sales() {
  return (
    <div>
      <EmptyError text="You have not had any sales in the past 24 hours" />
    </div>
  );
}
