import { Router } from "express";
import * as controller from "../controllers/projectController";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { auth } from "firebase-admin";

const router: Router = Router();

router.get(
    "/",
    authenticate,
    isAuthorized({ hasRole: ["admin", "lead", "developer"] }),
    controller.getProjects
);

router.get(
    "/:id",
    authenticate,
    isAuthorized({ hasRole: ["admin", "lead", "developer"] }),
    controller.getProject
);

router.post(
    "/",
    authenticate,
    isAuthorized({ hasRole: ["admin", "lead"]}),
    controller.createProject
);

router.put(
    "/:id",
    authenticate,
    isAuthorized({ hasRole: ["admin", "lead"]}),
    controller.updateProject
);

router.delete(
    "/:id",
    authenticate,
    isAuthorized({ hasRole: ["admin"]}),
    controller.deleteProject
);

export default router;



