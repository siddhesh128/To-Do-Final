import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ToDoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <DateTimeInput label="reminder" source="reminder" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
