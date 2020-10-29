import express from 'express';
import { superImportantService, userService } from "../controller/super-important-service";

const router = express.Router();

router.get('/', function(req, res) {
    const random = Math.random() * 1000;
    /*if (random >= 300 && random <= 400) {
        res.status(429);
        res.send(JSON.stringify({"error": "This is bad"}));
    } else {
        setTimeout(() => {
            res.send(superImportantService());
        }, random);
    }*/
    res.send(superImportantService());
});

router.get('/users', function(req, res) {
    res.status(200);
    res.send(userService());
});

export default router