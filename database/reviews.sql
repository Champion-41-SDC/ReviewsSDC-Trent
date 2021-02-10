DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id bigserial not null,
  product_id numeric,
  title varchar(100) not null,
  _description varchar(500) not null,
  stars numeric not null,
  comfort_level varchar(21) not null,
  fit varchar(30) not null,
  quality varchar(30) not null,
  recommend varchar(30) not null,
  createdAt numeric not null,
  _user varchar(20) not null,
  email varchar(100) not null,
  _yes numeric DEFAULT 0,
  _no numeric DEFAULT 0,
  report varchar(6) DEFAULT 'Report'
);

COPY reviews( product_id,
  title,
  _description,
  stars,
  comfort_level,
  fit,
  quality,
  recommend,
  createdAt,
  _user,
  email,
  _yes,
  _no,
  report)
FROM '/Users/trentito/Desktop/WORK/SDC/reviews/reviews.csv'
DELIMITER ','
CSV HEADER;