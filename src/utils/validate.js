export const checkValidData = (email, password, name) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  if (name && !validateName(name)) return "name is not valid";
  if (!isEmailValid) return "email is not valid";
  if (!validatePassword(password)) return "password is not valid";
  return null;
};

function validatePassword(password) {
  // Minimum length of the password
  const minLength = 8;

  // Regular expression for password validation
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  // Check if the password meets the minimum length requirement
  if (password.length < minLength) {
    return false;
  }

  // Test the password against the regular expression
  return passwordRegex.test(password);
}

function validateName(name) {
  // Regular expression for name validation
  const nameRegex = /^[a-zA-Z-' ]+$/;

  // Test the name against the regular expression
  return nameRegex.test(name);
}
