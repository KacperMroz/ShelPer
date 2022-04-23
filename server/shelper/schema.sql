DROP TABLE IF EXISTS town;
DROP TABLE IF EXISTS building;
DROP TABLE IF EXISTS user_details;
DROP TABLE IF EXISTS client;
DROP TABLE IF EXISTS shelter;
DROP TABLE IF EXISTS breed;
DROP TABLE IF EXISTS size;
DROP TABLE IF EXISTS animal_type;
DROP TABLE IF EXISTS animal;
DROP TABLE IF EXISTS visit;
DROP TABLE IF EXISTS client_animal_favourites;

CREATE TABLE town(
    town_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE building(
    building_id INTEGER PRIMARY KEY AUTOINCREMENT,
    town_id INTEGER NOT NULL,
    building_number TEXT NOT NULL,
    street_name TEXT NOT NULL,
    zip_code TEXT NOT NULL,
    FOREIGN KEY (town_id) REFERENCES town(town_id)
);

CREATE TABLE user_details (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    phone_number TEXT,
    building INTEGER,
    FOREIGN KEY (building) REFERENCES building(building_id)
);

CREATE TABLE client (
    client_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    details INTEGER NOT NULL,
    FOREIGN KEY (details) REFERENCES user_details (user_id)
);

CREATE TABLE shelter(
    shelter_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    details INTEGER NOT NULL,
    FOREIGN KEY (details) REFERENCES user_details(user_id)
);

CREATE TABLE breed(
    bread_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE size(
    size_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE animal_type(
    animal_type_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE animal(
    animal_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    weight INTEGER NOT NULL,
    description TEXT NOT NULL,
    healthy INTEGER NOT NULL,
    sex BOOLEAN NOT NULL,
    color TEXT NOT NULL,
    advert_date datetime default current_timestamp NOT NULL,
    breed_id INTEGER NOT NULL,
    size_id INTEGER NOT NULL,
    animal_type_id INTEGER NOT NULL,
    FOREIGN KEY (breed_id) REFERENCES breed(breed_id),
    FOREIGN KEY (animal_type_id) REFERENCES animal_type(animal_type_id),
    FOREIGN KEY (size_id) REFERENCES size(size_id)
);

CREATE TABLE visit(
    visit_id INTEGER PRIMARY KEY AUTOINCREMENT,
    date DATETIME default current_timestamp NOT NULL,
    client_id INTEGER NOT NULL,
    shelter_id INTEGER NOT NULL,
    animal_id INTEGER NOT NULL,
    FOREIGN KEY (client_id) REFERENCES client(client_id),
    FOREIGN KEY (shelter_id) REFERENCES shelter(shelter_id),
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id)
);

CREATE TABLE client_animal_favourites(
    client_id INTEGER NOT NULL,
    animal_id INTEGER NOT NULL,
    FOREIGN KEY (client_id) REFERENCES client(client_id),
    FOREIGN KEY (animal_id) REFERENCES animal(animal_id)
);