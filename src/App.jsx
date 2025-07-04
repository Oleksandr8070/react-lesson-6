import Calculator from "./components/task1/Calculator"
import { products } from './components/task2/dataArr';
import DataGrid from "./components/task2/DataGrid"
import WindowSize from "./components/task3/WindowSize";
import SearchTimeout from "./components/task4/SearchTimeout";
function App() {


  return (
    <>
      <Calculator />
      <DataGrid dataArr={products} />
      <WindowSize />
      <SearchTimeout dataArr={products}/>
    </>
  )
}

export default App
