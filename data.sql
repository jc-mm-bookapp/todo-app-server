CREATE TABLE books (book_id SERIAL PRIMARY KEY, author VARCHAR(255) UNIQUE NOT NULL, title VARCHAR (255), isbn VARCHAR (255), image_url VARCHAR (255), book_description VARCHAR(1000) );


 INSERT INTO books ("Frank Herbert", "Dune", "ISBN_13 9780441013593", "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", "Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny." );

"title": "Dune",
  "author": "Frank Herbert",
  "isbn": "ISBN_13 9780441013593",
  "image_url": "http://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  "description": "Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny."
}
UPDATE articles
        SET author_id=$1, title=$2, category=$3, published_on=$4, body=$5
        WHERE article_id=$6