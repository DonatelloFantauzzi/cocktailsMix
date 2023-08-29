import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);

    console.log(response);

    toast.success(response.data.msg);

    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Newsletter() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        la nostra newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          nome
        </label>
        <input type="text" name="name" className="form-input" id="name" />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          Cognome
        </label>
        <input
          type="text"
          name="lastName"
          className="form-input"
          id="lastName"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          nome
        </label>
        <input type="text" name="email" className="form-input" id="email" />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sto inviando" : "Invia"}
      </button>
    </Form>
  );
}
export default Newsletter;
