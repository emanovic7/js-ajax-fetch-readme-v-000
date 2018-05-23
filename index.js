const app = "I don't do much.";

const token = "ec06c649bbf4eddb42403e81fe40e07deb4ac55a"

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
