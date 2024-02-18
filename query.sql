CREATE TABLE
    users(
        user_id VARCHAR PRIMARY KEY,
        user_email VARCHAR NOT NULL,
        user_password VARCHAR NOT NULL,
        user_fullname VARCHAR
    );

SELECT * FROM users WHERE email='(user_email.user_fullname)';

INSERT INTO
    users(
        user_id,
        user_email,
        user_password,
        user_fullname
    )
VALUES (
        '783dq-7hd8q-7d87q',
        'example@gmail.com',
        'pw123',
        'example_name'
    );

DELETE FROM users WHERE id='user_id.users';