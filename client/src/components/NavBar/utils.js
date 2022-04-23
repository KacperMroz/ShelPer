export const getNavBarItems = (isLoggedIn) => {
  if (isLoggedIn) {
    return [
      {
        pathname: '/login',
        title: 'Zaloguj się',
      },
      {
        pathname: '/sign-up',
        title: 'Rejestracja',
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
      pathname: '/sign-up',
      title: 'Rejestracja',
    },
  ];
};
