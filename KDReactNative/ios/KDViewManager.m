//
//  KDViewManager.m
//  KDReactNative
//
//  Created by csyibei on 2016/10/18.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "KDViewManager.h"


@implementation KDViewManager

RCT_EXPORT_MODULE()

- (UIView *)view{
  CGFloat w = [UIScreen mainScreen].bounds.size.width;
  CGFloat h = [UIScreen mainScreen].bounds.size.height;
  
  UIView *v =  [[UIView alloc] init];
  v.frame = CGRectMake(0, 0, 300, 300);
  
  UILabel *l = [[UILabel alloc] init];
  l.text = @"这是个原生的View 上有个原生的UILabel和UIImage";
  l.frame = CGRectMake((w - 200)/2,h/2, 200,50);
  l.textAlignment = NSTextAlignmentCenter;
  l.numberOfLines = 2;
  
  UIImageView *img = [[UIImageView alloc] initWithFrame:CGRectMake((w - 100)/2, h / 2 - 100, 100, 100)];
  img.image = [UIImage imageNamed:@"WechatIMG1"];
  
  [v addSubview:l];
  [v addSubview:img];
  
  return v;
}

@end
