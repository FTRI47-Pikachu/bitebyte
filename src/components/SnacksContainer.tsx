import React, { useState } from 'react';
import SingleSnackCard from './SingleSnackCard';
import DeleteAlert from './DeleteAlert';

const SnacksContainer: React.FC = () => {
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (): void => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = (): void => {
    setIsCardVisible(false);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      {isCardVisible && (
        <SingleSnackCard toggleModal={toggleModal} />
      )}
      <DeleteAlert
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default SnacksContainer;
