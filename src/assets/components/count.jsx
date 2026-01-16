import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Effect() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate("/done");
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, navigate]);

  return (
    <>
      <h1>Redirecting in {count}...</h1>
    </>
  );
}