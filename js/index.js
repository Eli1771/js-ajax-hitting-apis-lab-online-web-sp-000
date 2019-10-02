//your code here

function getRepositories() {
  const req = new XMLHttpRequest();
  const username = document.querySelector('input#username').value;
  
  req.addEventListener('load', displayRepositories);
  req.open('GET', 'https://api.github.com/users/' + username + '/repos');
  req.send();
  return false;
}

function displayRepositories() {
  let repos = JSON.parse(this.responseText);
  console.log(repos);
  
  let repoList = `<ul>
    ${repos.map(repo => {
      return `<li>
        <h2>${repo.html_url}</h2>
        <a href="getCommits(); return false;">Show Commits</a>
        <a href="getBranches(); return false;">Show Branches</a>
      </li>`;
    }).join('')}
  </ul>`;
  document.querySelector('div#repositories').innerHTML = repoList;
}

function getCommits() {
  const req = new XMLHttpRequest();
  
  req.addEventListener('load', displayCommits);
  req.open('GET')
}

function displayCommits() {
  
}

function getBranches() {
  
}

function displayBranches() {
  
}