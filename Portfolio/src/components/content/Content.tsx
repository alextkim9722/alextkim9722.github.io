import { useLocation, useOutlet, createBrowserRouter, RouteObject } from 'react-router-dom'
import { useEffect, useState, createRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import About from '../about/About'
import Projects from '../projects/Projects'

import styles from './Content.module.css'
import WorkExperience from '../work-experience/WorkExperience'
import Sidebar from '../sidebar/Sidebar'

const routes:any[] = [
    { path:"/", name:"main", element: <MainPage />, nodeRef: createRef() },
    { path:"/about", name:"about", element: <About />, nodeRef: createRef() },
    { path:"/work-experience", name:"work-experience", element: <WorkExperience />, nodeRef: createRef() },
    { path:"/projects", name:"projects", element: <Projects />, nodeRef: createRef() }
];

export const router = createBrowserRouter(
    [{
        path:"/",
        element: <MainPage />,
        children: [
            { path:"/about", element: <About />},
            { path:"/work-experience", element: <WorkExperience />},
            { path:"/projects", element: <Projects />}
        ]
    }]
);

function MainPage() {
    return (
        <>
        <Sidebar />
        <Content />
        </>
    )
}

export default function Content() {
    const location = useLocation();
    const outlet = useOutlet();

    const [pageName, setPageName] = useState("");

    const nodeRef = routes.find((route) => route.path === location.pathname) ?? {};

    useEffect(() => {
        setPageName(changeTitle(location.pathname));
    }, [location])

    const changeTitle = (path: string) => {
        let title = path.replace("/", "");
        if(title.length == 0)
        {
            return "Welcome";
        }
        else
        {
            return title.charAt(0).toUpperCase() + title.slice(1).replace("-", " ");
        }
    }

    return(
        <>
        <div id={`${styles.MainContentFrame}`}>
            <SwitchTransition>
                <CSSTransition key={location.pathname} nodeRef={nodeRef} classNames={{
                    enterActive:styles.transitionEnterActive,
                    enter:styles.transitionEnter,
                    exitActive:styles.transitionExitActive,
                    exit:styles.transitionExitDone}} timeout={300} unmountOnExit>
                    <div ref={nodeRef} className={styles.transition}>
                        <h2 style={{margin:'0px', marginBottom:'20px', textAlign:'center'}}>- &gt; {pageName} &lt; -</h2>
                        {outlet}
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
        </>
    )
}