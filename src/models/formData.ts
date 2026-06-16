import type { HTMLInputTypeAttribute } from "react";
import type { Schema } from "yup";

type FormBaseModel = {
    id: string;
    label: string;
};

type FormDataSeparatorModel = {
    type: 'separator';
};

type FormControllerBaseModel = {
    validations: Schema;
};

type FormInputModel = FormControllerBaseModel & {
    type: HTMLInputTypeAttribute;
    placeholder: string;
};

type FormSelectModel = FormControllerBaseModel & {
    type: 'select' | 'radio' | 'checkbox';
    options: { label: string; value: string }[];
};

type FormDataModel = FormBaseModel &
    (FormInputModel | FormSelectModel | FormDataSeparatorModel);

export type { FormDataModel };
