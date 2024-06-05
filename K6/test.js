import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  thresholds: {
    http_req_duration: ['med<200'],
  },
};


export default function() {
  http.get('https://test.k6.io');
  sleep(1);
}
