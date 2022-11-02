import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { it, describe, expect } from 'vitest';
import { Yup } from '../config/yup';
import { FormDataModel } from '../models/formData';
import { createYupSchema, renderFormElements } from './form-utils';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen, userEvent } from '../utils/test-utils';

describe('Form utils', () => {
    describe('renderFormElements', () => {
        it('Return an array of ReactNode', () => {
            const formData: FormDataModel[] = [
                {
                    id: 'id-01',
                    label: 'label',
                    type: 'input',
                    placeholder: 'placeholder',
                    validations: Yup.string(),
                },
            ];

            const validationSchema = Yup.object().shape(
                createYupSchema(formData)
            );

            const formOptions: UseFormProps<any> = {
                resolver: yupResolver(validationSchema),
                defaultValues: {},
            };

            const { result } = renderHook<any, UseFormReturn>(() =>
                useForm<any>(formOptions)
            );

            const fnResult = renderFormElements(
                formData,
                result.current.formState.errors,
                result.current.register
            );

            expect(fnResult.length).toBe(1);
        });
    });
});
