import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/app/lib/meals";
import { Suspense } from "react";
import Loading from "./loading";

export async function AllMeals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Explore our <span className={classes.highlight}>Delicious Meals</span>
        </h1>
        <p>Discover new recipes and share your own culinary creations!</p>
        <p classes={classes.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<Loading />}>
          <AllMeals />
        </Suspense>
      </main>
    </>
  );
}
