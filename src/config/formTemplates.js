import imgUni from '../assets/university-logo.png';
import imgCollege from '../assets/college-logo.png';
import imgCollegeMed from '../assets/R.png';

export const FORM_TEMPLATES = {
  admission: {
    colleges: {
      FCI: {
        staticFields: [
          { name: 'universityHeader', type: 'imgUni', content: imgUni },
          { name: 'universityHeader', type: 'imgCollege', content: imgCollege },
          { name: 'universityHeader', type: 'header', content: 'طلب توفير دعم' },
          { name: 'welcome', type: 'welcome', content: 'تحية طيبة وبعد ....' },
          { name: 'end', type: 'end', content: 'وتفضلوا سيادتكم بقبول وافر الاحترام والتقدير' },
         
        ],
        dynamicFields: [
          { name: 'السيد الدكتور', label: ' السيد الدكتور/', type: 'text' },
          { name: 'fullName', label: '', type: 'text-area' },
          { name: 'endName', label: 'عميد الكلية', type: 'text' },
          // { name: 'major', label: 'المجال', type: 'select', options: ['CS', 'IT', 'AI'] },
          // { name: 'fullName', label: 'الاسم الكامل', type: 'text' },
          // { name: 'major', label: 'المجال', type: 'select', options: ['CS', 'IT', 'AI'] },
        ],
      },
      medicine: {
        staticFields: [
          { name: 'universityHeader', type: 'imgUni', content: imgUni },
          { name: 'universityHeader', type: 'imgCollege', content: imgCollegeMed },
          { name: 'universityHeader', type: 'header', content: 'طلب توفير دعم' },
          { name: 'welcome', type: 'welcome', content: 'تحية طيبة وبعد ....' },
          { name: 'end', type: 'end', content: 'وتفضلوا سيادتكم بقبول وافر الاحترام والتقدير' },
        ],
        dynamicFields: [
          { name: 'السيد الدكتور', label: ' السيد الدكتور/', type: 'text' },
          { name: 'fullName', label: '', type: 'text-area' },
          { name: 'endName', label: 'عميد الكلية', type: 'text' },
          // { name: 'major', label: 'المجال', type: 'select', options: ['CS', 'IT', 'AI'] },
          // { name: 'fullName', label: 'الاسم الكامل', type: 'text' },
          // { name: 'major', label: 'المجال', type: 'select', options: ['CS', 'IT', 'AI'] },
        ],
      },
    },
  },
  scholarship: {
    colleges: {
      FCI: {
        staticFields: [
          { name: 'universityHeader', type: 'imgUni', content: imgUni },
          { name: 'universityHeader', type: 'imgCollege', content: imgCollege },
          { name: 'universityHeader', type: 'header', content: 'طلب تزويد درجات' },
          { name: 'welcome', type: 'welcome', content: 'تحية طيبة وبعد ....' },
          { name: 'end', type: 'end', content: 'وتفضلوا سيادتكم بقبول وافر الاحترام والتقدير' },
        ],
        dynamicFields: [
          { name: 'السيد الدكتور', label: ' السيد الدكتور/', type: 'text' },
          { name: 'fullName', label: '', type: 'text-area' },
          { name: 'endName', label: 'عميد الكلية', type: 'text' },
          // { name: 'major', label: 'المجال', type: 'select', options: ['CS', 'IT', 'AI'] },
          // { name: 'fullName', label: 'الاسم الكامل', type: 'text' },
          // { name: 'major', label: 'المجال', type: 'select', options: ['CS', 'IT', 'AI'] },
        ],
      },
      medicine: {
        staticFields: [
          { name: 'universityHeader', type: 'imgUni', content: imgUni },
          { name: 'universityHeader', type: 'imgCollege', content: imgCollegeMed },
          { name: 'universityHeader', type: 'header', content: 'طلب تزويد درجات' },
          { name: 'welcome', type: 'welcome', content: 'تحية طيبة وبعد ....' },
          { name: 'end', type: 'end', content: 'وتفضلوا سيادتكم بقبول وافر الاحترام والتقدير' },
        ],
        dynamicFields: [
          { name: 'السيد الدكتور', label: ' السيد الدكتور/', type: 'text' },
          { name: 'fullName', label: '', type: 'text-area' },
          { name: 'endName', label: 'عميد الكلية', type: 'text' },
          // { name: 'major', label: 'المجال', type: 'select', options: ['CS', 'IT', 'AI'] },
          // { name: 'fullName', label: 'الاسم الكامل', type: 'text' },
          // { name: 'major', label: 'المجال', type: 'select', options: ['CS', 'IT', 'AI'] },
        ],
      },
    },
  },
};