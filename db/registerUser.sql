INSERT INTO users
(username, password, zodiac_id)
VALUES
($1, $2, $3)
RETURNING*