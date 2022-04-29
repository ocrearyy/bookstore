import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <div className="book-preview">
        <h2>{ title }</h2>
        <p>{ author }</p>
        <button type="button">remove</button>
      </div>
    </div>
  );
};

export default Book;
Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}
