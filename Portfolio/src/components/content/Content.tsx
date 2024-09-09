import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import About from '../about/About'
import Projects from '../projects/Projects'

import styles from './Content.module.css'
import WorkExperience from '../work-experience/WorkExperience'

export default function Content() {
    const location = useLocation();
    const [pageName, setPageName] = useState("");

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
            <h2 style={{margin:'0px', marginBottom:'20px', textAlign:'center'}}>- &gt; {pageName} &lt; -</h2>
            <Routes>
                <Route path='/about' element={<About />} />
                <Route path='/work-experience' element={<WorkExperience />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </div>
        </>
    )
}