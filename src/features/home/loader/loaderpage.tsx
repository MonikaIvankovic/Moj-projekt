import Loader from "../../../components/loader";
import Container from "../../../components/container";
import { useState } from "react";

const LoaderPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const handleClick = () => {
    setIsLoading(true);

    // Simulating an asynchronous task

    setTimeout(() => {
      setIsLoading(false);
      setIsContentVisible(true);
    }, 2000);
  };
  return (
    <Container>
      {" "}
      <div className="loader__wrapper">
        <button className="btn" onClick={handleClick}>
          Load Content
        </button>
        {isLoading && <Loader />}
        <div style={{ display: isContentVisible ? "block" : "none" }}>
          {!isLoading && <h1>Content Loaded!</h1>}
          {/* Add your content here */}
        </div>
      </div>
    </Container>
  );
};
export default LoaderPage;
