import classes from "./loading.module.css";

export default function MealsLoading() {
  return (
    <>
    <div className={classes.center}>
     <div className={classes.loader}></div>
    </div>
    </>
  );
}
