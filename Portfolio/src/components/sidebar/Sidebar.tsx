import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Sidebar.module.css';
import globalStyles from '../../GlobalStyles.module.css';

export default function Sidebar() {

    const navigate = useNavigate();

    const [aboutClicked, setAboutClicked] = useState(false);
    const [workExperienceClicked, setWorkExperienceClicked] = useState(false);
    const [projectsClicked, setProjectsClicked] = useState(false);
    const [skillsClicked, setSkillsClicked] = useState(false);
    const [contactClicked, setContactClicked] = useState(false);

    const currentElem = String(localStorage.getItem('elem'));

    useEffect(() => {
        clickSwitch(currentElem);
    },[]);

    const clickSwitch = (elem: string) => {
        setAboutClicked(false);
        setWorkExperienceClicked(false);
        setProjectsClicked(false);
        setSkillsClicked(false);
        setContactClicked(false);

        switch(elem)
        {
            case "about":
                localStorage.setItem("elem", "about");
                setAboutClicked(true);
                navigate('/about');
                break;
            case "work-experience":
                localStorage.setItem("elem", "work-experience");
                setWorkExperienceClicked(true);
                navigate('/work-experience');
                break;
            case "projects":
                localStorage.setItem("elem", "projects");
                setProjectsClicked(true);
                navigate('/projects');
                break;
            case "skills":
                localStorage.setItem("elem", "skills");
                setSkillsClicked(true);
                navigate('/skills');
                break;
            case "contact":
                localStorage.setItem("elem", "contact");
                setContactClicked(true);
                navigate('/contact');
                break;
            case "title":
                localStorage.setItem("elem", "title");
                navigate('/');
                break;
        }
    }

    const buttonSwitch = (clicked: boolean) => {
        const fixed: string = `${globalStyles.FantasyText}`;
        if(clicked)
        {
            return (fixed + ` ${styles.SidebarButtonClicked}`)
        }else
        {
            return (fixed + ` ${styles.SidebarButton} ${globalStyles.interactible}`)
        }
    }

    return (
        <>
        <div id={`${styles.Sidebar}`}>
            <div id={`${styles.Title}`} className={`${globalStyles.FantasyText}`} onClick={() => clickSwitch('title')}>Alexander Kim</div>
            <div id={`${styles.SidebarNavigation}`}>
                <div className={buttonSwitch(aboutClicked)} onClick={() => clickSwitch('about')}>About</div>
                <div className={buttonSwitch(workExperienceClicked)} onClick={() => clickSwitch('work-experience')}>Work Experience</div>
                <div className={buttonSwitch(projectsClicked)} onClick={() => clickSwitch('projects')}>Projects</div>
                <div className={buttonSwitch(skillsClicked)} onClick={() => clickSwitch('skills')}>Skills</div>
                <div className={buttonSwitch(contactClicked)} onClick={() => clickSwitch('contact')}>Contact</div>
            </div>
        </div>
        </>
    )
}