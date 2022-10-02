export const getBook = async () => {
  const fetchedbook = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3QcxZdLhBBqaMRxgiMg4/books');
  const jformat = await fetchedbook.json();
  return jformat;
};

export const postBook = async (booksArr) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3QcxZdLhBBqaMRxgiMg4/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(booksArr),
  });
};

export const deleteBook = async (id) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3QcxZdLhBBqaMRxgiMg4/books${id}`,
    {
      method: 'DELETE',
    });
};
