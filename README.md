# sc-app

- Be sure to use `node --version` -> `12.16.1`
- Follow [React Native Setup Docs](https://reactnative.dev/docs/environment-setup) thoroughly for **Android**.
  - Keep in mind the version to use for JAVA.
  - Don't forget to install watchman.
- If max file watch limit error was raised by CLI - `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
- Can use following options for the react-native CLI. As per their [code](https://github.com/react-native-community/cli/blob/master/packages/cli/src/commands/init/index.ts#L24)

```
import init from './init';

export default {
  func: init,
  detached: true,
  name: 'init <projectName>',
  description:
    'Initialize a new React Native project named <projectName> in a directory of the same name.',
  options: [
    {
      name: '--version [string]',
      description: 'Uses a valid semver version of React Native as a template',
    },
    {
      name: '--template [string]',
      description:
        'Uses a custom template. Valid arguments are: npm package, absolute directory prefixed with `file://`, Git repository or a tarball',
    },
    {
      name: '--npm',
      description: 'Forces using npm for initialization',
    },
    {
      name: '--directory [string]',
      description: 'Uses a custom directory instead of `<projectName>`.',
    },
    {
      name: '--title [string]',
      description: 'Uses a custom app title name for application',
    },
  ],
};
```

- After all the things above, we needed specific version and kebab (hyphenated) name for the directory
  `react-native init SemanticChat --version react-native@0.61.3`
- Install stable release of [react-native-debugger](https://github.com/jhen0409/react-native-debugger)
- Go to the directory -
  - In one terminal run `react-native start`
  - In another use `react-native run-android` (need to be run everytime for emulator, only once for device)
- For connecting device and development server follow this [doc](https://reactnative.dev/docs/running-on-device)
- adb -s <DEVICE_ID> reverse tcp:8081 tcp:8081 works because Chrome debugger and react-native debugger both are listening on port 8081
- For RND - close chrome debugger, run RND and refresh App
  > Be sure to enable debugging option from app options
