export const getNavBarItems = isLoggedIn => {
  if (isLoggedIn) {
    return [
      {
        route: '/login',
        title: 'Zaloguj się',
      },
      {
        route: '/sign-up',
        title: 'Rejestracja',
      },
      {
        route: '/',
        title: 'Strona główna',
      },
    ];
  }
  return [
    {
      route: '/',
      title: 'Strona główna',
    },
    {
      route: '/login',
      title: 'Zaloguj się',
    },
    {
      route: '/sign-up',
      title: 'Rejestracja',
    },
  ];
};
