export const getNavBarItems = (isLoggedIn) => {
  if (!isLoggedIn) return [
    {
      pathname: '/',
      title: 'Strona główna',
    },
    {
      pathname: '/login',
      title: 'Zaloguj się',
    },
    {
      pathname: '/signup',
      title: 'Rejestracja',
    }
  ];
  if (isLoggedIn.charAt(0) === 'C') {
    return [
      {
        pathname: '/',
        title: 'Strona główna',
      },
      {
        pathname: '/favourites',
        title: 'Ulubione',
      },
      {
        pathname: '/account-settings',
        title: 'Konto',
      }

    ];
  }
  // schronisko
  if (isLoggedIn.charAt(0) === 'S') {
    return [
      {
        pathname: '/favourites',
        title: 'Ulubione',
      },
      {
        pathname: '/add-post',
        title: 'Dodaj ogłoszenie',
      },
      {
        pathname: '/account-settings',
        title: 'Konto',
      }
    ];
  }
};
