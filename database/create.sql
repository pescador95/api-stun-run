-- DROP SCHEMA public;

-- CREATE DATABASE stun_run;

-- CREATE SCHEMA PUBLIC x-access-token POSTGRES;

-- public."score" definition

-- Drop table

-- DROP TABLE public."score";

CREATE TABLE PUBLIC."score" (
    ID SERIAL PRIMARY KEY,
    PLAYER VARCHAR(255),
    SCORE INT8
);

-- ALTER TABLE PUBLIC.SCORE OWNER TO POSTGRES;

-- GRANT ALL ON TABLE PUBLIC.SCORE TO POSTGRES;
-- GRANT ALL ON TABLE PUBLIC.ITEMPEDIDO TO POSTGRES;