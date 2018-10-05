CREATE DATABASE myapp;
use myapp;

CREATE TABLE todos (
  id int(12) unsigned not null auto_increment,
  title varchar(255) not null,
  done boolean not null,
  created_at datetime not null default current_timestamp,
  updated_at datetime not null default current_timestamp on update current_timestamp,
  primary key (id)
);
