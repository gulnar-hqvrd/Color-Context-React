import React, { useContext, useEffect, useState } from "react";
import { ConfigContext } from "../../contexts/ThemeContext";

export default function Index() {
  const { theme, setTheme } = useContext(ConfigContext);
  const [color, setColor] = useState("#86A7FC");

  const handleColor = () => {
    setColor("#FF9843");
  };

  useEffect(() => {
    if (setTheme) {
      setTheme({ ...theme, backgroundColor: color });
    }
  }, [color]);

  const containerStyle = {
    backgroundColor: theme.backgroundColor,
  };

  return (
    <div className="container mt-5 p-3" style={containerStyle}>
      <div className="row mt-5">
        <div className="col-12 mb-3"> 
          <button onClick={handleColor} className="btn btn-outline-dark">
            Click me!
          </button>
        </div>
        <div className="col-12">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Category 1</td>
                <td>Description 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}