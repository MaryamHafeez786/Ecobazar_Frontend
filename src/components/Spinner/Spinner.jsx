// // src/components/Spinner/Spinner.jsx
// import React from "react";
// import { CircleLoader } from "react-spinners";

// const Spinner = ({ loading, color = "#ffffff", size = 150 }) => {
//   return (
//     <div className="spinner-container">
//       <CircleLoader color={color} loading={loading} size={size} />
//     </div>
//   );
// };

// export default Spinner;

import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        loading ? "visible" : "invisible"
      }`}
    >
      <ClipLoader color="#ffffff" loading={loading} size={40} />
    </div>
  );
};

export default Spinner;
