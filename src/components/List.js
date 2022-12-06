import React from "react";
import dummyData from "../utils/data";
import Scrollbar from "./Scroll-bar";

const List = () => {
  return (
    <div className="container">
      <div
        style={{ marginTop: "35px", border : "1px solid gray" }}
      >
        <Scrollbar style={{ width: "100%", height: 300 }}>
            {dummyData.map((data) => (
              <ul className="list-group" key={data.id}>
                <li className="list-group-item" style={{ listStyle: "none" }}>{data.title}</li>
              </ul>
            ))}
        </Scrollbar>
      </div>
    </div>
  );
};

export default List;
