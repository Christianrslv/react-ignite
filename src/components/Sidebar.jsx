import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
    <img className={styles.cover} src='https://images.unsplash.com/photo-1675066096783-14e500d001ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=50'/>
      <div className={styles.profile}>
        <img className={styles.avatar} src='https://github.com/Christianrslv.png'/>     

        <strong>Christian Rodrigues</strong>
        <span>Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine
            size={20}
          />
          Edit your profile
        </a>
      </footer>
    </aside>   
  );
}