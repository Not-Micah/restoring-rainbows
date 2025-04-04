import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-900/10 backdrop-blur-[2px] fixed inset-0 z-[11000]" />
        <Dialog.Content className="fixed drop-shadow-md top-[50%] left-[50%] z-[12000]
        max-h-full h-full md:max-h-[80vh] md:h-auto w-full md:w-[90vw] md:max-w-[450px]
        translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-[25px] max-md:p-4 focus:outline-none">
            <Dialog.Title className="text-xl text-left font-bold mb-4">
                {title}
            </Dialog.Title>
            <div className="overflow-y-auto max-h-[calc(80vh-100px)] max-md:max-h-[calc(100%-50px)] pb-4 no-scrollbar">
                {children}
            </div>
            <Dialog.Close asChild>
                <button className="text-neutral-400 hover:text-black absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] 
                appearance-none items-center justify-center rounded-full focus:outline-none">
                    <IoMdClose />
                </button>
            </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
