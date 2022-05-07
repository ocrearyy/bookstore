import axios from 'axios';

const apiId = 'kqhnoIPtj6rQM6dNWsge';

axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi').then((res) => {
console.log('RESPONSE: ', res )
})
