import React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you’re looking for doesn’t exist.</p>
      <Link href="/">
        <a style={styles.homeLink}>Go back to Home</a>
      </Link>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#111111",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "6rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
  },
  homeLink: {
    fontSize: "1rem",
    color: "#4caf50",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    border: "1px solid #4caf50",
    borderRadius: "4px",
  },
};
