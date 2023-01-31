import { Header } from "./components/Header"
import { Post } from './components/Post';
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Christian"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure cupiditate quam fugit, quidem hic qui amet quisquam quaerat, quibusdam voluptatibus dolor assumenda doloremque harum vero velit corrupti aperiam. Consectetur, nesciunt?"
          />
          <Post
            author="Tobias"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure cupiditate quam fugit, quidem hic qui amet quisquam quaerat, quibusdam voluptatibus dolor assumenda doloremque harum vero velit corrupti aperiam. Consectetur, nesciunt?"
          />
        </main>
      </div>
    </>  
)
}

export default App
