import "./App.css";
import Counter from "./Components/Counter";
import RichTextEditor from "./Components/RichTextEditor";
import UserData from "./Components/UserData";

function App() {
  return (
    <div>
      <div style={{display:'flex',gap:'50px',marginTop:'15px',flexWrap:'wrap'}}>
        <Counter />
        <RichTextEditor />
      </div>
      <UserData />
    </div>
  );
}

export default App;
