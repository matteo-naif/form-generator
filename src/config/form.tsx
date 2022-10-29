import { FormDataModel } from '../models/formData';
import { Yup } from './yup';

export const formData: FormDataModel[] = [
    {
        id: 'fullname',
        label: 'Full name',
        placeholder: 'Enter your name',
        type: 'text',
        validations: Yup.string().required(),
    },
    {
        id: 'email',
        label: 'Email',
        placeholder: 'Enter your best e-mail',
        type: 'email',
        validations: Yup.string().email().required(),
    },
    {
        type: 'separator',
        id: 'separator-dati-personali',
        label: 'Dati personali',
    },
    {
        id: 'gender',
        label: 'Gender',
        type: 'radio',
        options: [
            { label: 'Male', value: 'M' },
            { label: 'Female', value: 'F' },
        ],
        validations: Yup.string().required(),
    },
    {
        id: 'job',
        label: 'Job',
        type: 'select',
        options: [
            { label: 'Frontend', value: 'frontend' },
            { label: 'Backend', value: 'backend' },
            { label: 'Fullstack', value: 'fullstack' },
        ],
        validations: Yup.string().required(),
    },
    {
        id: 'food',
        label: 'Food',
        type: 'checkbox',
        options: [
            { label: '🍝 Pasta', value: 'pasta' },
            { label: '🍕 Pizza', value: 'pizza' },
            { label: '🍲 Goulash', value: 'goulash' },
        ],
        validations: Yup.array().of(Yup.string()),
    },
    {
        id: 'age',
        label: 'Age',
        placeholder: '',
        type: 'number',
        validations: Yup.number().required(),
    },
];
