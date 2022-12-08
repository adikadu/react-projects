import classes from "./Card.module.css";

export default function Card({ avatar, username, link }) {
  return (
    <div className={classes["card"]}>
      <img src={avatar} alt={username} />
      <span>{username}</span>
      <a href={link} target="_blank" rel="noreferrer noopener">
        view profile
      </a>
    </div>
  );
}
