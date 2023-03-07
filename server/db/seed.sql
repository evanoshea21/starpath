USE dbName;

DELETE FROM users;

INSERT INTO users (`email`, `name`, `thumbnail_url`, `description`, `street`, `city`, `state`, `country`)
VALUES ('bob@gmail.com', 'bob', 'https://pyxis.nymag.com/v1/imgs/451/ba2/6f22dfb79768b5c0841c4570cbd8cfb7bf-13-armond-white-2.rsquare.w330.jpg', 'i love trading phones', '1 street way', 'Los Angeles', 'CA', 'USA');
