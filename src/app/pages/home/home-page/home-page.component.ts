import { Component } from '@angular/core';
import { WhoAreWeComponent } from '../who-are-we/who-are-we.component';
import { BannerComponent } from '../banner/banner.component';
import { BannerWhyChosseMeComponent } from '../banner-why-chosse-me/banner-why-chosse-me.component';
import { TowingServicesTableComponent } from '../towing-services-table/towing-services-table.component';
import { FormQuoteComponent } from '../form-quote/form-quote.component';
import { IconWhatssAppComponent } from '../../../components/shared/icon-whatss-app/icon-whatss-app.component';
import { BannerSellComponent } from '../banner-sell/banner-sell.component';
import { BannerPeopleOpinionsComponent } from '../banner-opinions/banner-people-opinions/banner-people-opinions.component';

@Component({
  selector: 'app-home-page',
  imports: [BannerComponent, BannerWhyChosseMeComponent, BannerSellComponent,BannerPeopleOpinionsComponent, TowingServicesTableComponent, FormQuoteComponent,IconWhatssAppComponent, WhoAreWeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  EnviarMensaje(): void {
    console.log('Mensaje enviado');
  }
}
