import axios from 'axios';

const fetchCareers = () => {
  const request = axios.get('http://localhost:9876/api/careers');
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: 'FETCH_CAREERS', payload: data });
    });
  };
};

export default fetchCareers;
