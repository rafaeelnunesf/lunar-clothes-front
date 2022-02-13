import Swal from "sweetalert2";
import api from "../services/api";

export default async function valideLogin(setAndPersistToken, navigate, data) {
  if (!data.email || !data.password) {
    return { field: "Todos", message: "Preencha todos os campos!" };
  } else if (!data.email.includes("@")) {
    return { field: "email", message: "Formato inválido de e-mail!" };
  } else {
    try {
      const result = await api.postSignIn(data);

      setAndPersistToken(result.data);
      navigate("/");
    } catch (err) {
      if (err.message.includes(404)) {
        return { field: "email", message: "E-mail não encontrado!" };
      } else if (err.message.includes(401)) {
        return { field: "password", message: "Senha incorreta!" };
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
