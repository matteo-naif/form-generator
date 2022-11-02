type Props = {
    data: any;
};

const FormResult = ({ data }: Props) => {
    return (
        <div>
            <h2 className="text-xl mb-6">Result</h2>
            {data ? (
                <div className="bg-gray-800 text-white p-6">
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ) : (
                <p className="text-gray-400 italic" role="placeholder">
                    Submit the form to show data here
                </p>
            )}
        </div>
    );
};

export default FormResult;
