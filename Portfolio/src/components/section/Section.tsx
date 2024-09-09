import TechIcon from '../tech-icon/TechIcon';

import styles from './Section.module.css'

export type SectionObject = {
    img: string;
    title: string;
    role: string;
    start: Date;
    end: Date;
    skills: string[];
    description: string[];
}

export function Section(props: SectionObject)
{
    const createTechSkills = (skills: string[]) =>
    {
        var skillElements: JSX.Element[] = [];

        skills.forEach(element => skillElements.push(<TechIcon key={element} src={element} />));

        return skillElements;
    }

    const createBulletPoints = (points: string[]) =>
    {
        var pointElements: JSX.Element[] = [];

        points.forEach(point => pointElements.push(<li key={point}> {point} </li>))

        return pointElements;
    }

    const header = (
        <div style={{marginBottom:'10px'}}>
            {props.img && <img src={props.img} style={{borderStyle:'solid', width:'175px', height:'175px'}} />}
            <div style={{height:'fit-content'}}>
                <div style={{float:'left'}}>
                    <h3 style={{margin:'0px'}}> {props.title} </h3>
                    <div>{props.role}</div>
                    <div>{props.start.toDateString().substring(3,7) + props.start.toDateString().slice(10)} - {props.end.toDateString().substring(3,7) + props.end.toDateString().slice(10)}</div>
                </div>
                <div style={{display:'flex', flexDirection:'row', float:'right'}}>
                    {props.skills && createTechSkills(props.skills)}
                </div>
            </div>
        </div>
    )

    return(
        <>
        <div id={styles.sectionExpanded}>
            {header}
            {props.description && createBulletPoints(props.description)}
        </div>
        </>
    )
}