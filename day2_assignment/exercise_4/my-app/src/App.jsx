import React, { useState } from "react";

const Product = ({ name, price }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [productName, setProductName] = useState(name);

  const toggleEdit = () => {
    setIsEditing(prev => !prev);
  };

  return (
    <div style={styles.card}>
      {isEditing ? (
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={styles.input}
        />
      ) : (
        <h1 style={styles.title}>{productName}</h1>
      )}

      <p style={styles.price}>₹{price}</p>

      <button style={styles.button} onClick={toggleEdit}>
        {isEditing ? "Save" : "Toggle Edit"}
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    width: "250px",
    margin: "20px auto",
    textAlign: "center",
    backgroundColor: "#f9f9f9"
  },
  title: {
    margin: "10px 0"
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    width: "100%",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  price: {
    fontSize: "18px",
    color: "#555"
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    cursor: "pointer",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#007bff",
    color: "#fff"
  }
};

export default Product;