// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { DefaultValues, useForm, useFormContext } from "react-hook-form";
import { FormContainer } from "react-hook-form-mui";

export function AutoForm<T extends Record<string, any>>({
  values,
  defaultValues,
  onSubmit,
  children,
}: React.PropsWithChildren<{
  values: T;
  defaultValues: DefaultValues<T>;
  onSubmit: (v: T) => void;
}>) {
  const methods = useForm({ defaultValues });
  useEffect(() => {
    if (values) methods.reset(values);
    else methods.reset(defaultValues);
  }, [values, methods, defaultValues]);

  return (
    <FormContainer
      formContext={methods}
      FormProps={{ id: defaultValues?.id }}
      onSuccess={(data) => {
        onSubmit(data);
        methods.reset(defaultValues);
      }}
    >
      {children}
    </FormContainer>
  );
}

export function ResetButton({}) {
  const c = useFormContext();

  return (
    <Button
      onClick={() => {
        c.reset(c.formState.defaultValues);
      }}
    >
      Reset
    </Button>
  );
}
