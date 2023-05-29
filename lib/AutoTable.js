// Copyright DWJ 2023.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

export const calcColumns = (schema) =>
  Object.entries(schema)
    .filter(([k, v]) => k !== "id")
    .map(([k, v]) => ({
      field: k,
      headerName: k,
      width: 200,
    }));
