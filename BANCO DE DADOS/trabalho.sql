//1 etapa
CREATE TABLE public.produto
(
    codigo character varying(10) NOT NULL,
    nome character varying(50) NOT NULL,
    descricao text,
    valor double precision,
    categoria character varying(30) NOT NULL,
    CONSTRAINT produto_codigo_pkey PRIMARY KEY (codigo)
);

//2 etapa
CREATE TABLE public.lojinha
(
codigo character varying(5),
nome character varying(60),
valor money,
valor_desconto money, 
valor_total money
);

//3 etapa

INSERT INTO produto (codigo, nome, valor, categoria)
 VALUES 
   ('001', 'IPHONE 7S ', 2220.90, 'Eletro'),
   ('002', 'SAMSUNG 8 ', 1605.20, 'Eletro'),
   ('003', 'ARMARIO COZINHA', 1800.07, 'Casa e Jardim'),
   ('004', 'Playstation 5', 7800.03, 'Entretenimento'),

//Finalização
SELECT
codigo,
nome,
valor,
(valor * 20/100)AS valor_desconto,
(valor - valor * 20/100) AS valor_final
