import React from "react";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Center, Vertical } from "@dwidge/react-lib/Flex";
import { AutoForm } from "@dwidge/autoform";
import { SelectElement, TextFieldElement } from "react-hook-form-mui";
import { Stack } from "@mui/material";

const theme = createTheme();

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Foreground>
          <AutoForm
            values={{ abc: "abc" }}
            defaultValues={{ abc: "123" }}
            onSubmit={console.log}
          >
            <Stack gap={2} p={2}>
              <TextFieldElement name="contactNumber" label="Contact Number" />
              <SelectElement
                name="country"
                label="Country"
                required
                options={[{ id: "aaa", label: "AAA" }]}
                defaultValue=""
              />
            </Stack>
          </AutoForm>
        </Foreground>
      </Background>
    </ThemeProvider>
  );
};

const Foreground = styled(Vertical)`
  background-color: cyan;
  min-height: 200px;
  min-width: 200px;
  max-width: 500px;
  padding: 1em;
`;

const Background = styled(Center)`
  background-color: navy;
`;

export default App;
