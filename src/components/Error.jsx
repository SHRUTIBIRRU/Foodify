// ✅ CORRECT
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error); // Log for debugging

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Oops! Something went wrong</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p style={{ color: "red" }}>
        <i>{error?.statusText || error?.message || "Unknown error"}</i>
      </p>
      {error?.status && <p>Status: {error.status}</p>}
    </div>
  );
}

export default ErrorPage;
