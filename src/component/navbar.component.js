import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
<div className={styles.Navbar}>
    <Link to={'/'}> Home </Link>
    <Link to={'people'}> People </Link>
    <Link to={'person'}> Person </Link>
</div>
  )
}

export { Navbar }
