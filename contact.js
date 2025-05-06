(function() {
    emailjs.init("NgjSNW98qpBWjzuAZ");
  })();
  
  const form = document.getElementById("contact-form");
  const btn  = document.getElementById("send-btn");
  const msgP = document.getElementById("response-msg");
  
  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    msgP.textContent = "";
  
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
  
    btn.classList.add("loading");
    btn.disabled = true;
  
    try {
      await emailjs.send("service_jl84muc", "template_1kndc3b", {
        from_email: form.email.value,
        subject:    form.subject.value,
        message:    form.message.value,
      });
      msgP.textContent = "Email sent successfully!";
      form.reset();
    } catch (error) {
      console.error(error);
      msgP.textContent = "Error sending email. Please try again later.";
    } finally {
      btn.classList.remove("loading");
      btn.disabled = false;
    }
  });
  