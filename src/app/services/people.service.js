import axios from 'axios';

const getPeopleService = () => {
    return axios
        .get('http://localhost:3000/people')
        .then((res)=> {
            console.log(res);
            return (res);
        })
};

export { getPeopleService };