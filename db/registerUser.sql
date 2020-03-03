INSERT INTO users
(username, password, zodiac_id, email)
VALUES
($1, $2, $3, $4)
RETURNING*