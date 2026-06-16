import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, type UseFormProps } from 'react-hook-form';
import { Yup } from '../../config/yup';
import { createYupSchema, renderFormElements } from '../../utils/form-utils';
import type { FormDataModel } from '../../models/formData';

type Props = {
    onSubmit: (data: any) => void;
    formData: FormDataModel[];
};

const FormUser = ({ onSubmit, formData }: Props) => {
    const validationSchema = Yup.object().shape(createYupSchema(formData));

    const formOptions: UseFormProps<any> = {
        resolver: yupResolver(validationSchema),
        defaultValues: {},
    };

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<any>(formOptions);

    return (
        <div>
            <h2 className="text-xl mb-6">Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {renderFormElements(formData, errors, register)}
                <input
                    className="bg-teal-900 text-white px-4 py-2 rounded-lg active:bg-teal-700"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default FormUser;
