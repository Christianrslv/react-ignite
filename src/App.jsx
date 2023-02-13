import { Header } from "./components/Header"
import { Post } from './components/Post';
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Christianrslv.png',
      name: 'Christian Rodrigues',
      role: 'Dev Backend'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      },
    ],
    publishedAt: new Date('2023-02-08 13:48:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Christianrslv.png',
      name: 'Fulano',
      role: 'Dev Frontend'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Eai pessoal'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa.'
      },
      {
        type: 'link',
        content: '👉 poise.com'
      },
    ],
    publishedAt: new Date('2023-02-10 13:48:00')
  }
];

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
             return (
             <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
             )
          })}
        </main>
      </div>
    </>  
)
}

export default App
