import logo from './logo.svg';
import './App.css';
import TenthStudent from './classes/TenthStudent';

function App() {
  //let kranthi = new TenthStudent();
  //kranthi.engMarks=98;
  //kranthi.telMarks=97;
  //kranthi.hindiMarks=96;
 // kranthi.sciMarks=87;
  //kranthi.socMarks=86;
  //kranthi.mathsMarks=89;
  //kranthi.calculateResult();
  //console.log(TenthStudent.passMarks)
  //console.log(TenthStudent.passMarks)

  let actorsOf35 = ["vishwadev","nivetha thomas","priyadarshi pulikonda","gouthami","k.bhagyaraj","ananya","arun dev","abhay shankar","abhay","vishwadev rachakonda"]
  
  return (
    <div className="App">
      <button type= 'button' onClick={()=>{
        console.log(actorsOf35.lenth);
      }}>Lengnth</button>
      <button type= 'button' onClick={()=>{}}></button>
      <button type= 'button' onClick={()=>{}}></button>
      <button type= 'button' onClick={()=>{}}></button>
      <button type= 'button' onClick={()=>{}}></button>
      <button type= 'button' onClick={()=>{}}></button>
      <button type= 'button' onClick={()=>{}}></button>
      <button type= 'button' onClick={()=>{}}></button>
      
    </div>
  );
}

export default App;
