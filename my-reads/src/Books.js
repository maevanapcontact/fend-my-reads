import React, { Component } from 'react'

class Books extends Component {
	render() {
		return (
			// Complete list of books
			<ul className='books-list'>
				{this.props.books.map((book) => (
					// One book item
					<li key={book.id} className='book-item'>
						<h2>{book.title}</h2>
						<h3>{book.author}</h3>
						<div className='book-info'>
							<img src={book.cover} alt={book.title} />
							<div className='book-btns'>
								<button>Currently Reading</button>
								<button>Wants to read</button>
								<button>Read</button>
								<button>None</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		)
	}
}

export default Books