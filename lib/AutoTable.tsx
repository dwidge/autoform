// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

export const calcColumns = (schema: { [k: string]: any }) =>
  Object.entries(schema)
    .filter(([k]: [k: string, v: any]) => k !== "id")
    .map(([k]: [k: string, v: any]) => ({
      field: k,
      headerName: k,
      width: 200,
    }));
