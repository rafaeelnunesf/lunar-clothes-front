import Swal from "sweetalert2";
import api from "../services/api";

export default async function valideSizeProduct(
  selectSize,
  popup,
  setPopup,
  navigate,
  token
) {
  if (selectSize === undefined) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Choose a size!",
    });
    return;
  }

  const data = {
    id: popup,
    size: selectSize,
  };

  try {
    await api.postBag(data, token.token);
    setPopup();

    Swal.fire({
      icon: "success",
      title: "product added successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (err) {
    if (err.message.includes(401)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Você precisa fazer login!",
      });
      navigate("/entrar");
    } else {
      console.log(err);
    }
  }
}
