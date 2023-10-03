# TravelHolic

## INDEX

- [環境構築](#環境構築)
  - [1. Expo Cli インストール](#1-Expo-Cli-インストール)
  - [2. パッケージインストール](#2-パッケージインストール)
- [エミュレータ](#エミュレータ)
  - [1. ios](#1-ios)
  - [2. android](#2-android)
- [環境構築](#フォルダー構成)

## 環境構築

### 1. Expo Cli インストール

- 1-1. Expo CLI をインストールする

  ```zsh
  npm install -g expo-cli
  ```

- 1-2. ブラウザでExpoのサインアップ
- 1-3. プロジェクトを作成
- 1_4. Link an existing codebaseで表示されるコマンドを/Travelholic配下入力

</br>

### 2. パッケージインストール

- 2-1. インストール

  ```zsh
  npm install
  ```

- 2-2. インストール確認

  ```zsh
  npm list
  ```

</br>

## エミュレータ

### 1. IOS

- 1-1. Xcodeインストールする
- 1-2. XCode(アイコン右クリのmenu) -> Open Developer Tool -> Simulator
- 1-3. 以下のコマンド実行し、オプションでaを指定
  ```zsh
  npm run start
  ```

次のメッセージが表示された場合は次のコマンドを入力

エラー

```zsh
Xcode must be fully installed before you can continue. Continue to the App Store?
```

コマンド

```zsh
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

</br>

### 2. Android

- 2-1. [Android Studioをインストールする](https://developer.android.com/studio?gclid=CjwKCAjwsKqoBhBPEiwALrrqiK2OHL6jTRVFA2lfdVtuEsw-KQDiSyy_TLctVl7CEQ1CzEvtIF0QPhoCl30QAvD_BwE&gclsrc=aw.ds)
- 2-2. [これ](https://sp7pc.com/google/android/60164)に沿ってSimulatorをインストール
- 3-3. 使用可能なエミュレータを確認
  ```zsh
  /Users/{USER_NAME}/Library/Android/sdk/emulator/emulator -list-avds
  ```
- 3-4. （MAC）[PATHを設定](https://docs.expo.dev/workflow/android-studio-emulator/)

- 3-5. 以下のコマンド実行し、オプションでaを指定
  ```zsh
  npm run start
  ```

</br>

## フォルダー構成

    .
    ├── __test__
    ├── storybooks
    └── src
        ├── asets
        │   ├── fonts
        │   └── images
        ├── components
        │   ├── atoms
        │   ├── molecules
        │   └── organisms
        ├── i18n
        │   └── languages
        ├── navigation
        ├── screens
        ├── store
        ├── utils
        ├── constants
        ├── typs
        └── apis
