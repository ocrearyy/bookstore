// const apiId = 'HCjJZpfpfCQz77Ezrye5';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HCjJZpfpfCQz77Ezrye5/books';

export const getBooks = async () => {
  try {
    const result = await fetch(baseUrl);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const AddBook = async (book) => {
  try {
    const result = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    return result;
  } catch (error) {
    return error;
  }
};

export const removeBook = async (id) => {
  try {
    const result = await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: id }),
    });
    return result;
  } catch (error) {
    return error;
  }
};
