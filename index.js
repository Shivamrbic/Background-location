/**
 * @format
 */

import {
  AppRegistry,
  DeviceEventEmitter,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MyHeadlessTask from './MyHeadlessTask';
import {useEffect} from 'react';
import LocationTask from './LocationTask';

AppRegistry.registerHeadlessTask('Example', () => ExampleTask);
// AppRegistry.registerHeadlessTask('LocationTask', () => LocationTask);
AppRegistry.registerComponent(appName, () => App);

const ExampleTask = async args => {
  console.log(
    'Receiving Example Event!---------------------------------------------------',
    args,
  );
  // await fetch('https://21e1-182-68-28-215.ngrok-free.app/check', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(args),
  // })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log('Response:', data);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });

  // LocationTask();
};
console.log('MyBackgroundModule', NativeModules);

// MyBackgroundModule?.performBackgroundTask()
//   .then(result => {
//     console.log('MyBackgroundModule', MyBackgroundModule);
//     console.log(result); // Output: Background task completed
//   })
//   .catch(error => {
//     console.error(error);
//   });

// // Start the background service
// BackgroundService?.startService();

// DeviceEventEmitter.addListener('BackgroundEvent', message => {
//   console.log('Received from native:', message);
// });

const MyEventEmitter = new NativeEventEmitter(NativeModules?.MyEventEmitter);

const subscription = MyEventEmitter.addListener(
  'LocationUpdateEvent',
  async data => {
    console.log('Received data from native:', data);
    if (data) {
      await fetch('https://21e1-182-68-28-215.ngrok-free.app/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Response:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    // Handle data received from native side
  },
);

// Don't forget to unsubscribe when component unmounts
// useEffect(() => {
//   console.log('HOLAAA Removed');
//   return () => {
//     console.log('HOLAAA Removed');
//     subscription.remove();
//   };
// }, []);

AppRegistry.registerComponent(appName, () => App);
