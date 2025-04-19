import { toast } from "sonner";

export const showerror = (message: string) => {
  return toast.error(message, {
    duration: 1200,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDismiss: (toast: any) => toast.dismiss(),
  });
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleApiError = (error: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const err = error?.response?.data?.errors as any[];
  if (!navigator.onLine) {
    return showerror("No internet connection.");
  }
  if (error?.code === "ERR_NETWORK") {
    return showerror("Network error occurred.");
  }

  if (error?.data?.message) {
    return showerror(error?.data?.message);
  }
  if (error?.request) {
    return showerror(error?.statusText);
  } else {
    return toast.error("An error occurred");
  }
};
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
};
