USE dbName;

DELETE FROM users;
DELETE FROM items;

INSERT INTO users (`email`, `name`, `pic`, `bio`)
VALUES ('bob@gmail.com', 'bob', 'https://pyxis.nymag.com/v1/imgs/451/ba2/6f22dfb79768b5c0841c4570cbd8cfb7bf-13-armond-white-2.rsquare.w330.jpg', 'i love trading phones');

INSERT INTO items (`proposer_id`)
VALUES (1);
