
import { toast as sonnerToast, type Toast } from "sonner"

type ToastProps = Toast & {
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
}

const useToast = () => {
  const toast = ({ title, description, action, ...props }: ToastProps) => {
    sonnerToast(title, {
      description,
      action: action
        ? {
            label: action.label,
            onClick: action.onClick,
          }
        : undefined,
      ...props,
    })
  }

  return { toast }
}

export { useToast, type ToastProps }

// For convenience, also export a global toast function
export const toast = ({ title, description, action, ...props }: ToastProps) => {
  sonnerToast(title, {
    description,
    action: action
      ? {
          label: action.label,
          onClick: action.onClick,
        }
      : undefined,
    ...props,
  })
}
