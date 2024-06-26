create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);

create table category (
  id int unsigned not null primary key auto_increment,
  name varchar(255) not null UNIQUE_KEY
);

create table program (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  synopsys text not null,
  poster varchar(255) not null,
  country varchar(255) not null,
  year int(4) not null,
  category_id int unsigned not null,
  foreign key(category_id) references category(id)
);