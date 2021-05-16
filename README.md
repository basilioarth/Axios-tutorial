# Introdução 

Seja muito bem vindo ao tutorial de utilização do **Axios**!

Nesse tutorial serão abordados os passos para a integração da biblioteca *axios* a um projeto *React* já existente, além das práticas para a utilização desse recurso no estabelecimento de comunicações com uma [API Rest](https://developer.mozilla.org/pt-BR/docs/Glossary/REST).

# O que é o Axios? :thinking:

Muitos projetos na internet precisam interagir com uma *API Rest* em algum ponto em seu desenvolvimento. O Axios é um cliente *HTTP* baseado em [Promises](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) para a realização de requisições assíncronas. Portanto, pode ser uma opção adotada para o estabelecimento dessa interação. 

# Configurando o ambiente 

## ⚙️ Pré-requisitos


- Uma versão do **NodeJs** instalada em seu computador [(tutorial)](https://github.com/ES2-UFPI/e-motion/wiki/How-to-start-with-Node.JS).

- Um projeto **React** configurado [(tutorial)](https://github.com/ES2-UFPI/e-motion/wiki/How-to-start-with-Expo).


## 💻 Instalando dependências

Para adicionar o Axios ao projeto, abra seu terminal e acesse o diretório do projeto em questão. Em seguida, execute o seguinte comando para instalar o Axios:

`npm install axios`

Depois disso, será necessário importar o Axios para dentro do arquivo no qual você deseja usá-lo. Um vídeo com essa configuração do ambiente e o desenvolvimento da aplicação que iremos abordar a seguir pode ser acessado [aqui](https://www.youtube.com/watch?v=lweYF53k0T4).

# Estrutura adotada

Uma boa prática para quando interagimos com uma API é criarmos um arquivo de configuração que possa ser reutilizado em outros trechos de código da aplicação. Com o Axios, podemos fazer algumas configurações básicas como criar uma url base para para não precisarmos digitar em cada requisição o endereço do servidor. Isso nos possibilita enxugar o código, informando apenas a rota e seus parâmetros.

    .
    ├── ...
    ├── src                    
    │   ├── ...          
    │   ├── services
    │   |   └── api.tsx
    │   └── ...               
    └── ...

 Como representado na estrutura acima, adicionamos um novo ramo na nossa arquitetura de divisão de arquivos: o diretório *services*. Nele temos o arquivo **api.tsx** que conterá as configurações básicas para a conexão com o servidor.
 
 ```javascript
 //src/services/api.tsx
 
 import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/",
});

export default api;
 ``` 
 # Requisições
 
Para o exemplo do tutorial, iremos fazer uma requisição **post** para persistimos no servidor as informações inseridas pelo usuário através da tela *login*. Em seguida, resgatamos do servidor as informações desse mesmo usuário através de uma requisição **get**. Essas informações são apresentadas na tela *perfil* da aplicação. O Axios nos permite utilizar outros *verbos HTTP* através de métodos que ele nos disponibiliza. Para conferir todos eles, você pode acessar a seguinte [documentação](https://www.npmjs.com/package/axios#axios-api).

## Login

 ```javascript
 //src/views/Login/index.tsx
... 
async function login() {
      api.post('usuarios', {nome: `${usuario}`, email: `${usuario}@user.com`, telefone: '(86) 3333-4444'})
          .then((response: AxiosResponse) => navigation.navigate('Profile', response.data.id))
          .catch((error: AxiosError) => console.log(error.message));
}
...
 ``` 
 
 ## Perfil
 
```javascript
//src/views/Profile/index.tsx
...
useEffect(() => {
        api.get(`usuarios/${route.params}`)
            .then((response: AxiosResponse) => {
                setNome(response.data.nome)
                setEmail(response.data.email)
                setTelefone(response.data.telefone)
            })
            .catch((error: AxiosError) => console.log(error.message));
}, []);
...
``` 
