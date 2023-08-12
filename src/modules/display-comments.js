export const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

export const saveComment = async (appId, itemId, username, comment, creationDate) => {
  await fetch(`${apiUrl}apps/${appId}/comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
      created_at: creationDate,
    }),
  });
};

export const handleSaveComment = async (itemId, appId) => {
  const response = await fetch(
    `${apiUrl}apps/${appId}/comments?item_id=${itemId}`,
  );
  const data = await response.json();

  const commentsWithDate = data.map((comment) => ({
    ...comment,
    created_at: new Date(comment.creation_date),
  }));

  const commentCount = commentsWithDate.length;

  return { comments: commentsWithDate, commentCount };
};
