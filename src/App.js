import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
        <>
        <Navbar title="TextUtils" aboutText="About"/>
        <div className='container'>
        <TextForm heading = "What is your name"/>
        </div>
        </>
  );
}

export default App;
