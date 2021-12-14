import './style/main.css';
import Todos from './components/Todos';
import Displaytodos from './components/Displaytodos';
import { motion } from "framer-motion"
import Logo from './assets/Logo.png'; 



function App() {
  return (
    <div className="App">
      <div className='logozone'>
      <motion.img
       initial={{y:-200}}
       animate={{y:0}}
       transition={{type:"spring", duration:.5}}
       whileHover={{scale:1.1}}
        src={Logo} alt='Logo' />
      </div>

      <motion.div
            initial={{y:1000}}
            animate={{y:0}}
            transition={{type:"spring", duration:1}}
      >
      <Todos/>
      <Displaytodos />
      </motion.div>

    </div>
  );
}

export default App;
