"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    CheckCircle2,
    AlertCircle,
    AlertTriangle,
    Info,
    X,
} from "lucide-react";

interface ToastMessageProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    message: string;
    icon: "success" | "error" | "warning" | "info";
    timer?: number;
    postion?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
}

const iconsMap = {
    success: <CheckCircle2 className="text-green-500 w-5 h-5" />,
    error: <AlertCircle className="text-red-500 w-5 h-5" />,
    warning: <AlertTriangle className="text-yellow-500 w-5 h-5" />,
    info: <Info className="text-blue-500 w-5 h-5" />,
};

function ToastMessage({ open, setOpen, message, icon, timer = 3000, postion = 'top-right' }: ToastMessageProps) {
    useEffect(() => {
        setTimeout(() => {
            setOpen(false)
        }, timer);
    }, [open])
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                        "fixed z-50 flex items-center gap-3 rounded-xl shadow-lg px-4 py-3 text-sm font-medium text-white",
                        icon === "success" && "bg-green-600",
                        icon === "error" && "bg-red-600",
                        icon === "warning" && "bg-yellow-600",
                        icon === "info" && "bg-blue-600",
                        postion === 'top-right' && 'top-4 right-4',
                        postion === 'top-left' && 'top-4 left-4',
                        postion === 'bottom-right' && 'bottom-4 right-4',
                        postion === 'bottom-left' && 'bottom-4 left-4',
                        postion === 'top-center' && 'top-4 left-1/2 transform -translate-x-1/2',
                        postion === 'bottom-center' && 'bottom-4 left-1/2 transform -translate-x-1/2',
                    )}
                >
                    {iconsMap[icon]}
                    <span>{message}</span>
                    <button
                        onClick={() => setOpen(false)}
                        className="ml-2 rounded-full hover:bg-black/20 p-1 transition"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ToastMessage;
