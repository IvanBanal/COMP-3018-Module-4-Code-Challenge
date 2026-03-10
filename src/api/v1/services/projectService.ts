import { Project } from "../models/interfaces"
import { projects } from "../data/projectsData"
 
export const getAllProjects = () => {
    return projects;
};

export const getProjectById = (id: number) => {
    return projects.find(project => project.id === id);
};

export const createProject = (name: string, status: string) => {
    const newProject: Project = {
        id: projects.length + 1,
        name,
        status,
        createdAt: new Date().toISOString()
    };

    projects.push(newProject);

    return newProject;
};

export const updateProject = (id: number, name: string, status: string) => {
    const project = projects.find(project => project.id === id);
    if (!project) return null;

    project.name = name;
    project.status = status;

    return projects;
};

export const deleteProject = (id: number) => {
    const index = projects.findIndex(project => project.id === id);

    if (index === -1) return false;

    projects.splice(index, 1);
    return true;
};

