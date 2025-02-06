import confetti from "canvas-confetti";
import { toast } from "react-toastify";

export function launchToast(type, message) {
  if (type === "success") {
    toast(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      draggable: true,
    });

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    return;
  }

  toast(message);
}
