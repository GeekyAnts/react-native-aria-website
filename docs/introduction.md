---
id: introduction
title: What is React Native Aria?
sidebar_label: What is React Native Aria?
slug: /
---

A library of [React Hooks](https://reactjs.org/docs/hooks-intro.html) for react-native web and react-native (Android/iOS) that provides accessible UI primitives for your design system.

## Motivation

In a utopian world, we would love a component library that works on all the platforms without limiting its styling, behavior, and accessibility. In reality, this can be a bit tricky.

With the advent of React Native, it has raised our expectations to build UIs across all platforms while reusing as much code as possible. However, RN ships with a very lean core with a lot of room for customizability. This means that we need to build our primitive components using [View](https://reactnative.dev/docs/view) and [Pressable](https://reactnative.dev/docs/pressable) or install third-party packages (like the one you're looking at). This is in contrast to the native development world where component APIs are shipped in the SDKs like [UI Menu in iOS](https://developer.apple.com/documentation/uikit/uimenu).

React Native ARIA aims to solve this by providing low level primitives to create a component or a primitive library that works on all platforms with the scope of React native.

Note: This package solves these problems for web and mobile (Android/iOS).

## Approach

- For web, we've used [React Aria](https://react-spectrum.adobe.com/react-aria/index.html) which provides [ARIA](https://www.w3.org/TR/wai-aria-1.1/) attributes and behaviour (keyboard navigation/Tab focus) for commonly used components.
- For iOS/Android, we've created similar hooks to those in React Aria but instead of web-supported ARIA/behaviour, it returns [React Native supported accessibility props](https://reactnative.dev/docs/accessibility) whenever possible.

Check out [Adobe Spectrum's architecture](https://react-spectrum.adobe.com/architecture.html) and [this talk](https://youtu.be/dxDcBB7Xoxs) by [Devon Govett](https://twitter.com/devongovett).
