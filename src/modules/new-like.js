async function newLike(id) {
  const apikey = 'LHYarZybqm9V0G7OV772';
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apikey}/likes/`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        likes: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error adding new like');
    }

    // Optionally, return the parsed JSON response
    return response.json();
  } catch (error) {
    console.error('Error adding new like:', error);
    return { error: 'Error adding new like' }; // Return an error object
  }
}

export default newLike;
