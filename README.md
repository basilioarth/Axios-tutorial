# Tutorial Axios 

Nesse tutorial serão abordados os passos para a integração da biblioteca **axios** a um projeto *React* já existente, além das práticas para a utilização desse recurso no estabelecimento de comunicações com uma [API Rest](https://developer.mozilla.org/pt-BR/docs/Glossary/REST).

# O que é o Axios? :thinking:

Muitos projetos na internet precisam interagir com uma *API Rest* em algum ponto em seu desenvolvimento. O **Axios** é um cliente *HTTP* baseado em [Promises](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) para a realização de requisições assíncronas. Portanto, pode ser uma opção adotada para o estabelecimento dessa interação. Por ser baseado em promessas, oferece a capacidade de aproveitar o `async` e `await` do *JavaScript* para um código assíncrono mais legível, além de possibilitar a interceptação e o cancelamento de solicitações.

# Configurando o ambiente 

## :gear: Pré-requisitos


Uma versão do **NodeJs** instalada em seu computador. [Tutorial](https://github.com/ES2-UFPI/e-motion/wiki/How-to-start-with-Node.JS)

Um projeto **React** configurado. [Tutorial](https://github.com/ES2-UFPI/e-motion/wiki)


## :computer: Instalando dependências

Para adicionar o Axios ao projeto, abra seu terminal e acesse o diretório do projeto em questão. Em seguida, execute este comando para instalar o Axios:

`npm install axios`

Depois disso, será necessário importar o Axios para dentro do arquivo no qual você deseja usá-lo.
