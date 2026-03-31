const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "f9d778f0-5c74-4dbc-9fd0-4e97cb2bdba5";

export async function submitContactForm(formElement, labels = {}) {
  const formData = new FormData(formElement);
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  formData.append(
    "subject",
    labels.subject || "New website enquiry from Centcom Systems"
  );
  formData.append("from_name", labels.fromName || "Centcom Systems Website");

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  return response.json();
}
