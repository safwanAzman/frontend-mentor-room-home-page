
import './App.css';
import Section1 from './screens/Section1';
import Section2 from './screens/Section2';

function App() {
  return (
    <div className="w-full h-auto">
      <Section1/>
      <Section2/>
      <footer className="fixed bottom-0 w-full p-2 bg-black ">
          <div className="flex items-center justify-center text-xs text-white">
            Challenge by <a className="px-1 text-blue-300 border-b-2 border-blue-300" href="https://www.frontendmentor.io/">Frontend Mentor.</a>
            Coded by <a className="pl-1 text-blue-300 border-b-2 border-blue-300" href="https://www.safwan-azman.dev"> SafwanAzman.</a>
          </div>
        </footer>
    </div>
  );
}

export default App;
