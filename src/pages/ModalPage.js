import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/button";

function ModalPage(){
    const [showModal,setShowModal]=useState(false);

    const handleClose =()=>{
        setShowModal(false);
    }
    
    const handleClick=()=>{
        setShowModal(true);
    }

    const actionBar= <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept.</p>
    </Modal>

    return (
    <div className="relative">
        <Button primary rounded onClick={handleClick}> Open Modal</Button>
        {showModal && modal}
    </div>
)}
export default ModalPage;