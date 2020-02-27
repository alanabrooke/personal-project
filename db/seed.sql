CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    zodiac_id INT
)

CREATE TABLE zodiac (
    zodiac_id SERIAL PRIMARY KEY,
    zodiac_name VARCHAR(50) NULL,
    traits VARCHAR(500) NOT NULL,
    dates VARCHAR(100) NOT NULL
)

CREATE TABLE genre (
    genre_id SERIAL PRIMARY KEY,
    genre_name VARCHAR(1000) UNIQUE NOT NULL,
    zodiac_id INT NOT NULL
)


-- INSERT INTO users (username, password, zodiac_id)
-- VALUES ('alanaBrooke', 'Badabing', 2);


-- CREATE TABLE users
-- (
--   user_id SERIAL PRIMARY KEY,
--   username VARCHAR(50) UNIQUE,
--   password TEXT,
--   zodiac_id INT REFERENCES zodiac
-- (zodiac_id)
-- );

-- SELECT genre.genre_name, genre.zodiac_id, zodiac.zodiac_name, zodiac.dates, zodiac.traits
-- FROM genre
-- INNER JOIN zodiac
-- ON genre.zodiac_id = zodiac.zodiac_id;