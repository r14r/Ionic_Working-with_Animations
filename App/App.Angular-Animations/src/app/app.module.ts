import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { OpenClosePageComponent } from './pages/open-close/open-close-page.component';
import { OpenCloseChildComponent } from './components/open-close/open-close.component.4';
import { ToggleAnimationsPageComponent } from './pages/toggle-animations/toggle-animations-page.component';
import { StatusSliderComponent } from './components/status-slider/status-slider.component';
import { StatusSliderPageComponent } from './pages/status-slider/status-slider-page.component';
import { HeroListPageComponent } from './pages/hero-list/hero-list-page.component';
import { HeroListGroupPageComponent } from './pages/hero-list-group/hero-list-group-page.component';
import { HeroListGroupsComponent } from './components/hero-list-groups/hero-list-groups.component';
import { HeroListEnterLeavePageComponent } from './pages/hero-list-enter-leave/hero-list-enter-leave-page.component';
import { HeroListEnterLeaveComponent } from './components/hero-list-enter-leave/hero-list-enter-leave.component';
import { HeroListAutoCalcPageComponent } from './pages/hero-list-auto/hero-list-auto-page.component';
import { HeroListAutoComponent } from './components/hero-list-auto/hero-list-auto.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InsertRemoveComponent } from './components/insert-remove/insert-remove.component';


@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot([
			{ path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
			{ path: 'open-close', component: OpenClosePageComponent },
			{ path: 'status', component: StatusSliderPageComponent },
			{ path: 'toggle', component: ToggleAnimationsPageComponent },
			{ path: 'heroes', component: HeroListPageComponent, data: { animation: 'FilterPage' } },
			{ path: 'hero-groups', component: HeroListGroupPageComponent },
			{ path: 'enter-leave', component: HeroListEnterLeavePageComponent },
			{ path: 'auto', component: HeroListAutoCalcPageComponent },
			{ path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
			{ path: 'about', component: AboutComponent, data: { animation: 'AboutPage' } },

		])
	],
	declarations: [
		AppComponent,
		StatusSliderComponent,
		OpenCloseComponent,
		OpenCloseChildComponent,
		OpenClosePageComponent,
		StatusSliderPageComponent,
		ToggleAnimationsPageComponent,
		HeroListPageComponent,
		HeroListGroupsComponent,
		HeroListGroupPageComponent,
		HeroListEnterLeavePageComponent,
		HeroListEnterLeaveComponent,
		HeroListAutoCalcPageComponent,
		HeroListAutoComponent,
		HomeComponent,
		InsertRemoveComponent,
		AboutComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
