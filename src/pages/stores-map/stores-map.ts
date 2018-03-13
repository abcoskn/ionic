import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,PopoverController  } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { HomePage } from '../home/home';
import { StoreInfoPage } from '../store-info/store-info';
import { FunctionsProvider } from '../../providers/functions/functions';
declare var google:any;

/**
 * Generated class for the StoresMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stores-map',
  templateUrl: 'stores-map.html',
})
export class StoresMapPage {
@ViewChild('map') mapRef: ElementRef;
map:any;
name:any;
address:any;
phone:any;
items:any;
profileModal:any;
mypoint:any;
latlng:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menu: MenuController,
    public functions:FunctionsProvider,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    private geolocation: Geolocation
  ) {
    this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap(){

    const location = new google.maps.LatLng(39.564056, 34.506425);
    const options={
      center:location,
      zoom:5
    };
    this.map=new google.maps.Map(this.mapRef.nativeElement,options);
    
     
    this.geolocation.getCurrentPosition().then((resp) => {
      var mypin=new google.maps.MarkerImage("images/location.png", null, null, new google.maps.Point(35,35), new google.maps.Size(70,70));
      this.mypoint=new google.maps.Marker({
        position:{lat:resp.coords.latitude,lng:resp.coords.longitude},
        flat:true,
        map:this.map,
        icon:mypin
      });
      this.latlng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

      this.addYourLocationButton(this.map, this.mypoint,this.latlng);
      this.map.setCenter(new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude));
      this.map.setZoom(16);
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
        this.latlng = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
        this.mypoint.setPosition(this.latlng);
        console.log("lat:"+data.coords.latitude+" lng:"+data.coords.longitude)
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.functions.getstores().subscribe(response =>{
      if(response.success!="false"){
        this.items=response;
        
        this.items.forEach(element => {
          this.addMarker(element.name,element.phone,element.address,parseFloat(element.latitude),parseFloat(element.longitude),this.map,element.distance);
        });

      }
    });
  }
  addMarker(name,phone,address,lat,lng,map,distance){
    var myIcon = new google.maps.MarkerImage("images/yrmarker.png", null, null, null, new google.maps.Size(27,60));
    let marker= new google.maps.Marker({
      position:{lat:lat,lng:lng},
      flat:true,
      map,
      icon:myIcon
    });
    google.maps.event.addListener(marker, 'click', () => {
      this.setStoreInfo(name,phone,address,distance);
      //map, marker);
    });
    return marker;
  }
  setStoreInfo(name,phone,address,distance){
    this.name=name;
    this.phone=phone;
    this.address=address;
    //this.profileModal = this.modalCtrl.create(StoreInfoPage, { name:name,phone:phone,address:address },{showBackdrop: true,enableBackdropDismiss: true,cssClass : 'pricebreakup'});
    //this.profileModal.present();
    let popover=this.popoverCtrl.create(StoreInfoPage, { name:name,phone:phone,address:address,distance:distance },{showBackdrop: true,enableBackdropDismiss: true,cssClass : 'pricebreakup'});
    popover.present()
  }
  closewindow(){
    document.getElementById("map").style.height="100%";
  }
  addYourLocationButton(map, marker,latlng) 
  {
      var controlDiv = document.createElement('div');
  
      var firstChild = document.createElement('button');
      firstChild.style.backgroundColor = '#fff';
      firstChild.style.border = 'none';
      firstChild.style.outline = 'none';
      firstChild.style.width = '28px';
      firstChild.style.height = '28px';
      firstChild.style.borderRadius = '2px';
      firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
      firstChild.style.cursor = 'pointer';
      firstChild.style.marginRight = '10px';
      firstChild.style.padding = '0px';
      firstChild.title = 'Your Location';
      controlDiv.appendChild(firstChild);
  
      var secondChild = document.createElement('div');
      secondChild.style.margin = '5px';
      secondChild.style.width = '18px';
      secondChild.style.height = '18px';
      secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
      secondChild.style.backgroundSize = '180px 18px';
      secondChild.style.backgroundPosition = '0px 0px';
      secondChild.style.backgroundRepeat = 'no-repeat';
      secondChild.id = 'you_location_img';
      firstChild.appendChild(secondChild);
  
      google.maps.event.addListener(map, 'dragend', function() {
          //$('#you_location_img').css('background-position', '0px 0px');
          document.getElementById("you_location_img").style.backgroundPosition="0px 0px";
      });
      firstChild.addEventListener('click', function() {
          
          var imgX = '0';
          var animationInterval = setInterval(function(){
              if(imgX == '-18') imgX = '0';
              else imgX = '-18';
              //$('#you_location_img').css('background-position', imgX+'px 0px');
              document.getElementById("you_location_img").style.backgroundPosition=imgX+"px 0px";
          }, 500);
          if(latlng) {
                  marker.setPosition(latlng);
                  map.setCenter(latlng);
                  //map.panTo(latlng);
                  clearInterval(animationInterval);
                  //$('#you_location_img').css('background-position', '-144px 0px');
                  document.getElementById("you_location_img").style.backgroundPosition="-144px 0px";
          }
          else{
              clearInterval(animationInterval);
              //$('#you_location_img').css('background-position', '0px 0px');
              document.getElementById("you_location_img").style.backgroundPosition="0px 0px";
          }
      });
      
      controlDiv.tabIndex = 1;
      map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
  }
}