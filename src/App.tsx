import TabsView from "./components/tabs/tabsView";
import "./App.css";
import { TabItem } from "./components/tabs/types/types";

function Content1(){
  return (
      <div className="content1">
        <h1>Content1</h1>
      </div>
    );
}
function Content2(){
  return (
      <div className="content2">
        <h1>Content2</h1>
      </div>
    );
}
function Content3(){
  return (
      <div className="content3">
        <h1>Content3</h1>
      </div>
    );
}

const items: TabItem[] = [
  {
    id: crypto.randomUUID(),
    title: "Tab 1",
    content: Content1
  },
  {
    id: crypto.randomUUID(),
    title: "Tab 2",
    content: Content2
  },
  {
    id: crypto.randomUUID(),
    title: "Tab 3",
    content: Content3
  }
];

function App() {
  function handleChange(item: TabItem){
    console.log(item.title);
  }
  return <div>
    <TabsView items={items} onChange={handleChange} />
  </div>
}

export default App;
