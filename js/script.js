var user= {
        name: 'Kevin Gonzalez',
        companyName: 'TechLaunch.io',
        address: '8400 NW 36th St #450, Doral, Fl 33166',
        email: 'kgonzalez@techlaunch.io',
        picture: 'techlaunch-mid.png'
    }

    document.querySelector('.name').textContent = user.name;
    document.querySelector('.company_name').textContent = user.companyName;
    document.querySelector('.address').textContent = user.address;
    document.querySelector('.email').textContent = user.email;