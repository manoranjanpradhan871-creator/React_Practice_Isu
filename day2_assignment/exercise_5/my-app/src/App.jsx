import React, { useRef } from "react";

const ColorList = () => {
  const colors = [
    "Red", "Blue", "Green", "Yellow", "Purple",
    "Orange", "Pink", "Brown", "Black", "White"
  ];

  // Store refs in an array
  const itemRefs = useRef([]);

  const handleHighlight = (index) => {
    const el = itemRefs.current[index];
    if (el) {
      el.style.fontWeight = "bold";
    }
  };

  return (
    <div style={styles.container}>
      <h2>Color List</h2>

      {colors.map((color, index) => (
        <div key={index} style={styles.item}>
          <span
            ref={(el) => (itemRefs.current[index] = el)}
            style={styles.text}
          >
            {color}
          </span>

          <button
            style={styles.button}
            onClick={() => handleHighlight(index)}
          >
            Highlight
          </button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "40px auto",
    fontFamily: "Arial"
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "6px"
  },
  text: {
    fontSize: "16px"
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff"
  }
};

export default ColorList;