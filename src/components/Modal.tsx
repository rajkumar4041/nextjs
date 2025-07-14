import { ReactNode, Suspense } from 'react';

export const Modal = ({
  open,
  children,
  title,
  onClose,
}: {
  open: boolean;
  children: ReactNode;
  title: string;
  onClose?: () => void;
}) => {
  return (
    open && (
      <Suspense fallback={<div>Loading...</div>}>
        <div
          className="fixed h-screen min-w-[30vw] bg-white bg-opacity-50 "
          style={{
            width: '40vw',
            height: '100svh',
            transition: 'ease-in 0.18s',
            zIndex: 99,
            right: 0,
            top: 0,
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex flex-col gap-1 heigh-full width-full">
              <div className="flex justify-between items-center p-4 bg-gray-100 rounded-t-lg w-full">
                <h2 className="text-xl font-bold text-blue-700 ">{title}</h2>
                <button className="text-red-500 hover:text-red-700" onClick={onClose}>
                  X
                </button>
              </div>
              {children}
            </div>
          </Suspense>
        </div>
      </Suspense>
    )
  );
};
