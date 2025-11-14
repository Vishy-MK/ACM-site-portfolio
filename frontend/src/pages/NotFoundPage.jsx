import React, { useEffect } from "react";
import { BotIcon } from "lucide-react";
function NotFoundPage() {
  useEffect(() => {
    document.title = "404 Not Found | ACM Manipal";
  }, []);
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "6rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <BotIcon size={100} strokeWidth={2} />
      <h2>404 - Page Not Found</h2>
      <p>
        The page you are looking for does not exist. Just go back{" "}
        <a href="/" className="underline text-blue-500 ">
          Home
        </a>
      </p>
      <br />
      <br />
    </div>
  );
}

export default NotFoundPage;
