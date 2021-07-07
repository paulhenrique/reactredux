import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  Input,
  Flex,
  useToast,
  Spacer,
} from "@chakra-ui/react";

function CourseList() {
  const tasks = useSelector((state) => state.data);
  const completeTasks = useSelector((state) => state.completed);
  const dispatch = useDispatch();
  const [task, setTask] = React.useState("");

  function addCourse() {
    dispatch({ type: "ADD_COURSE", title: task });
    toast({
      title: "Task adicionada.",
      description: `${task} foi adicionada a lista`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setTask("");
  }

  const removeTaskFromList = (id) => {
    dispatch({ type: "REMOVE_COURSE", id });
  };

  const addTaskToCompleteList = (id) => {
    dispatch({ type: "ADD_TASK_TO_COMPLETE", id });
  };

  const toast = useToast();

  const handleTaskText = ({ target: { value } }) => setTask(value);

  return (
    <>
      {tasks.map((course) => (
        <Box w="100%" my="2" py={2} px={3} borderWidth="1px" borderRadius="lg">
          <Flex align="center">
            <span>{course.title}</span>
            <Spacer></Spacer>
            <Button size="sm" onClick={() => addTaskToCompleteList(course.id)}>
              Completa
            </Button>
            <Button size="sm" onClick={() => removeTaskFromList(course.id)}>
              Remover
            </Button>
          </Flex>
        </Box>
      ))}

      <ul></ul>
      <Flex>
        <FormControl>
          <Input
            onInput={(e) => handleTaskText(e)}
            type="text"
            value={task}
            placeholder="Adicione um novo item..."
          />
        </FormControl>
        <div>
          <Button ml="2" size="md" pa="2" onClick={addCourse}>
            Adicionar Curso
          </Button>
        </div>
      </Flex>
    </>
  );
}

export default CourseList;
