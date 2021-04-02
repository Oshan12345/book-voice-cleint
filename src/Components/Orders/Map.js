import React from "react";
import Iframe from "react-iframe";
const Map = () => {
  // const [getDirection, setGetDirection] = useState({
  //   pickForm: "Chittagong",
  //   destination: "Dhaka",
  // });
  // useEffect(() => {
  //   if (location) {
  //     setGetDirection(location);
  //   }
  // }, [location]);
  //in code provides the location of an user.Somehow can be used for adding map features(like display dynamic location) in future
  //   const successfulLookup = (position) => {
  //     const { latitude, longitude } = position.coords;
  //     fetch(
  //       `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f1a34fbc4a6e4351b518eaacc7913ea2`
  //     )
  //       .then((response) => response.json())
  //       .then(console.log); // Or do whatever you want with the result
  //   };
  //   window.navigator.geolocation.getCurrentPosition(
  //     successfulLookup,
  //     console.log("error")
  //   );

  return (
    <div className="google-map">
      <Iframe
        scrolling="yes"
        src={`https://maps.google.com/maps?width=100%&height=400&hl=en&saddr=Chittagong&t=&daddr=Rajshahi&dirflg=h&layer=c&z=8&ie=UTF8&iwloc=B&view=map&t=m&output=embed`}
        display="initial"
        width="100%"
        height="500"
      ></Iframe>
    </div>
  );
};
//https://maps.google.com/maps?width=100%&height=400&hl=en&saddr=${getDirection.pickForm}&t=&daddr=${getDirection.destination}&dirflg=h&layer=c&z=8&ie=UTF8&iwloc=B&view=map&t=m&output=embed
//maps.google.com/maps?width=100%25&height=400&hl=en&saddr=(dhaka)&t=&daddr=(chittagong)&dirflg=h&layer=c&z=13&ie=UTF8&iwloc=B&output=embed
export default Map;
