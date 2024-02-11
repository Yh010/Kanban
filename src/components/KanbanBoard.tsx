import { useState } from "react";
import Plusicon from "../icons/Plusicon";
import { Column } from "../types";
import ColumnContainer from "./ColumnContainer";

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);
  console.log(columns);
  function generateId() {
    return Math.floor(Math.random() * 10001);
  }

  function createNewColumn() {
    const columntoadd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columntoadd]);
  }

  return (
    <div
      className="
    m-auto
    flex
    min-h-screen
    w-full
    items-center
    overflow-x-auto
    overflow-y-hidden
    px-[40px]"
    >
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {columns.map((col) => (
            <ColumnContainer column={col} />
          ))}
        </div>
        <button
          onClick={() => {
            createNewColumn();
          }}
          className="
            h-[60px]
            w-[350px]
            min-w-[350px]
            cursor-pointer
            rounded-lg
            bg-mainBackgroundColor
            border-2
            border-columnBackgroundColor
            p-4
            ring-rose-500
            hover:ring-2  
            flex
            gap-2      
        "
        >
          Add Column <Plusicon />
        </button>
      </div>
    </div>
  );
}

export default KanbanBoard;
