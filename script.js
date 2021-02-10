import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '5s', target: 250 },
    { duration: '10s', target: 500 },
    { duration: '15s', target: 1000},
    { duration: '20s', target: 2000 },
    { duration: '40s', target: 3000},
  ]
};

export default function () {
  http.get('http://localhost:3040/api/bechampions/products/reviews/sortMostRelevant');
  sleep(1);
}
