import React from 'react'

import SearchInput from './SearchInput'
import BookItem from './BookItem'

function SearchPage(props) {
	const { books } = props;

	return (
		<div className="search-page">
			<SearchInput />

			<ul className="search-books-container">
				{console.log(books)}
				{books.map((book) => (
					<li key={book.id}>
						<BookItem book={book} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchPage