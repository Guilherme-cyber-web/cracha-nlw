const LinksSocialMedia = {
  github: 'Guilherme-cyber-web',
  youtube: 'channel/UCiGSYoK8e5UWXxpAziNttoA',
  facebook: 'guilherme.costa',
  instagram: 'guicostars',
  twitter: 'Guilher32588129'
}
function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMedia()
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      link.href = data.html_url
      UserImage.src = data.avatar_url
      link.textContent = data.login
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
