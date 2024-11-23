import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(""); // To handle error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);

    // Validate if both fields are filled
    if (!formData.email || !formData.password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      // Send login data to the backend API
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // Store the JWT token in localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect to user dashboard or home page after successful login
      navigate("/user"); // or redirect to home page if needed
    } catch (err) {
      setError("Invalid credentials or server error");
      console.error(err);
    }
  };

  return (
    <section className="login-section" style={styles.section}>
      <div className="container" style={styles.container}>
        <h2 style={styles.heading}>Welcome Back!</h2>
        <p style={styles.subheading}>Login to continue</p>

        {/* Error message display */}
        {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                style={styles.input}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.togglePassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <p style={styles.footerText}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.signupLink}>
            Signup here
          </Link>
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f4f8",
  },
  container: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
    width: "400px",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#333",
  },
  subheading: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
  },
  label: {
    fontWeight: "600",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "1rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  passwordContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  togglePassword: {
    marginLeft: "10px",
    border: "none",
    backgroundColor: "transparent",
    color: "#007bff",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "600",
    transition: "all 0.3s",
  },
  footerText: {
    marginTop: "20px",
    fontSize: "0.9rem",
    color: "#555",
    marginBottom: "20px",
  },
  signupLink: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default Login;
