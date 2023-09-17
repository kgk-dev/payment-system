import { toast } from "react-toastify";

export const errorNotify = getNotify('error')
export const warnNotify = getNotify('warn')
export const successNotify = getNotify('success')

function getNotify(type: string) {
  return (message: string) => toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })
}