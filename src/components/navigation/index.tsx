import Link from 'next/link';
import styles from './navigation.module.css'

export default function Navigation() {
  return (
    <ul className={styles.navUl}>
      <li><Link href='/work/'>Work</Link></li>
      <li><Link href='/about/'>About</Link></li>
      <li><Link href='/contact/'>Contact</Link></li>
    </ul>
  )
}