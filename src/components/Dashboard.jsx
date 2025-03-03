import { useState } from 'react';

import { FormProvider } from '../context/FormContext';
import FormSelector from './FormSelector';
import DynamicForm from './DynamicForm';
import FormPreview from './FormPreview';

const Dashboard = () => {
    const [previewRef, setPreviewRef] = useState(null);

    return (
        <FormProvider>
            <div className="w-full flex flex-col h-auto bg-gray-100 h-auto" dir="rtl"> 
                <div className="w-auto flex items-center justify-between px-6 pt-6 bg-white h-auto border-b border-gray-200 rounded-xl mx-12 mt-3">
                    <FormSelector />
                </div>
                <div className="flex sm:flex-row flex-col w-full py-6 border-l gap-24 border-gray-100 h-auto items-start justify-center ">
                    <DynamicForm setPreviewRef={setPreviewRef} />
                    <FormPreview previewRef={previewRef} />
                </div>
            </div>
        </FormProvider>
    );
};

export default Dashboard;