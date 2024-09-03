import { Routes, Route } from 'react-router-dom'
import About from '../about/About'

import styles from './Content.module.css'

export default function Content() {
    return(
        <>
        <div id={`${styles.MainContentFrame}`}>
            <Routes>
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
        </>
    )
}