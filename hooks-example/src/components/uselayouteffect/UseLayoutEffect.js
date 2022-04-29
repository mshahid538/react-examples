import { Link } from "react-router-dom";
export default function useLayoutEffect() {
  return (
    <>
      <p>
        <b>
          The signature is identical to useEffect, but it fires synchronously
          after all DOM mutations.
        </b>{" "}
        Use this to read layout from the DOM and synchronously re-render.
        Updates scheduled inside useLayoutEffect will be flushed synchronously,
        before the browser has a chance to paint.
      </p>

      <a
        href="https://blog.logrocket.com/useeffect-vs-uselayouteffect-examples/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Click to read an excellent article with examples
      </a>
    </>
  );
}
