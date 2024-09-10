import { createBrowserRouter } from 'react-router-dom';
import { createRef } from 'react';

import MainPage from './MainPage';
import About from './about/About';
import WorkExperience from './work-experience/WorkExperience';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Contact from './contact/Contact';


export const routes:any[] = [
    { path:"/", name:"main", element: <MainPage />, nodeRef: createRef() },
    { path:"/about", name:"about", element: <About />, nodeRef: createRef() },
    { path:"/work-experience", name:"work-experience", element: <WorkExperience />, nodeRef: createRef() },
    { path:"/projects", name:"projects", element: <Projects />, nodeRef: createRef() },
    { path:"/skills", name:"skills", element: <Skills />, nodeRef: createRef() },
    { path:"/contact", name:"contact", element: <Contact />, nodeRef: createRef() }
];

export const router = createBrowserRouter(
    [{
        path:"/",
        element: <MainPage />,
        children: [
            { path:"/about", element: <About />},
            { path:"/work-experience", element: <WorkExperience />},
            { path:"/projects", element: <Projects />},
            { path:"/skills", element: <Skills />},
            { path:"/contact", element: <Contact />}
        ]
    }]
);