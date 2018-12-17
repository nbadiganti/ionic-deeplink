import { AboutusPage } from './../pages/aboutus/aboutus';
import { Component } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';
import { ViewChild } from '@angular/core';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  @ViewChild(Nav) navChild: Nav;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public deeplink: Deeplinks) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      this.deeplink.routeWithNavController(this.navChild, {
        '/about-us': AboutusPage,
        '/universal-links-test': AboutusPage
      }).subscribe((match) => {
        console.log('Successfully routed', match);
      }, (nomatch) => {
        console.warn('Unmatched Route', nomatch);
      });
    });
  }

}

