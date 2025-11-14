import { useState } from "react";
import { EmailValueContext } from "./Contexts";

const EmailFieldValueProvider = ({ children }) => {
  const [typedEmail, setTypedEmail] = useState("");

  const emailValue = {
    typedEmail,
    setTypedEmail,
  };
  return <EmailValueContext value={emailValue}>{children}</EmailValueContext>;
};

export default EmailFieldValueProvider;
