function initInputRegister(setInputRegister, text) {
  const input = [
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

  if (!text) {
    setInputRegister(input);
  } else {
    if (text.field === "Todos") {
      input.map((field) => (field.textError = text.message));
      setInputRegister(input);
    } else if (text.field === "email") {
      input[1].textError = text.message;
      setInputRegister(input);
    } else if (text.field === "password") {
      input[2].textError = text.message;
      setInputRegister(input);
    }
  }
}

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

export { initInputLogin, initInputRegister };
