import { useState } from 'react';
import FormResult from './components/FormResult/FormResult';
import FormUser from './components/FormUser/FormUser';
import { formData } from './config/form';

function App() {
    const [data, setData] = useState();
    const onSubmit = (data: any) => setData(data);

    return (
        <>
            <div className="grid grid-cols-2 gap-12 max-w-5xl mx-auto m-6">
                <FormUser onSubmit={onSubmit} formData={formData} />
                <FormResult data={data} />
            </div>
        </>
    );
}

export default App;
