import NewMeetupForm from '@/components/meetups/NewMeetupForm'
import { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import Head from 'next/head';
const NewMeetupPage = () => {
    const router = useRouter();


    async function addMeetupHandler(enteredMeetupData) {

        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enteredMeetupData)
        });

        const data = await response.json();
        router.push('/');

    }

    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta name="description" content="Add your own meetups and create amazing networking opportunities." />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    )
}

export default NewMeetupPage