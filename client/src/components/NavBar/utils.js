export const getNavBarItems = (isLoggedIn) => {
  if (isLoggedIn) {
    return [
      {
        pathname: '/',
        title: 'Strona główna',
      },
      {
        pathname: '/account',
        title: 'Konto',
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
