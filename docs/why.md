---
id: why
title: Why React Native Aria?
sidebar_label: Why?
slug: /
---

This page discusses why React Native Aria exists, and the problems it solves.

tl;dr

React native aria provides hooks for react-native-web and react-native (iOS/Android) to create commonly used components.

## Motivation

In an utopian world, we wish to have a component library that works on all the platforms without limiting it's styling, behavior and accessibility. In reality, this can be a bit tricky.

With the advent of React native, it has raised our expectations to build UIs across all the platforms while reusing as much code as possible. But in reality, RN ships with a very lean core with a lot of room for customizability. The downside of this is that we need to build our primitive components using [View](https://reactnative.dev/docs/view) and [Pressable](https://reactnative.dev/docs/pressable) or install third-party packages (like the one you're looking at). This is in contrast to the native development world where component APIs are shipped in the SDKs. [For example](https://developer.apple.com/documentation/uikit/uimenu)

React native aria aims to solve this by providing low level primitives to create a component or primitive library that works on all platforms in the scope of React native.

Current proof of concept aims to solve this for web and mobile (Android/iOS).

For other platforms (macOS, Windows), we're exploring possibilities of using Native components that can be customized.
