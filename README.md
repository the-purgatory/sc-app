# sc-app

- Be sure to use `node --version` -> `12.16.1` [Can use `nvm` to manage multiple node versions on your system]
- Follow [React Native Setup Docs](https://reactnative.dev/docs/environment-setup) thoroughly for **Android**.
  - Keep in mind the version to use for JAVA.
  - Don't forget to install watchman.
- If max file watch limit error was raised by CLI - `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
- Can use [following](https://github.com/react-native-community/cli/blob/master/packages/cli/src/commands/init/index.ts#L24) options for the react-native CLI.
- After all the things above, we needed specific version and kebab (hyphenated) name for the directory
  `react-native init SemanticChat --version react-native@0.61.3`
  > This didn't work #TODO
- Install stable release of [react-native-debugger](https://github.com/jhen0409/react-native-debugger)
- Go to the directory -
  - In one terminal run `react-native start`
  - In another use `react-native run-android` (need to be run everytime for emulator, only once for device)
- For connecting device and development server follow this [doc](https://reactnative.dev/docs/running-on-device)
- adb -s <DEVICE_ID> reverse tcp:8081 tcp:8081 works because Chrome debugger and react-native debugger both are listening on port 8081
- For running RND - close chrome debugger, run RND and refresh App
  > Be sure to enable debugging option from app options
