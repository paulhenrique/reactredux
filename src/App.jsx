import React from "react";
import { Provider } from "react-redux";
import { ChakraProvider, Container, Heading, Stack } from "@chakra-ui/react";
import Todo from "./components/Todo";

import store from "./store";

function App() {
  return (
    <ChakraProvider>
      <Container>
        <Stack spacing={6}>
          <Heading as="h1" size="4xl">
            Todo App
          </Heading>
        </Stack>
        <Provider store={store}>
          <div className="App">
            <Todo />
          </div>
        </Provider>
      </Container>
    </ChakraProvider>
  );
}

export default App;
