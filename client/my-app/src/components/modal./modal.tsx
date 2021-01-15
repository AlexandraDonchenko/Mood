import { FunctionComponent, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef<HTMLDivElement>();
  if (null !== elRef.current) {
    const div = document.createElement('div');
    elRef.current = div;
  }
  useEffect(() => {
    const modalRoot: any = document.getElementById('modal');
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(children, elRef.current);
};
export default Modal;
