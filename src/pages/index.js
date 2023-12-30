import styles from '../styles/Home.module.css'
import Apresentacao from './components/Apresentacao'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Apresentacao />
    </div>
  )
}
