Projeto DSCommerce

1. Premissas
Deseja-se fazer um sistema para ser utilizado em cursos da Devsuperior no processo de
aprendizado dos alunos. Para isto, a concepção do sistema partiu das seguintes
premissas:
- Deve ser um sistema que possua um modelo de domínio relativamente simples,
porém abrangente, ou seja, que explore vários tipos de relacionamentos entre as
entidades de negócio (muitos-para-um, muitos-para-muitos, etc.).
- O sistema deve possibilitar a aplicação de vários conhecimentos importantes das
disciplinas de fundamentos.
- O sistema deve conter as principais funcionalidades que se espera de um
profissional iniciante deve saber construir, tais como telas de cadastro e fluxos de
caso de uso.

2. Visão geral do sistema
O sistema deve manter um cadastro de usuário, produtos e suas categorias. Cada
usuário possui nome, email, telefone, data de nascimento e uma senha de acesso. Os
dados dos produtos são: nome, descrição, preço e imagem. O sistema deve apresentar
um catálogo de produtos, os quais podem ser filtrados pelo nome do produto. A partir
desse catálogo, o usuário pode selecionar um produto para ver seus detalhes e para
decidir se o adiciona a um carrinho de compras. O usuário pode incluir e remover itens
do carrinho de compra, bem como alterar as quantidades de cada item. Uma vez que o
usuário decida encerrar o pedido, o pedido deve então ser salvo no sistema com o status
de "aguardando pagamento". Os dados de um pedido são: instante em que ele foi salvo,
status, e uma lista de itens, onde cada item se refere a um produto e sua quantidade no
pedido. O status de um pedido pode ser: aguardando pagamento, pago, enviado,
entregue e cancelado. Quando o usuário paga por um pedido, o instante do pagamento
deve ser registrado. Os usuários do sistema podem ser clientes ou administradores,
sendo que todo usuário cadastrado por padrão é cliente. Usuários não identificados
podem se cadastrar no sistema, navegar no catálogo de produtos e no carrinho de
compras. Clientes podem atualizar seu cadastro no sistema, registrar pedidos e visualizar
seus próprios pedidos. Usuários administradores tem acesso à área administrativa onde
pode acessar os cadastros de usuários, produtos e categorias.

3. Protótipos de tela:
https://www.figma.com/file/ZrGNVNG0kZL6txDv4G8P6s/DSCommerce

4. Modelo conceitual
Este é o modelo conceitual do sistema DSCommerce. Considerações:
- Cada item de pedido (OrderItem) corresponde a um produto no pedido, com uma
quantidade. Sendo que o preço também é armazenado no item de pedido por
questões de histórico (se o preço do produto mudar no futuro, o preço do item de
pedido continua registrado com o preço real que foi vendido na época).
- Um usuário pode ter um ou mais "roles", que são os perfis de acesso deste usuário
no sistema (client, admin).


![image](https://github.com/JonasRF/DSCommerce-frontend/assets/77034798/5bd13e94-193b-41a9-b801-4f0f25ddadc5)
![image](https://github.com/JonasRF/DSCommerce-frontend/assets/77034798/532321d6-1deb-498f-a035-550760ce52f7)
![image](https://github.com/JonasRF/DSCommerce-frontend/assets/77034798/38f368dc-7b75-4e7a-9dbe-ba62eedc11f7)


