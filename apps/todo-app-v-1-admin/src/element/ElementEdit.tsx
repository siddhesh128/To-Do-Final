import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ComponentTitle } from "../component/ComponentTitle";

export const ElementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="component.id"
          reference="Component"
          label="component"
        >
          <SelectInput optionText={ComponentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
