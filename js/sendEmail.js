// the host is EMAILJS https://dashboard.emailjs.com/admin/account

const serviceID = "service_wdet5ml";
const templateID = "template_olzpki8";
const publicKey = "h_pwtrWlXnjXea-8z";

let popupEmail = document.getElementById("popupEmail");

function openPopup() {
  popupEmail.classList.add("open-popup");
}

function closePopup() {
  popupEmail.classList.remove("open-popup");
}

function sendEmail() {
  var params = {
    from_name: document.getElementById("from_name").value,
    from_email: document.getElementById("from_email").value,
    from_message: document.getElementById("from_message").value,
  };

  document.getElementById("emailPopupTextHeader").innerHTML = "Hi " + from_name.value;
  document.getElementById("emailPopupTextParagraph").innerHTML = "Sending... ";

  emailjs.send(serviceID, templateID, params, publicKey)
    .then(function (response) {
      if (response.status == 200) {
        console.log('EMAIL SUCCESS!', response.status, response.text);

        document.getElementById("emailPopupTextParagraph").innerHTML = "Your message was sent successfully! ";
      }
      else {
        console.log('EMAIL FAILED...', error);
        document.getElementById("emailPopupTextParagraph").innerHTML = "There was a problem in processing your message. Please send an E-mail to frunzadan96@gmail.com. ";
      }

    }, function (error) {
      console.log('EMAIL FAILED...', error);
      document.getElementById("emailPopupTextParagraph").innerHTML = "Our servers are too full. Please send an E-mail to frunzadan96@gmail.com. ";
    });

  openPopup();
  setTimeout(closePopup, 8000);
}
