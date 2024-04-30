function getLocationObject(latitude, longitude) {
  const location = {
      href: `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`,
      text: `Latitude: ${latitude}°, Longitude: ${longitude}°`
  };
  return location;
}

async function askLocation() {
  const latitude = prompt('Enter your latitude (e.g., 36.8293953854872):');
  const longitude = prompt('Enter your longitude (e.g., -32.8293953854872):');
  return getLocationObject(latitude, longitude);
}

async function getLocation() {
  return new Promise((resolve) => {
      function success(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve(getLocationObject(latitude, longitude));
      }

      function error() {
          resolve(askLocation());
      }

      if (!navigator.geolocation) {
          error();
      } else {
          navigator.geolocation.getCurrentPosition(success, error);
      }
  });
}

export default getLocation;
