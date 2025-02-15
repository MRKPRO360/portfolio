interface IModal {
  setIsModalOpen(value: boolean): void;
  confirmDelete(): void;
  closeModal(e?: React.MouseEvent<HTMLDivElement>): void;
}

function Modal({ setIsModalOpen, confirmDelete, closeModal }: IModal) {
  return (
    <div
      onClick={closeModal}
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 text-black backdrop-blur-sm"
    >
      <div className="bg-backgroundGreen p-6 rounded-sm shadow-lg max-w-sm w-full text-center">
        <h2 className="text-lg font-bold">Confirm Deletion</h2>
        <p className="mt-2">Are you sure you want to delete?</p>
        <div className="mt-4 flex justify-center text-lg font-semibold space-x-4 text-textGray">
          <button
            onClick={confirmDelete}
            className="px-4 py-1 bg-red-500  rounded-sm hover:bg-red-600 transition"
          >
            Confirm
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-1 bg-slate-950 rounded-sm hover:bg-slate-900 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
