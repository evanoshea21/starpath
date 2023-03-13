import axios from 'axios';
console.log('env in API:\n', process.env.SERVER_IP, process.env.PORT);

 function axiosCall(method, endpoint, data) {
  const url = `http://localhost:3000/${endpoint}`;


  return new Promise((resolve, reject) => {
    axios({method, url, data })
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      reject(err);
    })
  })
}
//////////////////////////////////////////////////

export function getAllInvolvedTrades(userID) {
  return new Promise((resolve,reject) => {
    axiosCall('post', '/trades/involved', {userID})
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      reject(err);
    })
  })//end Promise
}

export function createUser(userObj) {
  return new Promise((resolve,reject) => {
    axiosCall('post', '/users', userObj)
    .then(res => {
      resolve(res);
    })
    .catch(err => {
      reject(err);
    })
  })//end Promise
}