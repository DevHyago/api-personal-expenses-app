CREATE TABLE IF NOT EXISTS EXPENSES(
   ID UUID PRIMARY KEY NOT NULL,
   DESCRIPTION TEXT,
   CATEGORY VARCHAR(100) NOT NULL,
   DATE_EXPENSE DATE,
   VALUE DECIMAL,
   AUTHOR_ID UUID NOT NULL,
   FOREIGN KEY (AUTHOR_ID) REFERENCES USERS (ID)
);