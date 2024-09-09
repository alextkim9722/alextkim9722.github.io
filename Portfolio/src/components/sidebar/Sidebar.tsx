import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import styles from './Sidebar.module.css';
import globalStyles from '../../GlobalStyles.module.css';

export default function Sidebar() {

    const navigate = useNavigate();

    const [aboutClicked, setAboutClicked] = useState(false);
    const [workExperienceClicked, setWorkExperienceClicked] = useState(false);
    const [projectsClicked, setProjectsClicked] = useState(false);
    const [skillsClicked, setSkillsClicked] = useState(false);
    const [contactClicked, setContactClicked] = useState(false);

    const clickSwitch = (elem: string) => {
        setAboutClicked(false);
        setWorkExperienceClicked(false);
        setProjectsClicked(false);
        setSkillsClicked(false);
        setContactClicked(false);

        switch(elem)
        {
            case "about":
                setAboutClicked(true);
                navigate('/about');
                break;
            case "work-experience":
                setWorkExperienceClicked(true);
                navigate('/work-experience');
                break;
            case "projects":
                setProjectsClicked(true);
                navigate('/projects');
                break;
            case "skills":
                setSkillsClicked(true);
                navigate('/skills');
                break;
            case "contact":
                setContactClicked(true);
                navigate('/contact');
                break;
            case "title":
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