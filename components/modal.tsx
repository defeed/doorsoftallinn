import { Dialog } from "@headlessui/react";
import { useRef } from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ onClose, children }: ModalProps) => {
  let overlayRef = useRef(null);

  return (
    <Dialog
      static
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto"
    >
      <Dialog.Overlay
        ref={overlayRef}
        className="fixed inset-0 bg-slate-600/90"
      />
      <div className="relative flex items-center justify-center">
        {children}
      </div>
    </Dialog>
  );
}
