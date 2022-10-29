import { Yup } from './config/yup';
import { useForm, UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createYupSchema, renderFormElements } from './utils/form';
import { useState } from 'react';
import { formData } from './config/form';

const validationSchema = Yup.object().shape(createYupSchema(formData));

const formOptions: UseFormProps<any> = {
    resolver: yupResolver(validationSchema),
    defaultValues: {},
};

function App() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<any>(formOptions);

    const onSubmit = (data: any) => {
        console.log(data);
        setData(data);
    };

    const [data, setData] = useState();

    return (
        <>
            <div className="grid grid-cols-2 gap-12 max-w-5xl mx-auto m-6">
                <div className="">
                    <h1 className="text-xl mb-6">Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {renderFormElements(formData, errors, register)}
                        <button
                            className="bg-teal-900 text-white px-4 py-2 rounded-lg active:bg-teal-700"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div>
                    <h1 className="text-xl mb-6">Result</h1>
                    {data ? (
                        <div className="bg-gray-800 text-white p-6">
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        </div>
                    ) : (
                        <p className="text-gray-400 italic">
                            Submit the form to show data here
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
