import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function ReturnBackButton() {
    return (
        <Link to="/" className={styles.returnBack}><span>&#8592;</span></Link>
    )
}
export default React.memo(ReturnBackButton);