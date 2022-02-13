import Swal from "sweetalert2";
import api from "../services/api";

export default async function valideRegistration(data, navigate) {
  const regex = /[a-zA-Z0-9$*&@#]{8,}/;

  if (!data.name || !data.email || !data.password) {
    return { field: "Todos", message: "Preencha todos os campos!" };
  } else if (!data.email.includes("@")) {
    return { field: "email", message: "Formato inválido de e-mail!" };
  } else if (!regex.test(data.password)) {
    return { field: "password", message: "Senha com ao menos 8 caracteres!" };
  } else {
    try {
      await api.postSignUp(data);

      navigate("/entrar");
    } catch (err) {
      if (err.message.includes(409)) {
        return { field: "email", message: "E-mail já cadastrado!" };
      } else if (err.message.includes(422)) {
        return { field: "Todos", message: "Dados no formato incorreto!" };
      } else if (err.message.includes(500)) {
        Swal.fire({
          icon: "error",
          title: "Erro com o servidor",
          text: "Volte mais tarde...",
        });
        return;
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro desconhecido",
          text: "Volte mais tarde...",
        });
        return;
      }
    }
  }
}
