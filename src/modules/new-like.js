export const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

export const saveLikes = async (appId, itemId, likes) => {
  try {
    const response = await fetch(`${apiUrl}apps/${appId}/likes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: itemId,
        likes,
      }),
    });
    const { result } = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};

export const handleSaveLikes = async (appId) => {
  try {
    const response = await fetch(`${apiUrl}apps/${appId}/likes/`);
    if (!response.ok) {
      throw new Error('Failed to fetch game scores');
    }
    const { result } = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};