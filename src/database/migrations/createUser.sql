CREATE TABLE IF NOT EXISTS USERS(
   ID UUID PRIMARY KEY NOT NULL,
   NAME VARCHAR(255) NOT NULL,
   EMAIL VARCHAR(255) NOT NULL,
   PASSWORD VARCHAR(255) NOT NULL
);