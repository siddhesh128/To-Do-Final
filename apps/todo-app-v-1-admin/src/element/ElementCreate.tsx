import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ComponentTitle } from "../component/ComponentTitle";

export const ElementCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="component.id"
          reference="Component"
          label="component"
        >
          <SelectInput optionText={ComponentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
