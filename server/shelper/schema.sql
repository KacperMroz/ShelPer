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
    web_page TEXT,
    FOREIGN KEY (details) REFERENCES user_details(user_id)
);

CREATE TABLE breed(
    breed_id INTEGER PRIMARY KEY AUTOINCREMENT,
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
    male BOOLEAN NOT NULL,
    color TEXT NOT NULL,
    advert_date datetime default current_timestamp NOT NULL,
    breed_id INTEGER NOT NULL,
    size_id INTEGER NOT NULL,
    shelter_id INTEGER NOT NULL,
    animal_type_id INTEGER NOT NULL,
    photo_path TEXT,
    FOREIGN KEY (breed_id) REFERENCES breed(breed_id),
    FOREIGN KEY (shelter_id) REFERENCES shelter(shelter_id),
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


--dummy data
INSERT INTO size (name) VALUES('Ma??y/a');
INSERT INTO size (name) VALUES('??redni/a'); 
INSERT INTO size (name) VALUES('Du??y/a'); 

INSERT INTO breed (name) VALUES('Chart afga??ski');
INSERT INTO breed (name) VALUES('Labrador Retriver');
INSERT INTO breed (name) VALUES('Owczarek Niemiecki');
INSERT INTO breed (name) VALUES('Gryfonik brukselski');
INSERT INTO breed (name) VALUES('Buldog francuski');
INSERT INTO breed (name) VALUES('Mieszaniec');
INSERT INTO breed (name) VALUES('Mops');

INSERT INTO breed (name) VALUES('Toyger');
INSERT INTO breed (name) VALUES('Kot syberyjski');
INSERT INTO breed (name) VALUES('Kot bengalski');
INSERT INTO breed (name) VALUES('Kot syjamski');
INSERT INTO breed (name) VALUES('Kot nierasowy');
INSERT INTO breed (name) VALUES('Kot Manx');
INSERT INTO breed (name) VALUES('Kot ameryka??ski kr??tkow??osy');

INSERT INTO breed (name) VALUES('Chomik d??ungarski');
INSERT INTO breed (name) VALUES('Chomik syryjski');
INSERT INTO breed (name) VALUES('Chomik chi??ski');

INSERT INTO animal_type (name) VALUES('Kot');
INSERT INTO animal_type (name) VALUES('Pies');
INSERT INTO animal_type (name) VALUES('Inne');
INSERT INTO animal_type (name) VALUES('Wszystkie');

INSERT INTO town (name) VALUES('Krak??w');
INSERT INTO town (name) VALUES('Warszawa');
INSERT INTO town (name) VALUES('Wroc??aw');
INSERT INTO town (name) VALUES('Pozna??');
INSERT INTO town (name) VALUES('Bydgoszcz');
INSERT INTO town (name) VALUES('Katowice');
INSERT INTO town (name) VALUES('Gliwice');
INSERT INTO town (name) VALUES('Szczecin');
INSERT INTO town (name) VALUES('Gda??sk');

INSERT INTO building(town_id,building_number,street_name,zip_code) VALUES(1,"1","Rybna","30-100");
INSERT INTO building(town_id,building_number,street_name,zip_code) VALUES(2,"2","S??oneczna","30-200");
INSERT INTO building(town_id,building_number,street_name,zip_code) VALUES(3,"3","Bajeczna","30-300");
INSERT INTO building(town_id,building_number,street_name,zip_code) VALUES(4,"4","Krzy??akow","30-400");
INSERT INTO building(town_id,building_number,street_name,zip_code) VALUES(5,"5","Mogilska","30-500");
INSERT INTO building(town_id,building_number,street_name,zip_code) VALUES(6,"6","Krzywa","30-600");
INSERT INTO building(town_id,building_number,street_name,zip_code) VALUES(7,"7","Pi??kna","30-700");
INSERT INTO building(town_id,building_number,street_name,zip_code) VALUES(8,"8","Kwiatowa","30-800");
INSERT INTO building(town_id,building_number,street_name,zip_code) VALUES(9,"9","Lipowa","30-900");

INSERT INTO user_details(email,password,phone_number,building) VALUES("jan.kowalski@gmail.com","123456","100200300",1);
INSERT INTO user_details(email,password,phone_number,building) VALUES("piotr.nowak@gmail.com","123456","101201301",2);
INSERT INTO user_details(email,password,phone_number,building) VALUES("schronisko.bajeczna@gmail.com","123456","102202302",3);
INSERT INTO user_details(email,password,phone_number,building) VALUES("schronisko.krzyzakow@gmail.com","123456","103203303",4);
INSERT INTO user_details(email,password,phone_number,building) VALUES("schronisko.mogilska@gmail.com","123456","104204304",5);
INSERT INTO user_details(email,password,phone_number,building) VALUES("schronisko.krzywa@gmail.com","123456","105205305",6);
INSERT INTO user_details(email,password,phone_number,building) VALUES("krzysztof.sliwka@gmail.com","123456","106206306",7);
INSERT INTO user_details(email,password,phone_number,building) VALUES("anna.krzeslo@gmail.com","123456","107207307",8);
INSERT INTO user_details(email,password,phone_number,building) VALUES("asia.kruk@gmail.com","123456","108208308",9);


INSERT INTO shelter(name,details,web_page) VALUES("Schronisko Bajeczna",3,"www.schronisko-bajeczna.com");
INSERT INTO shelter(name,details,web_page) VALUES("Schronisko Krzy??ak??w",4,"www.schronisko-krzyzakow.com");
INSERT INTO shelter(name,details,web_page) VALUES("Schronisko Mogilska",5,"www.schronisko-mogilska.com");
INSERT INTO shelter(name,details,web_page) VALUES("Schronisko Krzywa",6,"www.schronisko-krzywa.com");


INSERT INTO client(name,surname,details) VALUES("Jan","Kowalski",1);
INSERT INTO client(name,surname,details) VALUES("Piotr","Nowak",2);
INSERT INTO client(name,surname,details) VALUES("Krzysztof","Sliwka",2);
INSERT INTO client(name,surname,details) VALUES("Anna","Krzes??o",8);
INSERT INTO client(name,surname,details) VALUES("Joanna","Kruk",9);

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Lola",5,4,"Poznaj Lol??. Ma??a modelka, uwielbia by?? w ??wietle reflektor??w.",1,false,"brown","2022-03-23",5,1,1,2,"/public/photos/1.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Edgar",3,5,"Poznaj Edgara, zadziornego intelektualist??.",1,true,"black","2022-04-10",7,1,3,2,"/public/photos/2.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Lolek",2,5,"Poznaj Lolka, m??oodszego brat Loli. Ma??y, ale z wielkim sercem.",1,true,"brown","2022-03-23",5,1,1,2,"/public/photos/3.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Waldek",1,5,"Cze???? tu Waldek. Jestem uroczym psiakiem. Moje hobby to spanie i jedzenie wi??c nie b??d?? sprawia?? problem??w.",1,true,"brown","2022-04-12",5,1,2,2,"/public/photos/4.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Max",7,50,"Mi??y, radosny, towarzyski d??entleman. Uwielbiam si?? przytula??, ale gdy jest taka potrzeba potrafi?? by?? gro??ny arghhh!",0,true,"black","2022-05-09",2,3,2,2,"/public/photos/5.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Wiola",5,3,"Ma??a, s??odka ??licznotka czeka na nowego w??a??ciela. Uwielbia biega?? a nawet ta??czy??. Zawsze pogodna i ka??dego da??y ciep??em ze swojego serduszka.",1,false,"yellow","2022-03-04",4,1,3,2,"/public/photos/6.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Bola",2,35,"Dama na salonach. Towarzyska, uwielbiaj??ca by?? w centrum uwagi. Gdy ma jej za ma??o robi si?? markotna. Poza tym jednak jest bardzo kochliwa.",0,false,"grey","2022-03-05",1,3,4,2,"/public/photos/7.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Edzio",8,3,"Zadziorny, ale bardzo milutki - to zale??y od tego jak si?? naje. Uwielbia d??ugie spacery i poznawanie ??wiata.",1,true,"black","2022-02-10",5,1,4,2,"/public/photos/8.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Garfield",2,7,"Slodki kotek plus size, uwielbiajacy lasagne. Bywa zadziorny, ale jest bardzo lojalny.",1,true,"yellow","2022-03-07",12,2,4,1,"/public/photos/9.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Kleopatra",3,4,"Kr??lowa egiptu. Fascynuj??ca, zadziorna, kochliwa, chodz??ca w??asnymi ??cie??kami. Budzi gniew w??rod poddanych - innych kotk??w.",0,false,"brown","2022-01-08",8,1,1,1,"/public/photos/10.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("??nie??ynka",4,6,"Bielsza od ??niegu. Z pozoru mo??e si?? wydawa?? kr??low?? lodu, ale w g????bi ma cieplutkie serduszko, kt??re z pewno??ci?? pokocha nowego w??a??ciciela.",1,false,"white","2021-12-04",9,1,2,1,"/public/photos/11.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Rumcajs",3,4,"Ma??y rozb??jnik. Nie dajcie si?? zwie???? jego s??odkim oczkom i spokojnej aparycji, Rumcajs potrafi narobi?? zamieszania.",1,true,"all","2021-08-12",13,1,3,1,"/public/photos/12.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Filemon",5,3,"Ma??y, s??odki, spokojny koteczek. Niestety kotek ten ma powa??ny problem. Jest bardzo uzale??niony od du??ej dawki mi??o??ci i mleczka.",1,true,"white","2022-03-14",14,1,4,1,"/public/photos/13.jpg");

INSERT INTO animal(name,age,weight,description,healthy,male,color,advert_date,breed_id,size_id,shelter_id,animal_type_id,photo_path) 
VALUES("Chrupek",1,0.2,"Ten s??odziak potrafi oczarowa?? swoimi oczkami i u??miechem. Niestety g??o??no chrupie, ale wynagradza to swoj?? mi??o??ci??.",1,true,"grey","2022-04-01",16,1,1,3,"/public/photos/14.jpg");


INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(1,2);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(1,3);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(1,7);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(1,10);

INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(2,4);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(2,2);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(2,10);

INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(3,1);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(3,3);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(3,5);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(3,7);

INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(4,10);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(4,12);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(4,13);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(4,14);

INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(5,2);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(5,4);
INSERT INTO client_animal_favourites(client_id,animal_id) VALUES(5,8);



INSERT INTO visit(date,client_id,shelter_id,animal_id) VALUES("2022-03-30",1,3,2);
INSERT INTO visit(date,client_id,shelter_id,animal_id) VALUES("2022-03-29",2,3,2);
INSERT INTO visit(date,client_id,shelter_id,animal_id) VALUES("2022-03-29",3,1,3);
INSERT INTO visit(date,client_id,shelter_id,animal_id) VALUES("2022-04-05",4,1,14);
INSERT INTO visit(date,client_id,shelter_id,animal_id) VALUES("2022-02-12",5,4,8);
