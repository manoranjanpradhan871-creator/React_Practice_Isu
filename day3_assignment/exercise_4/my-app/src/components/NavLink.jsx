import React from "react";
import styled from "styled-components";

// Styled component for the navigation link
const Link = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
  margin: 0 10px;

  /* Hover effect */
  &:hover {
    color: red;
  }

  /* Hide on mobile screens (<600px) */
  @media (max-width: 600px) {
    display: none;
  }
`;

const NavLink = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

export default NavLink;