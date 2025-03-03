import { useRef, useEffect } from 'react';
import { useForm } from '../context/FormContext';
import { generatePDF } from '../services/pdfService';

const FormPreview = ({ previewRef }) => {
  const { state } = useForm();
  const pdfRef = useRef(null);

  useEffect(() => {
    if (previewRef?.current) {
      pdfRef.current = previewRef.current;
    }
  }, [previewRef]);

  const handleSavePDF = async () => {
    if (pdfRef.current) {
      // await generatePDF(pdfRef.current, `SVU_${state.selectedForm?.title}_Form`);
      await generatePDF(pdfRef.current, `طلب دعم`);
    }
  };

  const staticFields = state.selectedForm?.staticFields || [];
  const dynamicFields = state.selectedForm?.dynamicFields || [];

  return (
    <div className="h-full sm:w-[700px] w-full bg-white p-6 shadow-sm rounded-xl" dir="rtl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">معاينة النموذج</h2>
        <button
          onClick={handleSavePDF}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          disabled={!state.selectedForm}
        >
          حفظ كملف PDF
        </button>
      </div>

      {/* PDF Content Wrapper */}
      <div ref={pdfRef} className="border rounded-lg p-4 min-h-[700px] bg-white">
        {state.selectedForm ? (
          <div className="space-y-4">
            {/* Static Content Preview */}
            {staticFields.length > 0 && (
              <div className="mb-4 flex flex-col items-center">
                <div className="w-full flex justify-between items-center">
                  <div>
                    {staticFields.find((field) => field.type === 'imgUni') && (
                      <img
                        src={staticFields.find((field) => field.type === 'imgUni').content}
                        alt="university-logo"
                        className="w-[120px]"
                      />
                    )}
                  </div>
                  <div>
                    {staticFields.find((field) => field.type === 'imgCollege') && (
                      <img
                        src={staticFields.find((field) => field.type === 'imgCollege').content}
                        alt="college-logo"
                        className="w-[100px]"
                      />
                    )}
                  </div>
                </div>

                {staticFields.find((field) => field.type === 'header') && (
                  <h3 className="text-lg font-semibold pb-2">
                    {staticFields.find((field) => field.type === 'header').content}
                  </h3>
                )}
              </div>
            )}
            <hr />
            {/* Dynamic Content Preview without map */}
            {dynamicFields.length > 0 && (
              <div className="mb-4">
                {dynamicFields[0] && (
                  <div className="mb-2 flex items-center gap-2 pr-4">
                    <label className="block font-medium">{dynamicFields[0].label}</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded-md">
                      {state.formData[dynamicFields[0].name] || '[فارغ]'}
                    </div>
                  </div>
                )}

                {staticFields.length > 0 && (
                  <div className="mb-4 flex flex-col items-center">
                    {staticFields.find((field) => field.type === 'welcome') && (
                      <h3 className="text-lg font-semibold pb-2">
                        {staticFields.find((field) => field.type === 'welcome').content}
                      </h3>
                    )}
                  </div>
                )}

                {dynamicFields[1] && (
                  <div className="mb-2">
                    <label className="block font-medium mb-2">{dynamicFields[1].label}</label>
                    <div
                      className="mt-1 p-2 bg-gray-50 rounded-md break-words min-h-auto content-justfiy"
                      style={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}
                    >
                      {state.formData[dynamicFields[1].name] || '[فارغ]'}
                    </div>
                  </div>
                )}

                {staticFields.length > 0 && (
                  <div className="mb-4 flex flex-col items-center">
                    {staticFields.find((field) => field.type === 'end') && (
                      <h3 className="text-lg font-semibold pb-2">
                        {staticFields.find((field) => field.type === 'end').content}
                      </h3>
                    )}
                  </div>
                )}

                {dynamicFields[2] && (
                  <div className="mb-2 flex flex-col items-start pl-4" dir="ltr">
                    <label className="block font-medium mb-6">{dynamicFields[2].label}</label>
                    <div className="mt-1 p-2 bg-gray-50 rounded-md">
                      {state.formData[dynamicFields[2].name] || '[فارغ]'}
                    </div>
                  </div>
                )}

                {/* Add more fields manually if needed */}
              </div>
            )}
          </div>
        ) : (
          <div className="text-gray-500 text-center py-12">الرجاء اختيار النموذج المناسب</div>
        )}
      </div>
    </div>
  );
};

export default FormPreview;
