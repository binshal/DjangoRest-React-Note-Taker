import React, { useState } from 'react';
import Form from '../components/Form';

function Register() {
  const [error, setError] = useState(null);

  const handleError = (error) => {
    setError(error);
  };

  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      <Form route={"/api/user/register/"} method={"register"} onError={handleError} />
    </div>
  );
}

export default Register;
