const Career = require('./career_model.js');

const careers = [
  new Career({ title: 'Doctor',
    tagline: 'Promots and Improves Health',
    description: 'A doctor is a professional who practises medicine, which is concerned with promoting, maintaining, or restoring health.',
    image: 'https://cdn4.iconfinder.com/data/icons/avatar-male/920/Accountant_Character-512.png',
    degree: 'Medicine',
    grade_bagrut: '11.10',
    grade_psychometric: '760',
    universities: 'Hebrew University, Technion, Ben-Gurion University, Tel-Aviv university',
    salary_start: '9,000',
    salary_ten_year: '35,000'
  }),
  new Career({
    title: 'Psychologist',
    tagline: 'Treats Mental Health Issues',
    description: 'A psychologist is a mental health professional who evaluates and studies behavior and mental processes.',
    image: 'https://cdn4.iconfinder.com/data/icons/avatar-male/920/Accountant_Character-512.png',
    degree: 'Psychology',
    grade_bagrut: '11.25',
    grade_psychometric: '740',
    universities: 'Hebrew University, Haifa University, Ben-Gurion University, Tel-Aviv University, Bar-Ilan University, Ariel University',
    salary_start: '6,000',
    salary_ten_year: '14,000'
  }),
  new Career({
    title: 'Programmer',
    tagline: 'Creates Computer Software',
    description: 'A programmer, computer programmer, developer, or software engineer is a person who creates computer software.',
    image: 'https://cdn4.iconfinder.com/data/icons/avatar-male/920/Accountant_Character-512.png',
    degree: 'Computer Science',
    grade_bagrut: '11.25',
    grade_psychometric: '740',
    universities: 'Hebrew University, Technion, Haifa University, Ben-Gurion University, Tel-Aviv University, Bar-Ilan University, Ariel University',
    salary_start: '10,000',
    salary_ten_year: '20,000'
  }),
  new Career({ title: 'Lawyer',
    tagline: 'Practices Law',
    description: 'A lawyer practices law, as an advocate. Working as a lawyer involves the practical application of abstract legal theories and knowledge to solve specific individualized problems.',
    image: 'https://cdn4.iconfinder.com/data/icons/avatar-male/920/Accountant_Character-512.png',
    degree: 'Law',
    grade_bagrut: '10.00',
    grade_psychometric: '725',
    universities: 'Hebrew University, Haifa University, Tel-Aviv University, Bar-Ilan University',
    salary_start: '6,000',
    salary_ten_year: '20,000'
  }),
  new Career({
    title: 'Teacher',
    tagline: 'Helps Others to Acquire Knowledge',
    description: 'A teacher or an educator helps others to acquire knowledge, competences or values.',
    image: 'https://cdn4.iconfinder.com/data/icons/avatar-male/920/Accountant_Character-512.png',
    degree: 'Education',
    grade_bagrut: '10.00',
    grade_psychometric: '650',
    universities: 'Hebrew University, Haifa University, Tel-Aviv University, Bar-Ilan University, Ben-Guriun University',
    salary_start: '6,000',
    salary_ten_year: '13,000'
  })
];
