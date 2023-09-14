import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

const MapComponent = () => {
  const mapStyles = {
    height: '75vh',
    width: '100%',
  };

  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [recyclingCenters, setRecyclingCenters] = useState([]);

  useEffect(() => {
    // Get the user's current location using the Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  }, []);

  useEffect(() => {
    // Fetch nearby recycling centers using the Places API
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch(
      {
        location: currentLocation,
        radius: 100, // Adjust the radius as needed
        type: 'Recycling_center',
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setRecyclingCenters(results);
        }
      }
    );
  }, [currentLocation]);

  return (
    <div>
      <LoadScript
        googleMapsApiKey="AIzaSyBUQCOFiaHWrOiWTCpeAbIdKB-5R_RtsZE"
        libraries={['places']}
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={currentLocation}
        >
          {recyclingCenters.map((center) => (
            <Marker
              key={center.place_id}
              position={{
                lat: center.geometry.location.lat(),
                lng: center.geometry.location.lng(),
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;

// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { useState, useEffect } from 'react';

// const MapComponent = () => {
//   const mapStyles = {
//     height: '100vh',
//     width: '100%',
//   };

//   const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
//   const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     // Get the user's current location using the Geolocation API
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCurrentLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error('Error getting current location:', error);
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by your browser.');
//     }
//   }, []);

//   useEffect(() => {
//     // Fetch nearby restaurants using the Places API
//     const service = new window.google.maps.places.PlacesService(document.createElement('div'));
//     service.nearbySearch(
//       {
//         location: currentLocation,
//         radius: 1000, // Adjust the radius as needed
//         type: 'Park',
//       },
//       (results, status) => {
//         if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//           setRestaurants(results);
//         }
//       }
//     );
//   }, [currentLocation]);

//   return (
//     <div>
//       <LoadScript
//         googleMapsApiKey="AIzaSyBUQCOFiaHWrOiWTCpeAbIdKB-5R_RtsZE"
//         libraries={['places']}
//       >
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={13}
//           center={currentLocation}
//         >
//           {restaurants.map((restaurant) => (
//             <Marker
//               key={restaurant.place_id}
//               position={{
//                 lat: restaurant.geometry.location.lat(),
//                 lng: restaurant.geometry.location.lng(),
//               }}
//             />
//           ))}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default MapComponent;



// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import { useState, useEffect } from 'react';
// const MapComponent = () => {
//   const mapStyles = {
//     height: '100vh',
//     width: '100%',
//   };

//   const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });

//   useEffect(() => {
//     // Get the user's current location using the Geolocation API
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCurrentLocation({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error('Error getting current location:', error);
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by your browser.');
//     }
//   }, []);
//   return (
//     <div>
//       <LoadScript
//        googleMapsApiKey='AIzaSyBUQCOFiaHWrOiWTCpeAbIdKB-5R_RtsZE'
//        libraries={['places']}
//        >
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={13}
//           center={currentLocation}
//         />
//      </LoadScript>
//     </div>
//   )
// }

// export default MapComponent;
