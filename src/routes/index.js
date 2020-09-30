import express from 'express';
import { superImportantService, userService } from "../controller/super-important-service";

const router = express.Router();

router.get('/', function(req, res, next) {
    res.send(superImportantService());
});

router.get('/users', function(req, res, next) {
    res.status(200);
    res.send(userService());
});

export default router