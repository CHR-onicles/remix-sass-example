import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import classes from "./home.module.scss";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1 className={classes.heading}>
        <span>Hello</span>
        <span>World</span>
      </h1>
      <div className={classes["text-section"]}>
        <p>Jesus loves you.</p>
        <p>Got that?</p>
      </div>
      <Link to="404">Go to 404 page</Link>
    </>
  );
}
