const apiId = 'HCjJZpfpfCQz77Ezrye5';
const baseUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HCjJZpfpfCQz77Ezrye5/books';
export const getBooks = async () => {
  try {
    const result = await fetch(baseUrl);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};
