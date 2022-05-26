export const getNavBarItems = (isLoggedIn) => {
  if (isLoggedIn) {
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
  if (isLoggedIn) {
    return [
      {
        pathname: '/account-settings',
        title: 'Konto',
      },
      {
        pathname: '/favourites',
        title: 'Ulubione',
      },
      {
        pathname: '/favourites',
        title: 'Dodaj ogłoszenie',
      },
      {
        pathname: '/add-post',
        title: 'Dodaj ogłoszenie',
      },
    ];
  }
  return [
    {
      pathname: '/login',
      title: 'Zaloguj się',
    },
    {
      pathname: '/signup',
      title: 'Rejestracja',
    },
    {
      pathname: '/',
      title: 'Strona główna',
    },
  ];
};
