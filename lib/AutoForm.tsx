// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { useForm, useFormContext } from "react-hook-form";
import { FormContainer } from "react-hook-form-mui";

export function AutoForm({ values, defaultValues, onSubmit, children }) {
  const methods = useForm({ defaultValues });
  useEffect(() => {
    if (values) methods.reset(values);
    else methods.reset(defaultValues);
  }, [values, methods, defaultValues]);

  return (
    <FormContainer
      formContext={{ ...methods, defaultValues }}
      FormProps={{ id: defaultValues?.id }}
      onSuccess={(data) => {
        onSubmit(data);
      }}
    >
      {children}
    </FormContainer>
  );
}

export function ResetButton() {
  const { reset, values } = useFormContext();

  return (
    <Button
      onClick={() => {
        reset(values);
      }}
    >
      Reset
    </Button>
  );
}

export const makeFieldElements = (schema) =>
  Object.entries(schema)
    .filter(([k, v]) => k !== "id")
    .map(([k, v]) => [
      k,
      { boolean: CheckboxElement }[typeof v] ?? TextFieldElement,
    ])
    .map(([k, FieldElement]) => <FieldElement name={k} label={k} required />);
