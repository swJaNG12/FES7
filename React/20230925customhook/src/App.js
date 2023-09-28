import './App.css';
import InputComponent from './components/InputComponent';
import SomethingComponent from './components/SomethingComponent';
import useMouseLocation from './Hooks/useMouseLocation';
import useScroll from './Hooks/useScroll';

function App() {
  
  // const mouseLocation = useMouseLocation(); 
  const isBottom = useScroll();
  console.log(isBottom)
  
  return (
    <div className="App" style={{height: 3000}}>
      <InputComponent />
      <SomethingComponent />
      {/* <div style={{
        height: 100, 
        width: 100, 
        backgroundColor: mouseLocation.x > 100 ? 'royalblue' : 'hotpink'} 
      }>
      </div> */}

    </div>
  );
}

export default App;
