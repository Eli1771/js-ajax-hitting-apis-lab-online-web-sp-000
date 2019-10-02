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

  let repoList = `<ul>
    ${repos.map(repo => {
      return `<li>
        <h2>${repo.html_url}</h2>
        <a href="getCommits(this); return false;" data-username="${repo.owner.login}" data-repository="${repo.name}">Show Commits</a>
        <a href="getBranches(); return false;">Show Branches</a>
      </li>`;
    }).join('')}
  </ul>`;
  document.querySelector('div#repositories').innerHTML = repoList;
}

function getCommits(el) {
  const req = new XMLHttpRequest();
  const ownerName = el.dataset.username;
  const repoName = el.dataset.repository;
  
  req.addEventListener('load', displayCommits);
  req.open('GET', `https://api.github.com/repos/${ownerName}/${repoName}/commits`);
}

function displayCommits() {
  let commits = JSON.parse(this.responseText);
  
  let commitList = '<ul>' + 
    commits.map(commit => {
      return `<li>
        <h3>${commit.commit.author.name}</h3>
        <p>${commit.author.login}</p>
        <p>${commit.commit.message}</p>
      </li>`
    }).join('') 
  + '</ul>';
  
  document.querySelector('#details').innerHTML = commitList;
}

function getBranches() {
  const req = new XMLHttpRequest();
  
  req.addEventListener('load', displayBranches);
  
}

function displayBranches() {
  
}