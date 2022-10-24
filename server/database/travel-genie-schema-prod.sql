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

        
insert into wish_list (wishlist_id, app_user_id, city)
	values
	(1, 1, 'Barcelona'),
    (2, 2, 'New York City'),
	(3, 3, 'Santa Monica'),
    (4, 4, 'Palm Springs'),
    (5, 5, 'Cairo');
    
insert into entertainment (entertainment_id, entertainment_name, kid_friendly, price_range)
	values
	(1, 'relaxing on the beach', 'true', '$'),
    (2, 'bowling', 'true', '$'),
    (3, 'bar hopping', 'false', '$$'),
    (4, 'fancy dinner', 'false', '$$$'),
    (5, 'city tour', 'true', '$$');
        
insert into city (city_id, city_name) 
	values
	(1, 'Barcelona'),
    (2, 'New York City'),
	(3, 'Santa Monica'),
    (4, 'Palm Springs'),
    (5, 'Cairo');
	
insert into scenery (scenery_id, scenery_name) 
	values
	(1, 'Beach'),
    (2, 'Urban'),
	(3, 'Mountains'),
    (4, 'Desert'),
    (5, 'Snow');

end //
-- 4. Change the statement terminator back to the original.
delimiter ;
