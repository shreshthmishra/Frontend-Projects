// const searchBar = document.querySelector('#searchBox');
// searchBar.addEventListener('keyup', bringUsers);
// const clientId = 'de6edadb628e30598ad9';
// const secret_key = '05987e5337a2cd1a2315d40ee2311135d53dc0a2';




// async function bringUsers(user) {
//   const profileResponse = await fetch(`https://api.github.com/users/${user.target.value}?client_id=${clientId}&client_secret=${secret_key}`);
//   const profileData = await profileResponse.json();

// }


class Github {
  constructor() {
    this.client_id = 'd9308aacf8b204d361fd';
    this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}

// Init Github
const github = new Github;

// Search input
const searchUser = document.getElementById('searchBox');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert

        } else {
          // Show profile
        }
      })
  } else {
    // Clear profile

  }
}); 