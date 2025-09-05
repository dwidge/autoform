import React from "react";
import { TextFieldElement, CheckboxElement } from "react-hook-form-mui";

export const makeFieldElements = (schema: Record<string, any>) =>
  Object.entries(schema)
    .filter(([k]) => k !== "id")
    .map(([k, v]) => [
      k,
      v,
      {
        boolean: CheckboxElement,
        bigint: TextFieldElement,
        function: TextFieldElement,
        number: TextFieldElement,
        object: TextFieldElement,
        string: TextFieldElement,
        symbol: TextFieldElement,
        undefined: TextFieldElement,
      }[typeof v] ?? TextFieldElement,
    ])
    .map(([k, v, FieldElement]) => (
      <FieldElement key={k} type={typeof v} name={k} label={k} required />
    ));
