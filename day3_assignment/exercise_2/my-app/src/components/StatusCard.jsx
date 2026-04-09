import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 16px;
  border-radius: 6px;
  color: white;
  font-weight: bold;

  background-color: ${(props) =>
    props.type === "success" ? "green" : "red"};
`;

function StatusCard({ type, message }) {
  return <Card type={type}>{message}</Card>;
}

export default StatusCard;