# Sistema de escala de plantão 

## Requisitos: 
O sistema foi pensado para estar evitando perda de dados e ou fato de não estar atualizado de forma imediata pelas pessoas com as devidas permissões.
Usuário deverá logar onde ele entrará com o RE e senha particular criada para este site não será vinculada a nenhuma outra senha dos outros programas da empresa facilitando assim o uso geral, pois caso precise atualizar a senha não será necessário acionar a equipe de TI.
Após entrar com o login irá aparecer a tela onde aparecerá uma espécie de menu o usuário irá escolher a rota, coordenadores, GA, n1 da vivo e terá a parte geral onde irá aparecer tudo como todas as rotas e técnicos que estarão trabalhando no dia selecionado. 
Ter um filtro também que irá buscar o plantonista pelo nº do RE. Assim o trabalhador irá saber diretamente todos os dias que irá trabalhar podendo se organizar da melhor forma possível.


## Requisitos não funcionais:

1 – Entidade usuários <br>
2 – Entidade Plantão <br>
3 – Criar api Rest full <br>
    |
    |->	Criar uma rota mudança de senha  (somente pessoas com autorização especial)
 <br>
4 – Tecnologias: Back - End <br>
•	NodeJs <br>
•	Typescript <br>
•	Express <br>
•	TypeOrm <br>
•	MySql <br>
•	JWT <br>
5 – Tecnologias: Front – End ( Decidir) <br>
6 – Criar filtros <br> 
7 – Tela de login Usar as validações corretas <br> 
8 - Validar os campos de input dos filtros <br>


## Ambiente para rodar o backend

1- Use o editor VSCode ou Visual Estudio 
2- Certifique-se que tenha o nodeJs instalado na sua máquina
3- entre no cmd digite node -v (para verfiar o node)
4- dentro do cmd dê outro comanado: code -v (verificar o vsCode instalado)
5- Faça um clone do projeto 
6- dentro do Vs code e no projeto aperte crtl + j 
7- digite: npm install para rodar as configurações 
8- lembre-se de ajustar para a senha do seu banco de dados 
9- instale a extensão Thunder Client para testar as rotas caso você não tenha o Postman ou o Insomnia
