import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 10, // Nombre d'utilisateurs virtuels
    duration: '20s', // Durée du test
};

export default function () {
    sleep(1); // Attendre 1 seconde entre les requêtes
}
