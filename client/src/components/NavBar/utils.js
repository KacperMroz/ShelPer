export const getNavBarItems = isLoggedIn => {
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
        pathname: '/',
        title: 'Strona główna',
      },
    ];
  }
  return [
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
    },
  ];
};
