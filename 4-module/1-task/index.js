/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  friends.forEach(function(item) {
    ul.innerHTML += (`<li>${item.firstName} ${item.lastName}</li>`);
  });
  return ul;
}

