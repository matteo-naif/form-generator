import { ReactNode } from 'react';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { FormDataModel } from '../models/formData';
import { BaseSchema } from 'yup';

function renderFormElements(
    formData: FormDataModel[],
    errors: FieldErrorsImpl<any>,
    register: UseFormRegister<any>
): ReactNode {
    return formData.map((field) => {
        if (field.type === 'separator')
            return (
                <div key={field.id}>
                    <h2 className="mt-12 mb-6 text-xl">{field.label}</h2>
                </div>
            );

        return (
            <div key={field.id} className="mb-6">
                <label className="text-gray-900 block mb-1" htmlFor={field.id}>
                    {field.label}
                </label>
                {getFieldInput(field, register)}
                <div className="text-red-500 text-sm mt-1">
                    {errors && (errors[field.id]?.message as string)}
                </div>
            </div>
        );
    });
}

function getFieldInput(
    field: FormDataModel,
    register: UseFormRegister<any>
): ReactNode {
    if ('placeholder' in field) {
        return (
            <input
                id={field.id}
                className="border border-gray-300 px-2 py-1 rounded-lg w-full text-base"
                type={field.type}
                placeholder={field.placeholder}
                {...register(field.id)}
            />
        );
    }

    if (field.type === 'radio') {
        return (
            <div className="flex gap-3">
                {field.options.map((option, i) => (
                    <div key={option.value}>
                        <input
                            checked={!i}
                            id={field.id + option.value}
                            type="radio"
                            value={option.value}
                            className="mr-1"
                            {...register(field.id)}
                        />
                        <label
                            htmlFor={field.id + option.value}
                            className="text-base"
                        >
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        );
    }

    if (field.type === 'select') {
        return (
            <div className="flex gap-3">
                <select
                    className="border border-gray-300 px-2 py-1 rounded-lg w-full text-base"
                    {...register(field.id)}
                >
                    {field.options.map((option) => (
                        <option
                            id={field.id + option.value}
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    if (field.type === 'checkbox') {
        return (
            <div className="flex flex-col gap-3">
                {field.options.map((option) => (
                    <div key={option.value}>
                        <input
                            type="checkbox"
                            id={field.id + option.value}
                            value={option.value}
                            className="mr-1"
                            {...register(field.id)}
                        />
                        <label
                            htmlFor={field.id + option.value}
                            className="text-base"
                        >
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        );
    }
}

function getFormSchema(schema: any, config: any) {
    const {
        id,
        validations,
    }: {
        id: string;
        validations: BaseSchema;
    } = config;

    if (!validations) return schema;

    schema[id] = validations;
    return schema;
}

function createYupSchema(formData: FormDataModel[]) {
    return formData.reduce(getFormSchema, {});
}

export { renderFormElements, createYupSchema };
