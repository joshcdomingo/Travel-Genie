drop database if exists travel_genie;
create database travel_genie;
use travel_genie;

-- create tables and relationships
create table app_user (
    app_user_id int primary key auto_increment,
    username varchar(25) not null,
    nickname varchar(250) not null,
    password_hash varchar(1024),
    enabled boolean not null default true
);

create table wish_list (
    wishlist_id int primary key auto_increment,
    app_user_id int primary key auto_increment,
    city varchar(50) not null,
    constraint fk_entertainment_id
        foreign key (entertainment_id)
        references entertainment(entertainment_id)
);

create table entertainment (
	entertainment_id int primary key auto_increment,
    entertainment_name varchar(50),
    kid_friendly tinyint(1),
    price_range varchar(50)
);

create table city_to_entertainment (
    constraint fk_city_id
        foreign key (city_id)
        references city(city_id),
	constraint fk_entertainment_id
        foreign key (entertainment_id)
        references entertainment(entertainment_id)
);

create table city (
    city_id int primary key auto_increment,
    city_name varchar(50) not null,
    constraint fk_entertainment_id
        foreign key (entertainment_id)
        references entertainment(entertainment_id),
	constraint fk_entertainment_id
        foreign key (entertainment_id)
        references entertainment(entertainment_id)
);

create table scenery (
    scenery_id int primary key auto_increment,
    scenery_name varchar(50) not null
);

create table country (
    country_id int not null,
    country_name varchar(50) not null
);

-- data
insert into app_user (app_user_id, username, password_hash) values
    (1, 'user', '$2a$10$O07BeyVEy.eGy9zmJQR/WeIDdb5Q6PMDbTZlUXOMQ0B.EAkbiuUK6'),
    (2, 'admin', '$2a$10$z8mwVv2mOjkWkFuzxYUFcO6SH1FaEftCw4M2Ltv6/5x7nigwEJKIO');

        
insert into scenery (scenery_id, scenery_name) values
    (1, 'METROPOLITAN'),
    (2, 'BEACH'),
    (3, 'MOUNTAIN'),
    (4, 'DESERT'),
    (5, 'SNOW');

insert into country (country_id, country_name) values
    (1, 'United States');

insert into entertainment (entertainment_id, entertainment_name, activity_level, price_range, kid_friendly) values
	(1, 'Sun Bathing', 'LOW', '$', true),
    (2, 'Sight Seeing', 'MEDIUM', '$', true),
    (3, 'Hiking', 'HIGH', '$', false),
    (4, 'Casino', 'LOW', '$$$', false),
    (5, 'Skiing', 'MEDIUM', '$$', true);

insert into city (city_id, city_name, country_id, scenery_id) values
	(1, 'Washington DC', 1, 1),
	(2, 'Santa Monica', 1, 2),
	(3, 'Ashville', 1, 3),
	(4, 'Las Vegas', 1, 4),
	(5, 'Portland', 1, 5);

insert into city_to_entertainment (city_id, entertainment_id) values
	(1, 2),
    (2, 1),
    (2, 2),
    (3, 2),
    (3, 3),
    (4, 2),
    (4, 4),
    (5, 2),
    (5, 3),
    (5, 5);

insert into wish (wish_id, app_user_id, city_id, entertainment_id) values
	(1, 1, 1, 2),
	(2, 2, 2, 1),
    (3, 3, 3, 3);

end //
-- 4. Change the statement terminator back to the original.
delimiter ;
