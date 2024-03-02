import { Suspense } from 'react';
import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';


function Meals() {


    const meals = getMeals();

    return <MealsGrid meals={meals} />;
}

export const metadata = {
    title: "All Meals",
    description: " Delecious meals , prepared by food-loving community."
};

export default function MealsPage() {

    console.log("Meals Page");

    const meals = getMeals();

    return <>

        <header className={classes.header}>
            <h1>Delicious meals,created <span className={classes.highlight}></span> by you.</h1>
            <p>Choose your favorite recipe and cook it yourself. It is easy and fun! </p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share your Favorite Recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                <Meals />
            </Suspense>
        </main>
    </>
}