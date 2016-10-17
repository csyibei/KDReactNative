//
//  KDViewManager.m
//  KDReactNative
//
//  Created by csyibei on 2016/10/18.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "KDViewManager.h"
#import "KDView.h"

@implementation KDViewManager

RCT_EXPORT_MODULE()

- (UIView *)view{
  return [[KDView alloc] init];
}

@end
