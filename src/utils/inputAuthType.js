const inputRegister = [
  {
    label: "Nome",
    type: "text",
    autoComplete: "username",
    parameterName: "name",
  },
  {
    label: "Email",
    type: "email",
    autoComplete: "email",
    parameterName: "email",
  },
  {
    label: "Senha",
    type: "password",
    autoComplete: "current-password",
    parameterName: "password",
  },
];

function initInputLogin(setInputLogin, text) {
  const input = [
    {
      label: "Email",
      type: "email",
      autoComplete: "email",
      parameterName: "email",
    },
    {
      label: "Senha",
      type: "password",
      autoComplete: "current-password",
      parameterName: "password",
    },
  ];

  if (!text) {
    setInputLogin(input);
  } else {
    if (text.field === "Todos") {
      input.map((field) => (field.textError = text.message));
      setInputLogin(input);
    } else if (text.field === "email") {
      input[0].textError = text.message;
      setInputLogin(input);
    } else if (text.field === "password") {
      input[1].textError = text.message;
      setInputLogin(input);
    }
  }
}

export { initInputLogin, inputRegister };
