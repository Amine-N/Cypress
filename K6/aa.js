import http from 'k6/http';
import { check } from 'k6';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '2m', target: 10 },  // Monte jusqu'à 10 utilisateurs en 2 minutes
        { duration: '3m', target: 10 },  // Maintient 10 utilisateurs pendant 3 minutes
        { duration: '2m', target: 20 },  // Monte jusqu'à 20 utilisateurs en 2 minutes
        { duration: '3m', target: 20 },  // Maintient 20 utilisateurs pendant 3 minutes
        { duration: '2m', target: 30 },  // Monte jusqu'à 30 utilisateurs en 2 minutes
        { duration: '3m', target: 30 },  // Maintient 30 utilisateurs pendant 3 minutes
        { duration: '2m', target: 40 },  // Monte jusqu'à 40 utilisateurs en 2 minutes
        { duration: '3m', target: 40 },  // Maintient 40 utilisateurs pendant 3 minutes
        { duration: '2m', target: 50 },  // Monte jusqu'à 50 utilisateurs en 2 minutes
        { duration: '3m', target: 50 },  // Maintient 50 utilisateurs pendant 3 minutes
        { duration: '2m', target: 0 },   // Redescend à 0 utilisateurs en 2 minutes
    ],
    thresholds: {
        http_req_duration: ['p(95)<300'], // 95% des requêtes doivent être en dessous de 300ms
    },
};

export default function () {
    let res = http.get('https://example.com'); // Remplacez par l'URL de votre serveur
    check(res, {
        'response time is below 300ms': (r) => r.timings.duration < 300,
    });
    sleep(1); // Ajoute un délai d'une seconde entre les requêtes
}
