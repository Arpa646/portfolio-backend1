"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/Auth/auth.route");
const user_route_1 = require("../modules/Registration/user.route");
const blog_route_1 = require("../modules/Blog/blog.route");
const experience_route_1 = require("../modules/Experience/experience.route");
const project_route_1 = require("../modules/Project/project.route");
const skill_route_1 = require("../modules/Skill/skill.route");
const router = express_1.default.Router();
const modulerRoutes = [
    {
        path: '/auth',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/blog',
        route: blog_route_1.BlogRoutes,
    },
    {
        path: '/experince',
        route: experience_route_1.ExperienceRoutes,
    },
    {
        path: '/skill',
        route: skill_route_1.SkillRoutes,
    },
    {
        path: '/project',
        route: project_route_1.ProjectRoutes,
    },
];
modulerRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
