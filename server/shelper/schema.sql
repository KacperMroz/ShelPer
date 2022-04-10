DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS user_details;
DROP TABLE IF EXISTS client;
DROP TABLE IF EXISTS address;
DROP TABLE IF EXISTS building;
DROP TABLE IF EXISTS town;
DROP TABLE IF EXISTS shelter;

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

CREATE TABLE building(
    building_id INTEGER PRIMARY KEY AUTOINCREMENT,
    town_id INTEGER NOT NULL,
    building_number TEXT NOT NULL,
    street_name TEXT NOT NULL,
    zip_code TEXT NOT NULL,
    FOREIGN KEY (town_id) REFERENCES town(town_id)
);

CREATE TABLE town(
    town_id INTEGER PRIMARY KEY AUTOINCREMENT,
    town_name TEXT NOT NULL
);