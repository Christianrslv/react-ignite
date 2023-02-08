import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Christianrslv.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Christian Rodrigues</strong>
              <time title='08 de Fevereiro às 10:15h' dataTime="2023-02-08 10:16:00">Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
                <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}