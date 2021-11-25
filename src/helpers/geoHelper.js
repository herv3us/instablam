async function onSuccess(setLocation, lat, long) {
  const adress = await findPosition(lat, long);
  setLocation(adress.name);
  console.log(adress.name);
}

async function findPosition(lat, long) {
  try {
    const res = await fetch(
      `https://geocode.xyz/${lat},${long}?geoit=json&auth=446968249876491397676x26597`
    );
    const data = await res.json();
    if (data.error) {
      console.log('Could not find any data');
      return null;
    } else {
      return data.osmtags;
    }
  } catch (error) {
    console.log('New error found ' + error.message);
  }
}

export { findPosition, onSuccess };
