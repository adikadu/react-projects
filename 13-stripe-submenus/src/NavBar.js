import classes from "./NavBar.module.css";
import Button from "./UI/Button";
import SubMenu from "./SubMenu";
import { ContextProvider } from "./context";
import data from "./data";

export default function NavBar() {
  return (
    <nav className={classes["nav-bar"]}>
      <img
        src="https://react-projects-13-stripe-submenus.netlify.app/static/media/logo.1090473d.svg"
        alt="stripe-logo"
      />
      <ContextProvider>
        <ul>
          {data.map((el, idx) => (
            <li key={idx}>
              <SubMenu page={el.page} links={el.links} />
            </li>
          ))}
        </ul>
      </ContextProvider>
      <Button>Sign in</Button>
    </nav>
  );
}
