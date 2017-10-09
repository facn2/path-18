import { createStore } from 'redux';
import reducers from './reducers/index';

const storeConfigure = () => {
  const initialStore = {
    careers: [
      {title: 'doctor',
      tagline: 'saves lives',
      description: 'this is the amazing doctor who is just really rich!',
      image: 'doctor.svg'
    },
    {title: 'teacher',
    tagline: 'teaches stuff',
    description: 'this is the amazing teacher who would never be rich!',
    image: 'teacher.svg'
    }
    ]
  };

  const store = createStore(reducers, initialStore);

  return store;
};

export default storeConfigure;
