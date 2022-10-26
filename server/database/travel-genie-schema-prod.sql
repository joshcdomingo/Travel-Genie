drop database if exists travel_genie;
create database travel_genie;
use travel_genie;

-- create tables and relationships
create table app_user (
    app_user_id int primary key auto_increment,
    username varchar(50) not null unique,
    nickname varchar(50) not null,
    password_hash varchar(2048) not null,
    enabled bit not null default(1)
);

create table app_role (
    app_role_id int primary key auto_increment,
    `name` varchar(50) not null unique
);

create table app_user_role (
    app_user_id int not null,
    app_role_id int not null,
    constraint pk_app_user_role
        primary key (app_user_id, app_role_id),
    constraint fk_app_user_role_user_id
        foreign key (app_user_id)
        references app_user(app_user_id),
	constraint fk_app_user_role_role_id
        foreign key (app_role_id)
        references app_role(app_role_id)
);

insert into app_role (`name`) values
    ('USER');

-- passwords are set to "P@ssw0rd!"
insert into app_user (username, nickname, password_hash, enabled)
    values
    ('user1', 'josh', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1),
    ('user2', 'audrey', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1),
    ('user3', 'star', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1);

insert into app_user_role
    values
    (1, 1),
    (2, 1),
    (3, 1);

create table scenery (
    scenery_id int primary key auto_increment,
    scenery_name varchar(50) not null
);

create table country (
    country_id int primary key auto_increment,
    country_name varchar(50) not null
);

create table entertainment (
	entertainment_id int primary key auto_increment,
    entertainment_name varchar(50) not null,
    activity_level varchar(10) not null,
    price_range varchar(10) not null,
    kid_friendly bit not null 
);

create table city (
    city_id int primary key auto_increment,
    city_name varchar(50) not null,
    country_id int not null,
    constraint fk_country_id
        foreign key (country_id)
        references country(country_id),
    scenery_id int not null,
    constraint fk_scenery_id
        foreign key (scenery_id)
        references scenery(scenery_id)
);

create table wish (
    wish_id int primary key auto_increment,
    app_user_id int not null,
    constraint fk_wish_app_user_id
        foreign key (app_user_id)
        references app_user(app_user_id),
    city_id int not null,
    constraint fk_wish_city_id
        foreign key (city_id)
        references city(city_id),
    entertainment_id int not null,    
    constraint fk_wish_entertainment_id
        foreign key (entertainment_id)
        references entertainment(entertainment_id)
);

create table city_to_entertainment (
	city_id int not null,
    constraint fk_city_to_entertainment_city_id
        foreign key (city_id)
        references city(city_id),
    entertainment_id int not null,    
	constraint fk_city_to_entertainment_entertainment_id
        foreign key (entertainment_id)
        references entertainment(entertainment_id)
);

	insert into scenery (scenery_id, scenery_name) values
        (1, 'METROPOLITAN'),
        (2, 'BEACH'),
        (3, 'MOUNTAIN'),
        (4, 'DESSERT'),
        (5, 'SNOW');
    
    insert into country (country_id, country_name) values
        (1, 'American');
        
	insert into entertainment (entertainment_id, entertainment_name, activity_level, price_range, kid_friendly) values
		(1, 'Sun Bathing', 'LOW', '$', true),
        (2, 'Sight Seeing', 'MEDIUM', '$', true),
        (3, 'Hiking', 'HIGH', '$', false),
        (4, 'Casino', 'LOW', '$$$', false),
        (5, 'Ski', 'MEDIUM', '$$', true);
        
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
     