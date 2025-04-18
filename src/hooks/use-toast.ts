
import { toast as sonnerToast, type Toast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  // Add other sonner toast properties
  id?: string;
  duration?: number;
  icon?: React.ReactNode;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
  variant?: 'default' | 'destructive' | 'success' | 'info' | 'warning';
};

const useToast = () => {
  const toast = ({ title, description, action, ...props }: ToastProps) => {
    sonnerToast(title || "", {
      description,
      action: action
        ? {
            label: action.label,
            onClick: action.onClick,
          }
        : undefined,
      ...props,
    });
  };

  return { toast };
};

export { useToast, type ToastProps };

// For convenience, also export a global toast function
export const toast = ({ title, description, action, ...props }: ToastProps) => {
  sonnerToast(title || "", {
    description,
    action: action
      ? {
          label: action.label,
          onClick: action.onClick,
        }
      : undefined,
    ...props,
  });
};
