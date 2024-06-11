"use client"
// // pages/index.js
// import React, { useState } from 'react';
// import Modal from '@/utils/customModal';

// const HomePage = () => {
//   const [showModal, setShowModal] = useState(false);

//   const openModal = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>
//       <button
//         onClick={openModal}
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Open Modal
//       </button>

//       <Modal show={showModal} onClose={closeModal}>
//         <h2 className="text-2xl font-bold mb-4">Custom Modal</h2>
//         <p>This is a custom modal component in Next.js using Tailwind CSS.</p>
//       </Modal>
//     </div>
//   );
// };

// export default HomePage;


// pages/index.js
import React, { useState } from 'react';
import Modal from './comp';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Home Page</h1>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Modal
      </button>
{/* 
      <Modal show={showModal} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Custom Modal</h2>
        <p>This is a custom modal component in Next.js using Tailwind CSS.</p>
      </Modal> */}
            {showModal && <Modal />}

    </div>
  );
};

export default HomePage;
