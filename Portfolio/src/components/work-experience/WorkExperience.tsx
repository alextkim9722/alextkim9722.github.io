import {SectionObject, Section} from '../section/Section'

import styles from './WorkExperience.module.css'

export default function WorkExperience()
{
    const northwesternMutual: SectionObject = {
        img: "",
        title: "Northwestern Mutual",
        role: "Software Developer Contractor",
        skills:["CSharp", "Microsoft-SQL", "JavaScript", "Selenium"],
        start: new Date(2022, 7, 1),
        end: new Date(2023, 11, 1),
        description:[
            "Created 3 automation processes using C# and Selenium to fill out and scrape form client information for finance reps",
            "Automated collection of 1000+ knowledge articles with Javascript info scraping and Assistedge for automation",
            "Modified T-SQL datatables connected to Assistedge Engage to alter UI elements for different roles using dBeaver",
            "Worked with finance reps to investigate and solve application bugs to reduce call downtime between clients",
            " Used PostMan to send JSON data into service to test for service issues and grabbing test data"
        ]
    }

    return (
        <>
        <div id={styles.workExperienceContent}>
            <Section {...northwesternMutual}/>
        </div>
        </>
    )
}