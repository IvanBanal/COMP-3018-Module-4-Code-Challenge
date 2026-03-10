import { Request, Response} from "express";
import * as service from "../services/projectService";
import { HTTP_STATUS } from "../../../constants/httpConstants";

export const getProjects = (req: Request, res: Response) => {
    const projects = service.getAllProjects();

    res.status(HTTP_STATUS.OK).json({
        success: true,
        data: projects
    });
};

export const getProject = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const project = service.getProjectById(id);

    if (!project) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            success: false,
            message: "Project not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        success: true,
        data: project
    });
};

export const createProject = (req: Request, res: Response) => {
    // Destructing pulls the name and status fields out of req.body.
    const { name, status } = req.body; 
    const project = service.createProject(name, status);

    res.status(HTTP_STATUS.CREATED).json({
        success: true,
        data: project
    });
};

export const updateProject = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { name, staus } = req.body;
    const project = service.updateProject(id, name, status);

    if (!project) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            success: false,
            message: "Project not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        success: true, 
        data: project
    });
};

export const deleteProject = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const deleted = service.deleteProject(id);

    if (!deleted) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            success: false,
            message: "Project not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        success: true,
        message: "Project deleted"
    });
};

