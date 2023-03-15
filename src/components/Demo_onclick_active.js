import { useState, useCallback } from "react";
import "./Demo_onclick_active.css"

const Demo_onclick_active = () => {
  const [active, setActive] = useState(null);

  const [dataTabs, setDataTabs] = useState([
    {
      id: 1,
      tabTitle: "Title 1",
      tabClass: "myCustomClass",
      tabClicked: false
    },
    {
      id: 2,
      tabTitle: "Title 2",
      tabClass: "myCustomClass",
      tabClicked: false
    }
  ]);

  const NavLink = ({ id, tabTitle, isActive, onClick }) => {
    return (
      <a
        href="#"
        onClick={() => navigate(id)}
        className={isActive ? "active" : ""}
      >
        {tabTitle}
      </a>
    );
  };

  const navigate = (id) => {
    setActive(id);
  };

  return (
    <div>
      {dataTabs.map((item) => (
        <li key={item.id}>
          <NavLink {...item} isActive={active === item.id} onClick={navigate} />
        </li>
      ))}
    </div>
  );
};
export default Demo_onclick_active;
