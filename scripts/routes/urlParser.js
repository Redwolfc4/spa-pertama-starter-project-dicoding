const extractPathnameSegments = (pathname) => {
  const splitPath = pathname.split("/");
  console.log(`splitpath = ${splitPath}`);

  return {
    resource: splitPath[1] || null,
    id: splitPath[2] || null,
  };
};

const constructRouteFromSegements = (pathSegments) => {
  let pathname = ``;
  console.log(`pathsegements = ${JSON.stringify(pathSegments)}`);

  if (pathSegments.resource) {
    pathname = pathname.concat(`/${pathSegments.resource}`);
  }

  if (pathSegments.id) {
    pathname = pathname.concat(`/:id`);
  }

  return pathname || "/";
};

const getActivePathname = () => location.hash.replace("#", "") || "/";

export const getActiveRoute = () => {
  console.log(location.hash);
  const pathname = getActivePathname();
  console.log(`pathname = ${pathname}`);
  const pathSegments = extractPathnameSegments(pathname);
  return constructRouteFromSegements(pathSegments);
};
