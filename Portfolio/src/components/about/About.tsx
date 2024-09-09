import styles from './About.module.css'

export default function About() {
    return(
        <>
        <div id={`${styles.Content}`}>
            <img src='/src/assets/portrait.png' style={{width:'400px', height:'400px', margin:'50px', position:'relative',top:'-70px'}}/>
            <div style={{width:'800px',height:'fit-content', position:'relative',top:'-70px'}}>
                <p>Hello! My name is Alexander Kim and I am a Software Developer looking for work in full stack development. Here are a some quick facts about myself:</p>
                <li className={styles.listElement}>Went through a Java Fullstack coding bootcamp from February to June (5 months) which introduced me to SQL, Spring Framework, React, and fullstack development</li>
                <li className={styles.listElement}>Spent around 1.5 years working as a Software Developer Contractor at Northwestern Mutual using languages like C#, SQL, and Javascript</li>
                <li className={styles.listElement}>Currently working on personal fullstack projects that uses C# and React in order to gain a better understanding of the language and of the .Net Framework</li>
                <li className={styles.listElement}>Looking to take on challenging coding tasks in order to learn new skillsets for future projects</li>
            </div>
        </div>
        </>
    )
}