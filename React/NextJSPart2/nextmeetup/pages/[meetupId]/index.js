import MeetupDetail from '@/components/meetups/MeetupDetail'
import { MongoClient, ObjectId } from 'mongodb';
import React, { Fragment } from 'react'
import Head from 'next/head';
const MeetupDetails = (props) => {


    return (

        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name='description' content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description} />
        </Fragment>);

}


export async function getStaticPaths() {

    const client = await MongoClient.connect("mongodb+srv://mayankchoudhary6055:l8lUfDqPS6ajrWyX@fullstackapp.6vmlg7g.mongodb.net/meetups?retryWrites=true&w=majority&appName=FullStackApp");

    const db = client.db();

    const meetupCollection = db.collection('meetups');

    const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();


    client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup) => {
            return {
                params: {
                    meetupId: meetup._id.toString()
                }
            };
        })
    };
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;


    const client = await MongoClient.connect("mongodb+srv://mayankchoudhary6055:l8lUfDqPS6ajrWyX@fullstackapp.6vmlg7g.mongodb.net/meetups?retryWrites=true&w=majority&appName=FullStackApp");

    const db = client.db();

    const meetupCollection = db.collection('meetups');

    const selectedMeetup = await meetupCollection.findOne({ _id: new ObjectId(meetupId) });


    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
                address: selectedMeetup.address
            }
        }
    };
}

export default MeetupDetails