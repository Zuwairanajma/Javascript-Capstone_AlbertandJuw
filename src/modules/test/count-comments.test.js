import getCommentCount from './display-comments.js';

test('getCommentCount returns the correct comment count', async () => {
  const mockResponse = {
    json: jest.fn().mockResolvedValue([
      { comment_id: 1, username: 'John', comment: 'Great item' },
      { comment_id: 2, username: 'Jane', comment: 'Nice work' },
    ]),
  };
  global.fetch = jest.fn().mockResolvedValue(mockResponse);

  const itemId = 1;
  const commentCount = await getCommentCount(itemId);

  expect(commentCount).toBe(2);
});