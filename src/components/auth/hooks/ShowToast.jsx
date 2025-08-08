// utils/showToast.js
import toast from "react-hot-toast";

/**
 * Display a toast with type-based styling.
 * @param {string} message - The message to display
 * @param {'success' | 'error' | 'loading' | 'warning' | 'info'} type - Type of toast
 */
const showToast = (message, type = "info") => {
    const commonOptions = {
        position: "top-right",
        duration: 4000,
        style: {
            fontSize: "18px",
        },
    };

    switch (type) {
        case "success":
            toast.success(message, {
                ...commonOptions,
                style: {
                    ...commonOptions.style,
                    background: "#22c55e",
                    color: "#fff",
                },
            });
            break;
        case "error":
            toast.error(message, {
                ...commonOptions,
                style: {
                    ...commonOptions.style,
                    background: "#ef4444",
                    color: "#fff",
                },
            });
            break;
        case "warning":
            toast(message, {
                icon: "⚠️",
                ...commonOptions,
                style: {
                    ...commonOptions.style,
                    background: "#facc15",
                    color: "#000",
                },
            });
            break;
        case "loading":
            toast.loading(message, commonOptions);
            break;
        case "info":
        default:
            toast(message, {
                ...commonOptions,
                style: {
                    ...commonOptions.style,
                    background: "#3b82f6",
                    color: "#fff",
                },
            });
    }
};

export default showToast;
