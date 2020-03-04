SELECT genre.genre_name, genre.zodiac_id, zodiac.zodiac_name, zodiac.dates, zodiac.traits
FROM genre
INNER JOIN zodiac
ON genre.zodiac_id = zodiac.zodiac_id
-- INNER JOIN games