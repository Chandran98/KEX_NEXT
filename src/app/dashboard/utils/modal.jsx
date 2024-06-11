function Modal({ modal, setModal }) {
  const openModal = () => {
    setModal(!modal);
    console.log(modal, "modal");
  };
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border  shadow-lg rounded-md bg-white">
        <div className="">
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold text-gray-900 mr-10">
              Mobile Verification
            </h3>
            <button
              onClick={openModal}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button>
          </div>

          <div className="mt-2 px-7 py-3">
            
          </div>
          <div className="flex justify-center mt-4 gap-8">
            <button
              // onClick={openModal}
              className="px-4 py-2 w-full bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
