import joi from "joi";
import Swal from "sweetalert2";
export default function validateForm(Form) {
  const validZipCode = joi
    .string()
    .pattern(/^\d{5}-\d{3}$/)
    .required()
    .validate(Form.zipcode, {
      abortEarly: false,
    });
  const validNumber = joi.number().integer().required().validate(Form.number, {
    abortEarly: false,
  });
  if (validZipCode.error)
    return Swal.fire({
      icon: "error",
      title: "CEP inválido",
      text: "Certifique-se de escrever o CEP no formato 12345-678",
    });
  if (validNumber.error)
    return Swal.fire({
      icon: "error",
      title: "Número inválido",
      text: "O número deve ser inteiro",
    });
}
