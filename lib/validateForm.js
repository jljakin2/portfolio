const validateForm = values => {
  /**
   * We first set an empty errors object, then run through our conditional checks to make sure all fields are authorized.
   * If any conditional check is true, the object will be updated for that field value with the corresponding error message.
   * We will use this errors object to check for and show the errors on the form component.
   */

  let errors = {};

  // is the name missing?
  if (!values.name.trim()) {
    errors.name = "Name is missing";
  }

  // is the email missing?
  if (!values.email.trim()) {
    errors.email = "Email is missing";
    // is the email in the correct format?
  } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
    errors.email = "Wrong format";
  }

  // is the subject missing?
  if (!values.subject.trim()) {
    errors.subject = "Subject is missing";
  }

  // is the message missing?
  if (!values.message.trim()) {
    errors.message = "Message is missing";
  }

  return errors;
};

export default validateForm;
