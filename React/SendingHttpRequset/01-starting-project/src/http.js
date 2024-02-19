export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const resoponseData = await response.json();

    if (!response.ok) {
        //200 , 300
        throw new Error('Failed to fetch places.');
    }

    return resoponseData.places;
}

export async function updateUserPlaces(places) {

    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const responseData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to update user data.');
    }

    return responseData.message;
}

export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    const resoponseData = await response.json();

    if (!response.ok) {
        //200 , 300
        throw new Error('Failed to fetch places.');
    }

    return resoponseData.places;
}