import _ from 'lodash';
/* текст задания
Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении, и возвращает объект.
В объекте свойства — это слова (приведенные к нижнему регистру), а значения — это то, сколько раз слово встретилось в предложении.
Слова в предложении могут находиться в разных регистрах. Перед подсчетом их нужно приводить в нижний регистр, чтобы не пропускались дубли.
*/

function countWords(str) {
  const result = {};

  for (let word of _.words(str)) {
    word = word.toLowerCase();
    result[word] = (result[word] ?? 0) + 1;
  }
  
  return result;
}
