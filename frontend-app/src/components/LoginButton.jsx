import { useAuth0 } from '@auth0/auth0-react';
import { useCallback } from 'react';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = useCallback(
    () => loginWithRedirect(),
    [loginWithRedirect],
  );

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={handleLogin}
    >
      Log In
    </button>
  );
}

export default LoginButton;