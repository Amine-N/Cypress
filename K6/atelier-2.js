import http from 'k6/http';
import { check } from 'k6';

export let options = {
    vus: 20, // Nombre d'utilisateurs virtuels
    iterations: 300, // Nombre total de requêtes
    thresholds: {
        http_req_duration: ['p(90)<400'], // 90% des requêtes doivent être en dessous de 400ms
    },
};

export default function () {
    // La fonction exportée doit être présente, même si elle est vide
}
