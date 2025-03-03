import { useState } from 'react';
import { useForm } from '../context/FormContext';

const DynamicForm = ({ setPreviewRef }) => {
  const { state, dispatch } = useForm();
  const [localData, setLocalData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_FORM_DATA', payload: localData });
  };

  return (
    <form ref={setPreviewRef} onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
      {/* Static Fields Rendering */}
      {state.selectedForm?.staticFields.map((field) => (
        <div key={field.name} className="mb-4">
          {field.type === 'header' && <h1 className="text-2xl font-bold">{field.content}</h1>}
        </div>
      ))}

      {/* Dynamic Fields Rendering */}
      {state.selectedForm?.dynamicFields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">{field.label}</label>

          {field.type === 'select' ? (
            <select
              name={field.name}
              value={localData[field.name] || ''}
              onChange={(e) => setLocalData({ ...localData, [field.name]: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              {field.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : field.type === 'text' ? (
            <input
              type="text"
              name={field.name}
              value={localData[field.name] || ''}
              onChange={(e) => setLocalData({ ...localData, [field.name]: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-1 border"
            />
          ) : (
            <textarea
              name={field.name}
              value={localData[field.name] || ''}
              rows="5"
              cols="50"
              placeholder="ما هو الموضوع..."
              onChange={(e) => setLocalData({ ...localData, [field.name]: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-1 border"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        حفظ وعرض التغييرات
      </button>
    </form>
  );
};

export default DynamicForm;
