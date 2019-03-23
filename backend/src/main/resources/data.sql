INSERT INTO role (id, role) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

INSERT INTO user_roles (role_id, user_id) VALUES
(1, 1),
(2, 1),
(2, 2),
(1, 3);

INSERT INTO address (id, country, city, street, zip_code) VALUES
(1, 'Norway', 'Ålesund', 'Larsgårdsvegen 2', 6009),
(2, 'China', 'Jingzhao', 'Jingji dao 13', 87483),
(3, 'Banana Island', 'Apples city', 'Bean street 439', 6749);

INSERT INTO user (id, email, first_name, last_name, password, country, birth_date, image, address_id) VALUES
(1, 'one@email.com', 'Tom', 'Trevor', '123456789', 'China','2011-03-12', 'https://dummyimage.com/600x400/000/fff', 2),
(2, 'two@email.sk', 'John', 'Michael', '5542js9K', 'Norway','1995-11-15', 'https://dummyimage.com/400x100/e322e3/fff', 1),
(3, 'three@email.no', 'Sara', 'Sam', 'ruYj3rf2','Norway', '1995-11-15','https://dummyimage.com/400x400/22e379/2a308c&text=Some+text+here', null);