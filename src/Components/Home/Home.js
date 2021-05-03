import { auth, provider } from "../../Firebase/firebase";
import { useAuth } from "../../Contexts/AuthProvider";
import { Link } from "react-router-dom";
import "./Home.css";

export function Home() {
  const { user, loginUser } = useAuth();
  async function Login() {
    try {
      const response = await auth.signInWithPopup(provider);
      loginUser(response);
    } catch (error) {
      alert("!!!Error!!! ", error);
    }
  }

  return (
    <div className="home">
      <div className="defination">
        <p className="defination-word">unbun</p>
        <p className="defination-pronounciation">/ʌnˈbʌn/ अनबन</p>
        <p className="defination-meaning">disagreement between people</p>
        <p className="defination-sub-meaning">
          A देसी spin-off of <span>Discord</span>
        </p>
        <p className="defination-example">
          "Let's move onto Unbun, to remove the unbun between us"
        </p>
      </div>
      {!user.user && (
        <button className="signin-button" onClick={Login}>
          Sign-in with Google
        </button>
      )}
      {user.user && (
        <Link to="/channel" className="link">
          <button className="signin-button">Let's Unbun</button>
        </Link>
      )}
    </div>
  );
}
