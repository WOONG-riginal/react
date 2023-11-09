import React, { useState } from 'react';

const ModalExample = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={openModal}>모달창 열기</button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>세부 내용</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalExample;