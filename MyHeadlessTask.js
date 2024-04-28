import {NativeModules} from 'react-native';

export default async function MyHeadlessTask() {
  const {MyNativeModule} = NativeModules;

  console.log('NativeModules', NativeModules);

  try {
    const staticData = await MyNativeModule.getStaticData();
    console.log('Received static data:', staticData);
  } catch (error) {
    console.error('Error retrieving static data:', error);
  }
}
