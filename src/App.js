import ProviderLogin from "./context/index";

//Pages
import Ways from "./routes/index";

function App() {
  
  

  return (
    <ProviderLogin>
      <Ways/>
    </ProviderLogin>
  )
}

export default App;