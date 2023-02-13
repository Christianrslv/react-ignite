import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Comment } from './Comment';
import styles from './Post.module.css';

import { Avatar } from './Avatar';

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const isNewCommentEmpty = newCommentText.length === 0;

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText('');
  }

  function handleCreateNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
   const commentsWithoutDeletedOne = comments.filter(comment => {
     return comment !== commentToDelete;
   });
   setComments(commentsWithoutDeletedOne);
  }

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl}/>
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {publishedDateRelativeToNow}
          </time>
        </header>

        <div className={styles.content}>
          {content.map(item => {
            if (item.type === 'paragraph') {
              return <p key={item.content}>{item.content}</p>
            } else if (item.type === 'link') {
              return <p key={item.content}><a href="#">{item.content}</a></p>
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <stron>Deixe seu feedback</stron>

          <textarea
            name='comment'
            placeholder='Deixe um comentário'
            value={newCommentText}
            onChange={handleCreateNewCommentChange}
          />

        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return (
            <Comment 
              key={comment}
              content={comment} 
              onDeleteComment={deleteComment}
            />);
          })}
        </div>
      </article>
    </>
  );
}