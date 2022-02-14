import joi from "joi";
import Swal from "sweetalert2";
export default function validatePaymentMethod(Form) {
  const validCVV = joi
    .string()
    .pattern(/[0-9]{3}/)
    .required()
    .validate(Form.cvv, {
      abortEarly: false,
    });
  const validCardNumber = joi
    .string()
    .pattern(/[0-9]{16}/)
    .required()
    .validate(Form.cardNumber, {
      abortEarly: false,
    });
  const validDate = joi
    .string()
    .pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))/)
    .required()
    .validate(Form.expireDate, {
      abortEarly: false,
    });

  if (validCVV.error)
    return Swal.fire({
      icon: "error",
      title: "CVV inválido",
      text: "Certifique-se de escrever o CVV no formato 123",
    });
  if (validCardNumber.error)
    return Swal.fire({
      icon: "error",
      title: "Número do cartão inválido",
      text: `O número não deve conter espaços ou simbolos (ex: "-", "_")`,
    });
  if (validDate.error)
    return Swal.fire({
      icon: "error",
      title: "Data inválida",
      text: `Certifique-se de escrever a data no formato dd/mm`,
    });
}
