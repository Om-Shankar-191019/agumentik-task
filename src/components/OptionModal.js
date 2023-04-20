import React, { useState } from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};
const OptionModal = ({ open, handleClose }) => {
  const kicks = [
    { id: 1, name: "All" },
    { id: 2, name: "Adventures" },
    { id: 3, name: "Art & Craft" },
    { id: 4, name: "Beauty Tips" },
    { id: 5, name: "Comedy" },
  ];

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-1/2">
          <div className="flex flex-col ">
            <fieldset>
              <legend className="text-xl md:text-2xl font-medium">
                Select your preferred Kicks categories
              </legend>
              <div className="border-b border-gray-800 pb-1"></div>
              <div className="overflow-y-scroll">
                {kicks.map(({ id, name }) => (
                  <div key={id} className="my-2">
                    <input type="checkbox" id={name} name={name} value={name} />
                    <label className="text-lg md:text-xl ml-3 " htmlFor={name}>
                      {name}
                    </label>
                  </div>
                ))}
              </div>
              <div className="border-b border-gray-800 pb-1"></div>
              <div className="flex items-center mt-2 justify-center ">
                <button className="px-4 py-1 rounded-md  bg-blue-600 text-white font-medium mr-4">
                  Save
                </button>
                <button className="px-4 py-1 rounded-md bg-white text-blue-600 border border-blue-600 font-medium mr-4">
                  Cancel
                </button>
              </div>
            </fieldset>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default OptionModal;
