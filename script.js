theForm = document.getElementById("form-1");
buttonJS = document.getElementsByTagName("button");

const submitEventHandler = (not_e) => {
  not_e.preventDefault();
  alert(`prevented default with not_e`);
  const formData = new FormData(theForm);
  const inputData = formData.get("the-input-name");
  alert(`the input data is: ${inputData}`);
};

document.addEventListener("DOMContentLoaded", () => {
  buttonJS[0].addEventListener("click", submitEventHandler);
});
