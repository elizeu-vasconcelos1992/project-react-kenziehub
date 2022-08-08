import { MainDash } from "./styles";

function Main({ user }) {
  if (user) {
    return (
      <MainDash>
        <div className="div-user">
          <h3>{user.user.name}</h3>
          <p>{user.user.course_module}</p>
        </div>
        <div className="div-contend">
          <h3>Que pena! Estamos em desenvolvimento </h3>
          <h4>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </h4>
        </div>
      </MainDash>
    );
  }
}

export default Main;
