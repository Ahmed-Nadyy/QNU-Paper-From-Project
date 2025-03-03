import { useForm } from '../context/FormContext';
import { FORM_TEMPLATES } from '../config/formTemplates';

const FormSelector = () => {
  const { dispatch } = useForm();

  const handleFormSelect = (formType, college) => {
    const selectedForm = FORM_TEMPLATES[formType]?.colleges[college];
    dispatch({ type: 'SET_SELECTED_FORM', payload: selectedForm });
  };

  return (
    <div className="mb-8 items-center flex justify-center gap-12" dir="rtl">
      <div className="space-y-2">
        <label className="block text-sm font-medium">نوع الطلب</label>
        <select
          onChange={(e) => handleFormSelect(e.target.value, 'FCI')}
          className="w-full p-2 border rounded-md"
        >
          {Object.keys(FORM_TEMPLATES).map((formType) => (
            <option key={formType} value={formType}>
              {formType.charAt(0).toUpperCase() + formType.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">الكلية</label>
        <select
          onChange={(e) => handleFormSelect('admission', e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          {Object.keys(FORM_TEMPLATES.admission.colleges).map((college) => (
            <option key={college} value={college}>
              {college.charAt(0).toUpperCase() + college.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormSelector;