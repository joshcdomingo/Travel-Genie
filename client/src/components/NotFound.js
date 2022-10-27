import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useEffect, useRef} from "react";

function NotFound() {

  const notFound = useRef();

  useEffect(() => {

    let ctx = gsap.context(() => {
      gsap.from(".animate", {x: -100, duration: 1, ease: "bounce"});
      gsap.from(".animate3", {opacity: 0, duration: 1, delay: 1});
    }, notFound);

    return () => ctx.revert();
  }, notFound);

  return (
    <div className="notFound" ref={notFound}>
      <h2 className="animate">404</h2>
      <p className="animate3">
        Click <Link to="/">here</Link> to go back home.
      </p>
    </div>
  );
}

export default NotFound;