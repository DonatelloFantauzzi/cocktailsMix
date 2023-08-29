import { useRouteError, Link } from "react-router-dom";
import img from "../assets/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="file non trovato" />
          <h3>Ops!</h3>
          <p>sembra che non riusciamo a trovare la pagina che stai cercando</p>
          <Link to="/">Torna alla Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Qualcosa è andato storto</h3>
      </div>
    </Wrapper>
  );
}
export default Error;
