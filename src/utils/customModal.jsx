// // components/Modal.js
// import React from 'react';

// const Modal = ({ show, onClose, children }) => {
//   if (!show) {
//     return null;
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
//       <div
//         className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;


// components/Modal.js
import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;