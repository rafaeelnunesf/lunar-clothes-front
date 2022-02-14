import Swal from "sweetalert2";
export default function validateSubmitOrder(data) {
  if (!data.address)
    return Swal.fire({
      icon: "error",
      title: "Error",
      text: "Add an address!",
    });
  if (!data.payment)
    return Swal.fire({
      icon: "error",
      title: "Error",
      text: "Add a payment method!",
    });
  if (!data.delivery)
    return Swal.fire({
      icon: "error",
      title: "Error",
      text: "Add a delivry method!",
    });
}
