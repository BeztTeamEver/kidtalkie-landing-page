import React, { useState, useEffect } from 'react';

interface ToastProps {
    message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 3000); // 3 seconds, adjust as needed

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {visible && (
                <div className="absolute z-40 top-4 right-4 bg-white text-black border p-4 rounded-md">
                    {message}
                </div>
            )}
        </>
    );
};

export default Toast;
