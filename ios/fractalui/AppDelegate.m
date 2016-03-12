/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import "RCTRootView.h"
#import "AppHub.h"
#import <Fabric/Fabric.h>
#import <Crashlytics/Crashlytics.h>


@interface AppDelegate ()

@property (strong, nonatomic) NSDictionary *launchOptions;
@property (assign, nonatomic) BOOL newBuildAvailable;

@end


@implementation AppDelegate


#pragma mark - App Lifecycle

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  [self setup:launchOptions];
  
  return YES;
}

- (void)applicationWillResignActive:(UIApplication *)application {
  // Reload the build when the application will resign active if there is a new build available
  if (self.newBuildAvailable) {
    [self setRootViewController:[self setupRootViewController:self.launchOptions]];
    self.newBuildAvailable = NO;
  }
}


#pragma mark - Setup

- (UIViewController *)setupRootViewController:(NSDictionary *)launchOptions {
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:[self javascriptBundleURL]
                                                      moduleName:@"App"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [UIColor blackColor];
  
  UIViewController *rootViewController = [[UIViewController alloc] init];
  rootViewController.view = rootView;
  
  return rootViewController;
}

- (void)setup:(NSDictionary *)launchOptions {
  self.launchOptions = launchOptions;
  self.newBuildAvailable = NO;
  
  [self setupFabric];
  [self setupAppHub];
  [self setupWindow];
  [self setRootViewController:[self setupRootViewController:launchOptions]];
}

- (void)setRootViewController:(UIViewController *)viewController {
  self.window.rootViewController = viewController;
}

- (void)setupWindow {
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  [self.window makeKeyAndVisible];
}

- (void)setupFabric {
  [Fabric with:@[[Crashlytics class]]];
}

- (void)setupAppHub {
  [AppHub setApplicationID:@"L7SPkBSYyLAaI7ecxOf4"];
  
#ifdef DEBUG
  [AppHub buildManager].debugBuildsEnabled = YES;
#else
  [AppHub buildManager].debugBuildsEnabled = NO;
#endif
  
  // TODO: This should be toggle-able by some sort of setting
  [AppHub buildManager].cellularDownloadsEnabled = NO;
  
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(appHubBuildAvailable:) name:AHBuildManagerDidMakeBuildAvailableNotification object:nil];
}

- (void)appHubBuildAvailable:(NSNotification *)notification {
  self.newBuildAvailable = YES;
}

- (NSURL *)javascriptBundleURL {
  // If target is simulator, use 1) dev server or 2) main.jsbundle.
#if TARGET_IPHONE_SIMULATOR
  // Option 1) dev server
  return [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
  // Option 2) main.jsbundle
  //  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#else
  AHBuild *build = [[AppHub buildManager] currentBuild];
  return [build.bundle URLForResource:@"main"
                        withExtension:@"jsbundle"];
#endif
}

@end
