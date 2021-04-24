                                          --(Criar tabela para FILME) --
CREATE TABLE public.filme
(
    id serial NOT NULL,
    nome character varying(100),
    id_categoria integer,
    id_ator integer,
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);
ALTER TABLE public.filme
    OWNER to postgres;

                                            --(INSERIR VALOR NA TABELA)--
INSERT INTO  filme  (nome, id_categoria, id_ator)
VALUES
        ('Click', 3, 1),
       ('Guerra mundial Z', 1, 3),
       ('Misterio no Mediterraneo', 3, 1),
       ('Arvoré da vida', 2, 4),
       ('Lara Croft: Tomb Raider', 4, 2),
       ('Gente grande', 3, 1),
       ('Mr. & Mrs. Smith', 4, 3 ),
       ('Marley & Eu', 2, 4)  

        -- Para visualizar a tabela --
SELECT * FROM  filme

                                             --(criar tabela para ATOR)--
CREATE TABLE public.ator
(
    id serial NOT NULL,
    nome character varying(100),
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);
ALTER TABLE public.ator
    OWNER to postgres;

                                             --(INSERIR VALOR NA TABELA)--
INSERT INTO  ator (nome)
VALUES 
('Adam Sandler'),
('Angelina Jolie'),
('Brad Pitt'),
('Jennifer Aniston')

         -- Para visualizar tabela de atores--
SELECT * FROM ator


-                                               -(Criar tabela para CLIENTE)--
CREATE TABLE public.cliente
(
    id serial NOT NULL,
    nome character varying(100),
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);
ALTER TABLE public.cliente
    OWNER to postgres;

                                                 --(INSERIR VALOR NA TABELA)--
INSERT INTO  cliente  (nome)
VALUES 
('Maria'),
('Paula'),
('Rosana'),
('Petrick'),
('Luiz'),
('Tereza'),
('Marta'),
('Giovanne'),
('Giulia')

         -- Para visualizar a tabela de clientes--
SELECT * FROM cliente

                                                   --(Para criar tabela CATEGORIA)--
CREATE TABLE public.categoria
(
    id serial NOT NULL,
    nome character varying(50),
    PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
);
ALTER TABLE public.categoria
    OWNER to postgres;

                                         --(INSERIR VALOR NA TABELA)--
INSERT INTO categoria (nome)
VALUES
 ('Terror'),
('Drama'),
('Comédia'),
('Ação')
                                     --Para visualizar tabela de categoria--
SELECT * FROM categoria

                                        --  PARTE DA JUNÇÃO  DE TABELAS --

             -- Mostrar categorias dos filmes --
SELECT 
filme.nome as filme,
categoria.nome as categoria
FROM filme
JOIN categoria ON categoria.id = filme.id_categoria
    --opcional para mostrar uma categoria  especifica--
WHERE id_categoria = 3

              -- Mostrar os atores --
SELECT  
ator.nome as ator,
filme.nome as filme
FROM filme
JOIN ator ON ator.id = filme.id_ator
    --opcional para mostrar um ator especifico--
WHERE id_ator = 1


                 -- Mostrar os filmes que o cliente alugou --
SELECT
cliente.nome as cliente,
filme.nome as filme
FROM filme
JOIN cliente ON cliente.id = filme.id
     --opcional para mostrar cliente especifico--
WHERE cliente.nome = 'Maria'