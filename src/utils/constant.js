export const ContentText = {
  DONT_HAVE_ACCOUNT: ' Don/t have an account? SignUp',
  ALREADY_HAVE_ACCOUNT: ' Already have an account? Login',
  REGISTER_TEXT: 'Register to StoryBook',
  LOGIN_TEXT: 'Login to StoryBook',
  LOGIN_BUTTON_TEXT: 'Login',
  REGISTER_BUTTON_TEXT: 'Register',
};

export const ErrorMessage = {
  USER_ALREADY_EXIST: 'That email address is already in use!',
};
export const SuccessMessage = {
  REGISTER_SUCCESSFULLY: 'Registered successfully',
  LOGGEDIN_SUCCESSFULLY: 'Logged in successfully',
};
export const ValidationMessage = {
  EMAIL_REQUIRED: '* Email is Required',
  NAME_REQUIRED: '*Name is Required',
  NUMBER_REQUIRED: '* Mobile Number is Required',
  INVALID_NUMBER: 'Phone number is not valid',
  PASSWORD_REQUIRED: '* Password is Required',
  PASSWORD_VALIDATION:
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
};
export const regex = {
  PHONE_REGEX:
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  PASSWORD_REGEX:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
};
