import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPageComponent } from './settings-page.component';
import { AppComponent } from "../../app.component";
import { BrowsePageComponent } from "../browse-page/browse-page.component";
import { CitySearchComponent } from "../../components/city-search/city-search.component";
import { CityTileComponent } from "../../components/city-tile/city-tile.component";
import { NavigationComponent } from "../../components/navigation/navigation.component";
import { WeatherPageComponent } from "../weather-page/weather-page.component";
import { FavouritesPageComponent } from "../favourites-page/favourites-page.component";
import { HomePageComponent } from "../home-page/home-page.component";
import { CurrentComponent } from "../../components/weather/current/current.component";
import { DailyComponent } from "../../components/weather/daily/daily.component";
import { HourlyComponent } from "../../components/weather/hourly/hourly.component";
import { WeatherModelComponent } from "../../components/weather/weather-model/weather-model.component";
import { WeatherCardComponent } from "../../components/weather/weather-card/weather-card.component";
import { SettingsPipe } from "./settings.pipe";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../../app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  TuiAlertModule, TuiDataListModule,
  TuiDialogModule, TuiDropdownModule, TuiExpandModule, TuiHintModule, TuiHostedDropdownModule, TuiLinkModule,
  TuiNotificationModule,
  TuiRootModule, TuiSvgModule,
  TuiTextfieldControllerModule, TuiTooltipModule
} from "@taiga-ui/core";
import {
  TuiAccordionModule,
  TuiBreadcrumbsModule,
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiFilterByInputPipeModule, TuiSelectModule,
  TuiTabsModule,
  TuiToggleModule
} from "@taiga-ui/kit";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TuiLetModule, TuiPlatformModule, TuiRepeatTimesModule } from "@taiga-ui/cdk";
import {
  TuiAppBarModule,
  TuiAppearanceModule,
  TuiBadgeModule,
  TuiButtonCloseModule,
  TuiButtonModule,
  TuiCardModule, TuiCellModule, TuiFadeModule,
  TuiIconModule, TuiNavigationModule,
  TuiSurfaceModule,
  TuiThumbnailCardModule,
  TuiTitleModule
} from "@taiga-ui/experimental";
import { CommonModule } from "@angular/common";
import { TuiRippleModule, TuiTabBarModule } from "@taiga-ui/addon-mobile";

describe('SettingsPageComponent', () => {
  let component: SettingsPageComponent;
  let fixture: ComponentFixture<SettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BrowsePageComponent,
        CitySearchComponent,
        CityTileComponent,
        NavigationComponent,
        WeatherPageComponent,
        FavouritesPageComponent,
        HomePageComponent,
        CurrentComponent,
        DailyComponent,
        HourlyComponent,
        SettingsPageComponent,
        WeatherModelComponent,
        WeatherCardComponent,
        SettingsPipe
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        TuiFilterByInputPipeModule,
        TuiDataListWrapperModule,
        TuiComboBoxModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TuiTextfieldControllerModule,
        TuiLetModule,
        TuiCardModule,
        CommonModule,
        TuiNotificationModule,
        TuiSurfaceModule,
        TuiSvgModule,
        TuiTitleModule,
        TuiHintModule,
        FormsModule,
        TuiRippleModule,
        TuiThumbnailCardModule,
        TuiIconModule,
        TuiButtonModule,
        TuiCellModule,
        TuiRepeatTimesModule,
        TuiDataListModule,
        TuiHostedDropdownModule,
        TuiButtonCloseModule,
        TuiPlatformModule,
        TuiLinkModule,
        TuiTabsModule,
        TuiNavigationModule,
        TuiDropdownModule,
        TuiExpandModule,
        TuiCardModule,
        TuiToggleModule,
        TuiBreadcrumbsModule,
        TuiFadeModule,
        TuiBadgeModule,
        TuiAppearanceModule,
        TuiAccordionModule,
        TuiSelectModule,
        TuiTooltipModule,
        TuiTabBarModule,
        TuiAppBarModule,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
