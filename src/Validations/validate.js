export const validate = (type, name) => {
  if (type === "text") {
    return { required: "*Required" };
  } else if (type === "email") {
    return {
      required: "*Required",
      pattern:
        /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
    };
  } else if (type === "number") {
    switch (name) {
      case "mobile":
        return {
          required: "*Required",
          minLength: { value: 10, message: "*Invalid mobile number " },
          maxLength: { value: 10, message: "*Invalid mobile number" },
        };
      case "postalCode":
        return {
          required: "*Required",
          minLength: { value: 6, message: "*Invalid postal code" },
          maxLength: { value: 6, message: "*Invalid postal code" },
        };
      default:
        return { required: "*Required" };
    }
  }
};
