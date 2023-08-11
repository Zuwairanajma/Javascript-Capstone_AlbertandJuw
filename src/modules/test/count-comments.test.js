import displayCommentsList from './display-comments.js';

describe('showCommentsList', () => {
  test('should render the correct title element', () => {
    const parent = document.createElement('div');
    const mockedData = [
      {
        creation_date: '2022-11-30',
        username: 'Anna',
        comment: 'Good',
      },
      {
        creation_date: '2022-12-01',
        username: 'John',
        comment: 'Excellent',
      },
    ];

    displayCommentsList(mockedData, parent);

    // make sure that the title element is present and contains the correct text
    const titleElement = parent.querySelector('h3');
    expect(titleElement).not.toBeNull();
    expect(titleElement.innerHTML).toBe(`Comments (${mockedData.length})`);
  });

  test('should render the correct number of comments', () => {
    const parent = document.createElement('div');
    const mockedData = [
      {
        creation_date: '2022-11-30',
        username: 'Anna',
        comment: 'Good',
      },
      {
        creation_date: '2022-12-01',
        username: 'John',
        comment: 'Excellent',
      },
    ];

    displayCommentsList(mockedData, parent);

    // the number of comments matches the length of the mocked data array
    expect(parent.childElementCount).toBe(mockedData.length);

    // make sure that each comment element contains the correct text
    mockedData.forEach((comment, index) => {
      const commentContainer = parent.children[index];
      const commentText = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
      expect(commentContainer.innerHTML).toContain(commentText);
    });
  });
});
