import React from "react";

const Layout = ({ quesSpecifics }) => {
  return (
    <section>
      <div>
        <ul>
          {Object.keys(quesSpecifics).map((key, index) => (
            <li key={index}>
              <strong>{key.replace(/([A-Z])/g, " $1").trim()}:</strong>{" "}
              {typeof quesSpecifics[key] === "boolean"
                ? quesSpecifics[key]
                  ? "Yes"
                  : "No"
                : quesSpecifics[key]}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Layout;
