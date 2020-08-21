// Criando app para ver a quantidade de memória usada e livre!

// Require / exports: no NODE, usamos essa estratégia para usar módulos, objetos que não estão definidos dentro de nossos scripts. Dessa forma temos acesso aos métodos, funções, propriedades, etc.
// Importando os métodos do objeto OS, que já está definido no NODE::
const os = require('os');

// Desestruturação: dentro do objeto 'os' temos diversos métodos e propriedades, para não precisarmos criar diversas variáveis para usar os seus métodos, dessa forma:
// const freemen = os.freemen()
// const total = os.totalmen()
// 
// Usamos o chamado de desestruturação. Criamos apenas uma variável, com os nomes dos métodos que queremos usar dentro de {}, dessa forma será criada uma variável global com o nome do próprio método, e podemos acessar da mesma forma que anteriormente;
const { freemem, totalmem } = os;


setInterval(() => {
  const total = parseInt(totalmem() / 1024 / 1024);
  const mem = parseInt(freemem() / 1024 / 1024);
  const percent = parseInt( (mem / total) * 100);
  
  const stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${percent}%`,
  }
  console.clear();
  console.log('=====MEMORY STATUS=====')
  console.table(stats);
}, 1000);



