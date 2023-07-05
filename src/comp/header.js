import React from 'react';
 import { HeadBox } from "./HeaderStyles";
function Header() {
  return (
     <HeadBox>
    <h1 style={{ color: "green", 
                   textAlign: "center",
                   margin: 0, 
                  }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1>
      </HeadBox>
  );
}



export default Header;
