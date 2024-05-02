export function getLocationObject(latitude, longitude) {
  const location = {
      href: `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`,
      text: `Latitude: ${latitude}°, Longitude: ${longitude}°`
  };
  return location;
}

export function isItCorrect(string, start, end) {
  const number = parseFloat(string);
  if (!isNaN(number)) {
      return number >= start && number <= end;
  } else {
      return false;
  }
}


export function askString(type, message) {
  const ranges = {'latitude': [-90, 90], 'longitude': [-180, 180]};
  let string = prompt(message);
  while (!isItCorrect(string, ranges[type][0], ranges[type][1])) {
      string = prompt(`The input must be a number and in the appropriate range (${ranges[type][0]} to ${ranges[type][1]}). Please try again:`);
  }
  return string;
}

function askLocation() {
  const latitude = askString('latitude', 'Enter your latitude (e.g., 36.8293953854872):');
  const longitude = askString('longitude', 'Enter your longitude (e.g., -32.8293953854872):');
  return getLocationObject(latitude, longitude);
}

export async function getLocation() {
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
