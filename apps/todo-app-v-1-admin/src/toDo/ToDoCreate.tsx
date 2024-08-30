import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ToDoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <DateTimeInput label="reminder" source="reminder" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
