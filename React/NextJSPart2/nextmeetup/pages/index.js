import MeetupList from "@/components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from 'next/head';
import { Fragment } from "react";




const HomePage = (props) => {

    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list of react meetups!" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

/*

export async function getServerSideProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}

*/


export async function getStaticProps() {


    const client = await MongoClient.connect("mongodb+srv://mayankchoudhary6055:l8lUfDqPS6ajrWyX@fullstackapp.6vmlg7g.mongodb.net/meetups?retryWrites=true&w=majority&appName=FullStackApp");

    const db = client.db();

    const meetupCollection = db.collection('meetups');

    const meetups = await meetupCollection.find().toArray();

    client.close();


    return {
        props: {
            meetups: meetups.map((meetup) => {
                return {
                    id: meetup._id.toString(),
                    title: meetup.title,
                    description: meetup.description,
                    address: meetup.address,
                    image: meetup.image
                }
            })
        },
        revalidate: 10
    };

}

export default HomePage;