import classes from "./SubMenu.module.css";
import { useGlobalContext } from "./context";
import { useEffect, useRef } from "react";

export default function SubMenu(props) {
  const ctx = useGlobalContext();
  const btnRef = useRef();
  useEffect(() => {
    const rectPos = btnRef.current.getBoundingClientRect();
    // console.log("rectPos", rectPos);
    ctx.posHandler({
      page: props.page,
      top: rectPos.top,
      center: rectPos.x + rectPos.width / 2,
    });
  }, [ctx, props.page]);
  // console.log("ctx", ctx);
  return (
    <div
      onMouseLeave={() => ctx.setCurrrentActive(null)}
      className={classes["sub-menu"]}
    >
      <button
        ref={btnRef}
        onMouseOver={() => ctx.setCurrrentActive(props.page)}
      >
        {props.page}
      </button>
      {ctx.currrentActive === props.page && (
        <div className={classes["sub-menu-items"]}>
          <h3>{props.page}</h3>
          <ul>
            {props.links.map((link, idx) => (
              <li key={idx}>{link.label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
