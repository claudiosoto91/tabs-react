import { TabItem } from "./types/types";
import { useState } from "react";

interface TabsViewProps {
  items: TabItem[];
  onChange: (item: TabItem) => void;
}

export default function TabsView({ items, onChange }: TabsViewProps) {
  const [selected, setSelected] = useState<number | null>(
    items.length >= 0 ? 0 : null
  );

  function handleClick(index: number, item:TabItem) {
    setSelected(index);
    onChange(item);
  }

  if (selected === null) {
    return null;
  }
  return (
    <div>
      {items.map((item, index) => (
        <TabView
          index={index}
          active={index === selected}
          item={item}
          onClick={handleClick}
          key={item.id}
        />
      ))}
      <div>
        <div>
          {items.map((item, index) => (
            <>{selected === index && <item.content key={item.id} />}</>
          ))}
        </div>
      </div>
    </div>
  );
}

interface TabViewProps {
  index: number;
  active: boolean;
  item: TabItem;
  onClick: (index: number, item: TabItem) => void;
}
function TabView({ index, active, item, onClick }: TabViewProps) {
  return active ? (
    <div>{item.title}</div>
  ) : (
    <button onClick={() => onClick(index, item)}>{item.title}</button>
  );
}
