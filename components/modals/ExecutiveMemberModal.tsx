"use client";

import Modal from "../Modal";
import useExecutiveMemberModal from "@/hooks/useExecutiveMemberModal";

const ExecutiveMemberModal = () => {
    const { onClose, isOpen, currentMember } = useExecutiveMemberModal();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };


    return (
        <Modal title={`${currentMember?.firstName} ${currentMember?.lastName}`} isOpen={isOpen} onChange={onChange}>
            <div className="flex flex-col justify-start items-start gap-y-6">
                <img src={currentMember?.picture} className="w-full max-h-[300px] object-cover drop-shadow" />
                <h3 className="text-xl font-semibold">{currentMember?.firstName} {currentMember?.lastName}</h3>
                <p className="text-xl">{currentMember?.bio}</p>
            </div>
        </Modal>
    );
};

export default ExecutiveMemberModal;