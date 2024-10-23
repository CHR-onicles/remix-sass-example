import { Link } from "@remix-run/react";
import classes from "~/routes/_index/home.module.scss";

export default function NotFoundPage() {
  return (
    <div>
      <h1 className={classes.heading}>404</h1>
      <div className="text-section">
        <p>This page does not exist yet</p>
      </div>
      <Link to="/">Go back home</Link>
    </div>
  );
}
