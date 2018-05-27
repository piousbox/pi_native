
# Develop

There are @TODO where I'm hardcoding things.

skip husky
 git commit --no-verify
 git push --no-verify

Refresh without shaking
 adb shell input keyevent KEYCODE_MENU

# Deploy - Prepare
From: https://facebook.github.io/react-native/docs/signed-apk-android.html

 keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
 ./gradlew assembleRelease
 # react-native run-android --variant=release

# Deploy
 # bump version and version code in android/app/build.gradle
 cd android && ./gradlew assembleRelease
 # upload from android/app/build/outputs/apk







