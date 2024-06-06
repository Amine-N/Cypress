import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 5,
  iterations:200,
  
};


export default function() {
  http.get('https://test.k6.io/public/crocodiles/');
  sleep(1);
}
