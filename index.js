function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild() {
  let node = document.querySelector('div#grand-node')

  while (node.querySelector('div') != null) {
    node = node.querySelector('div')
  }

  return node

}