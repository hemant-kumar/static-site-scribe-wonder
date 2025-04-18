
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

// We're converting this to a simplified version as we'll use sonner instead
export function Toaster() {
  // Since our useToast no longer provides toasts array,
  // we'll return an empty component - we'll use sonner's Toaster instead
  return null
}
