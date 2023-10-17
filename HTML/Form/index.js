function submitForm(event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(input => input.value);
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  const popupContent = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Gender:</strong> ${gender.join(', ')}</p>
      <p><strong>Profession:</strong> ${profession}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

  const popup = document.getElementById("popup");
  const popupContentElement = document.getElementById("popup-content");
  popup.style.display = "block";
  popupContentElement.innerHTML = popupContent;
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  document.getElementById("surveyForm").reset();
}
