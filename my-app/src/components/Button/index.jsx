import React from "react";
import style from "./index.module.css";

export default function Button({ children, className, ...props }) {
  return (
    <button {...props} className={[style.button_block, className].join(" ")}>
      {children}
    </button>
  );
}

// import React, { useState } from 'react';

// function Button() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPageCount = 38;

//   const handleNextClick = () => {
//     if (currentPage < totalPageCount) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handlePrevClick = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handlePrevClick} disabled={currentPage === 1}>
//         Back
//       </button>
//       <span>{currentPage}</span>
//       <button onClick={handleNextClick} disabled={currentPage === totalPageCount}>
//         Forth
//       </button>
//     </div>
//   );
// }

// export default Button;
