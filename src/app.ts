import express, { Express } from "express";
import projectRoutes from "../src/api/v1/routes/projectRoutes";
import adminRoutes from "../src/api/v1/routes/adminRoutes";

// Initialize Express application
const app: Express = express();

// Body parsing middleware
app.use(express.json());

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Health Check Endpoint. 
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

// API Routes
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/admin", adminRoutes);

export default app;

