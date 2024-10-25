import express from 'express';

import { AuthRoutes } from '../modules/Auth/auth.route';
import { UserRoutes } from '../modules/Registration/user.route';



import { BlogRoutes } from '../modules/Blog/blog.route';
import { ExperienceRoutes } from '../modules/Experience/experience.route';
import { ProjectRoutes } from '../modules/Project/project.route';
import { SkillRoutes } from '../modules/Skill/skill.route';



const router=express.Router()



const modulerRoutes=[

    {
        path:'/auth',
        route:UserRoutes,
        
    },
    {
        path:'/auth',
        route:AuthRoutes,
        
    },
   
   
   
    {
        path:'/blog',
        route:BlogRoutes,
        
    },
    {
        path:'/experince',
        route:ExperienceRoutes,
        
    },
    {
        path:'/skill',
        route:SkillRoutes,
        
    },
    {
        path:'/project',
        route:ProjectRoutes,
        
    },
   
 
]

modulerRoutes.forEach(route=>router.use(route.path,route.route))

export default router