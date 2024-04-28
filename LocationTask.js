import Geolocation from 'react-native-geolocation-service';

const LocationTask = async props => {
  console.log('LocationTask BackgroundGeolocation', props);
  // Configure Geolocation
  Geolocation.setRNConfiguration({
    authorizationLevel: 'always', // Request "always" location permission
    skipPermissionRequests: false, // Prompt for permission if not granted
  });

  // Watch for position updates
  const watchId = Geolocation.watchPosition(
    position => {
      console.log(position);
      // Send the position data to the server
    },
    error => {
      console.log(error);
    },
    {
      distanceFilter: 10, // Minimum distance (in meters) to update the location
      interval: 900000, // Update interval (in milliseconds), which is 15 minutes
      fastestInterval: 300000, // Fastest update interval (in milliseconds)
      accuracy: {
        android: 'highAccuracy',
        ios: 'best',
      },
      showsBackgroundLocationIndicator: true,
      pausesLocationUpdatesAutomatically: false,
      activityType: 'fitness', // Specify the activity type (e.g., 'fitness' or 'other')
      useSignificantChanges: false,
      deferredUpdatesInterval: 0,
      deferredUpdatesDistance: 0,
      foregroundService: {
        notificationTitle: 'Tracking your location',
        notificationBody: 'Enable location tracking to continue', // Add a notification body
      },
    },
  );

  // To stop tracking (for example, when the component unmounts):
  // Geolocation.clearWatch(watchId);
};

export default LocationTask;
