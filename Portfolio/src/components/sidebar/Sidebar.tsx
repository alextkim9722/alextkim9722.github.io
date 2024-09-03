import styles from './Sidebar.module.css'
import globalStyles from '../../GlobalStyles.module.css'

export default function Sidebar() {

    return (
        <>
        <div id={`${styles.Sidebar}`}>
            <div id={`${styles.Title}`} className={`${globalStyles.FantasyText}`}>Alexander Kim</div>
            <div id={`${styles.SidebarNavigation}`}>
                <div className={`${styles.SidebarButton} ${globalStyles.interactible} ${globalStyles.FantasyText}`}>About</div>
                <div className={`${styles.SidebarButton} ${globalStyles.interactible} ${globalStyles.FantasyText}`}>Work Experience</div>
                <div className={`${styles.SidebarButton} ${globalStyles.interactible} ${globalStyles.FantasyText}`}>Projects</div>
                <div className={`${styles.SidebarButton} ${globalStyles.interactible} ${globalStyles.FantasyText}`}>Skills</div>
                <div className={`${styles.SidebarButton} ${globalStyles.interactible} ${globalStyles.FantasyText}`}>Contact</div>
            </div>
        </div>
        </>
    )
}