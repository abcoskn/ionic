import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,PopoverController  } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController,public functions:FunctionsProvider,public modalCtrl: ModalController,public popoverCtrl: PopoverController) {
    this.menu.swipeEnable(false);
  }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(41.0773616191, 29.0117168426);
    const options={
      center:location,
      zoom:10
    };
    this.map=new google.maps.Map(this.mapRef.nativeElement,options);
    //const position=new google.maps.LatLng(41.0773616191, 29.0117168426);
    this.functions.getstores().subscribe(response =>{
      if(response.success!="false"){
        this.items=response;
        this.items.forEach(element => {
          this.addMarker(element.name,element.phone,element.address,parseFloat(element.latitude),parseFloat(element.longitude),this.map);
        });
      }
    });
  }
  addMarker(name,phone,address,lat,lng,map){
    var myIcon = new google.maps.MarkerImage("images/yrmarker.png", null, null, null, new google.maps.Size(27,60));
    let marker= new google.maps.Marker({
      position:{lat:lat,lng:lng},
      flat:true,
      map,
      icon:myIcon
    });
    
    let content = "<ion-list><button ion-item><ion-avatar item-start><img src='images/icon.png'></ion-avatar><h2>"+name+"</h2><p>2.4 kilometre</p></button></ion-list>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      this.setStoreInfo(name,phone,address);
      //map, marker);
    });
    return marker;
  }
  setStoreInfo(name,phone,address){
    this.name=name;
    this.phone=phone;
    this.address=address;
    //this.profileModal = this.modalCtrl.create(StoreInfoPage, { name:name,phone:phone,address:address },{showBackdrop: true,enableBackdropDismiss: true,cssClass : 'pricebreakup'});
    //this.profileModal.present();
    let popover=this.popoverCtrl.create(StoreInfoPage, { name:name,phone:phone,address:address },{showBackdrop: true,enableBackdropDismiss: true,cssClass : 'pricebreakup'});
    popover.present()
  }
  closewindow(){
    document.getElementById("map").style.height="100%";
  }
  
}
