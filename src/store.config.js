import { createStore } from 'redux';
import reducers from './reducers/index';
import careerImg from './../public/images/imageedit_1_3201666448.gif';

const storeConfigure = () => {
  const initialStore = {
    careers: [
      { title: 'Doctor',
        tagline: 'Promots and Improves Health',
        description: 'A doctor is a professional who practises medicine, which is concerned with promoting, maintaining, or restoring health.',
        image: careerImg,
        degree: 'Medicine',
        grade_bagrut: '11.10',
        grade_psychometric: '760',
        universities: 'Hebrew University, Technion, Ben-Gurion University, Tel-Aviv University',
        salary_start: '9,000',
        salary_ten_year: '35,000'
      },
      { title: 'Psychologist',
        tagline: 'Treats Mental Health Issues',
        description: 'A psychologist is a mental health professional who evaluates and studies behavior and mental processes.',
        image: careerImg,
        degree: 'Psychology',
        grade_bagrut: '11.25',
        grade_psychometric: '740',
        universities: 'Hebrew University, Haifa University, Ben-Gurion University, Tel-Aviv University, Bar-Ilan University, Ariel University',
        salary_start: '6,000',
        salary_ten_year: '14,000'
      },
      { title: 'Programmer',
        tagline: 'Creates Computer Software',
        description: 'A programmer, computer programmer, developer, or software engineer is a person who creates computer software.',
        image: careerImg,
        degree: 'Computer Science',
        grade_bagrut: '11.25',
        grade_psychometric: '740',
        universities: 'Hebrew University, Technion, Haifa University, Ben-Gurion University, Tel-Aviv University, Bar-Ilan University, Ariel University',
        salary_start: '10,000',
        salary_ten_year: '20,000'
      },
      { title: 'Lawyer',
        tagline: 'Practices Law',
        description: 'A lawyer practices law, as an advocate. Working as a lawyer involves the practical application of abstract legal theories and knowledge to solve specific individualized problems.',
        image: careerImg,
        degree: 'Law',
        grade_bagrut: '10.00',
        grade_psychometric: '725',
        universities: 'Hebrew University, Haifa University, Tel-Aviv University, Bar-Ilan University',
        salary_start: '6,000',
        salary_ten_year: '20,000'
      },
      { title: 'Teacher',
        tagline: 'Helps Others to Acquire Knowledge',
        description: 'A teacher or an educator helps others to acquire knowledge, competences or values.',
        image: careerImg,
        degree: 'Education',
        grade_bagrut: '10.00',
        grade_psychometric: '650',
        universities: 'Hebrew University, Haifa University, Tel-Aviv University, Bar-Ilan University, Ben-Guriun University',
        salary_start: '6,000',
        salary_ten_year: '13,000'
      }
    ]
  };

  const store = createStore(reducers, initialStore);

  return store;
};

export default storeConfigure;
