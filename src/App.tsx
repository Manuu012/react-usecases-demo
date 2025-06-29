
import './App.css'
import Tabs, { Tab } from './Pages/Tabs'

function App() {

  return (
    <div >
      <Tabs>
        <Tab label="Tab 1">
        <div>These 1</div>
      </Tab>
      <Tab label="Tab 2">
        <div>These 2</div>
      </Tab>
      <Tab label="Tab 3">
        <div>These 3 </div>
      </Tab>
      </Tabs>
    </div>
  )
}

export default App
