import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonRouterLink,
  IonList,
  IonItem,
  IonIcon
} from '@ionic/angular/standalone';
import { RouterLinkActive, Router } from "@angular/router";
import { addIcons } from 'ionicons';
import { alertCircleOutline, 
        albumsOutline, 
        personCircleOutline, 
        squareOutline,
        cardOutline,
        checkboxOutline,
        calendarOutline,
        carOutline,
        gridOutline,
        infiniteOutline,
        enterOutline,
        listOutline,
        ellipsisHorizontalCircleOutline,
        menuOutline,
        arrowUpOutline ,
        tabletLandscapeOutline,
        removeOutline,
        refreshOutline,
        searchOutline,
        browsersOutline,
        codeWorkingOutline,
        chevronUpOutline
       } from 'ionicons/icons';
import { MenuController, IonMenuButton } from '@ionic/angular'



interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonRouterLink,
    RouterLinkActive,
    IonList,
    IonItem,

],
})
export class inicioPage {
  componentes: Componente[] = [
    { icon: 'alert-circle-outline', name: 'Alert', redirectTo: '/alert' },
    { icon: 'albums-outline', name: 'Action Sheet', redirectTo: '/action-sheet' },
    { icon: 'person-circle-outline', name: 'Avatar', redirectTo: '/avatar' },
    { icon: 'square-outline', name: 'Button', redirectTo: '/button' },
    { icon: 'card-outline', name: 'Card', redirectTo: '/card' },
    { icon: 'checkbox-outline', name: 'Checkbox', redirectTo: '/checkbox' },
    { icon: 'calendar-outline', name: 'Datetime', redirectTo: '/datetime' },
    { icon: 'car-outline', name: 'Fab', redirectTo: '/fab' },
    { icon: 'grid-outline', name: 'Grid', redirectTo: '/grid' },
    { icon: 'infinite-outline', name: 'Infinite Scroll', redirectTo: '/infinite-scroll' },
    { icon: 'enter-outline', name: 'Input', redirectTo: '/input' },
    { icon: 'list-outline', name: 'List', redirectTo: '/list' },
    { icon: 'list-outline', name: 'List Reorder', redirectTo: '/list-reorder' },
    { icon: 'ellipsis-horizontal-circle-outline', name: 'Loading', redirectTo: '/loading' },
    { icon: 'menu-outline', name: 'Menu', redirectTo: '/menu' },
    { icon: 'arrow-up-outline', name: 'Modal', redirectTo: '/modal' },
    { icon: 'tablet-landscape-outline', name: 'Popover', redirectTo: '/popover' },
    { icon: 'remove-outline', name: 'Progress', redirectTo: '/progress' },
    { icon: 'refresh-outline', name: 'Refresher', redirectTo: '/refresher' },
    { icon: 'search-outline', name: 'Search Bar', redirectTo: '/search-bar' },
    { icon: 'browsers-outline', name: 'Segment', redirectTo: '/segment' },
    { icon: 'albums-outline', name: 'Slides', redirectTo: '/slides' },
    { icon: 'code-working-outline', name: 'Tabs', redirectTo: '/tabs' },
    { icon: 'chevron-up-outline', name: 'Toast', redirectTo: '/toast' },

  ];

  constructor(private router: Router, private menuCtrl: MenuController) {
    // Registrar todos los iconos que se usarán
    addIcons({ alertCircleOutline, 
              albumsOutline, 
              personCircleOutline, 
              squareOutline, 
              cardOutline, 
              checkboxOutline, 
              calendarOutline,
              carOutline,
              gridOutline,
              infiniteOutline,
              enterOutline,
              listOutline,
              ellipsisHorizontalCircleOutline,
              menuOutline,
              arrowUpOutline ,
              tabletLandscapeOutline,
              removeOutline,
              refreshOutline,
              searchOutline,
              browsersOutline,
              codeWorkingOutline,
              chevronUpOutline
            });
  }

  mostrarMenu(){
    this.menuCtrl.open('first');
  }


  // Método para probar que el botón funciona
  testClick() {
    console.log('¡El botón funciona!');
    alert('¡El botón funciona!');
  }

  // Método para navegar programáticamente
  goToAlert() {
    console.log('Intentando navegar a /alert');
    this.router.navigate(['/alert']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToActionSheet() {
    console.log('Intentando navegar a /action-sheet');
    this.router.navigate(['/action-sheet']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }
  goToAvatar() {
    console.log('Intentando navegar a /avatar');
    this.router.navigate(['/avatar']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }
  goToButton() {
    console.log('Intentando navegar a /button');
    this.router.navigate(['/button']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }
  goToCard() {
    console.log('Intentando navegar a /card');
    this.router.navigate(['/card']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }
  goToCheckbox() {
    console.log('Intentando navegar a /checkbox');
    this.router.navigate(['/checkbox']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }
  goToDatetime() {
    console.log('Intentando navegar a /datetime');
    this.router.navigate(['/datetime']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToFab() {
    console.log('Intentando navegar a /fab');
    this.router.navigate(['/fab']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToGrid() {
    console.log('Intentando navegar a /grid');
    this.router.navigate(['/grid']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToInfiniteScroll() {
    console.log('Intentando navegar a /infinite-scroll');
    this.router.navigate(['/infinite-scroll']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

    goToInput() {
    console.log('Intentando navegar a /input');
    this.router.navigate(['/input']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToList() {
    console.log('Intentando navegar a /list');
    this.router.navigate(['/list']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToListReorder() {
    console.log('Intentando navegar a /list-reorder');
    this.router.navigate(['/list-reorder']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToLoading() {
    console.log('Intentando navegar a /loading');
    this.router.navigate(['/loading']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToMenu() {
    console.log('Intentando navegar a /menu');
    this.router.navigate(['/menu']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToModal() {
    console.log('Intentando navegar a /modal');
    this.router.navigate(['/modal']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToPopover() {
    console.log('Intentando navegar a /popover');
    this.router.navigate(['/popover']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  } 

  goToProgess() {
    console.log('Intentando navegar a /progress');
    this.router.navigate(['/progress']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToRefresher() {
    console.log('Intentando navegar a /refresher');
    this.router.navigate(['/refresher']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToSearchBar() {
    console.log('Intentando navegar a /search-bar');
    this.router.navigate(['/search-bar']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToSegment() {
    console.log('Intentando navegar a /segment');
    this.router.navigate(['/segment']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToSlides() {
    console.log('Intentando navegar a /slides');
    this.router.navigate(['/slides']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToTabs() {
    console.log('Intentando navegar a /tabs');
    this.router.navigate(['/tabs']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToToast() {
    console.log('Intentando navegar a /toast');
    this.router.navigate(['/toast']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  // Método genérico para navegar
  navigateTo(route: string) {
    console.log('Navegando a:', route);
    this.router.navigate([route]);
  }
}