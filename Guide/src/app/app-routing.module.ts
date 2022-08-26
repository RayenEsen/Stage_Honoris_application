import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  }
  ,
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
  ,
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'etablissements',
    loadChildren: () => import('./etablissements/etablissements.module').then( m => m.EtablissementsPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'professional',
    loadChildren: () => import('./professional/professional.module').then( m => m.ProfessionalPageModule)
  },
  {
    path: 'universitaire',
    loadChildren: () => import('./universitaire/universitaire.module').then( m => m.UniversitairePageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'ucnext',
    loadChildren: () => import('./ucnext/ucnext.module').then( m => m.UCnextPageModule)
  },
  {
    path: 'imsetnext',
    loadChildren: () => import('./imsetnext/imsetnext.module').then( m => m.ImsetnextPageModule)
  },
  {
    path: 'aacnext',
    loadChildren: () => import('./aacnext/aacnext.module').then( m => m.AacnextPageModule)
  },
  {
    path: 'upsatnext',
    loadChildren: () => import('./upsatnext/upsatnext.module').then( m => m.UpsatnextPageModule)
  },
  {
    path: 'imsetunis',
    loadChildren: () => import('./imsetunis/imsetunis.module').then( m => m.ImsetunisPageModule)
  },
  {
    path: 'imsetnebeul',
    loadChildren: () => import('./imsetnebeul/imsetnebeul.module').then( m => m.ImsetnebeulPageModule)
  },
  {
    path: 'imsetsousse',
    loadChildren: () => import('./imsetsousse/imsetsousse.module').then( m => m.ImsetsoussePageModule)
  },
  {
    path: 'imsetgabes',
    loadChildren: () => import('./imsetgabes/imsetgabes.module').then( m => m.ImsetgabesPageModule)
  },
  {
    path: 'aactunis',
    loadChildren: () => import('./aactunis/aactunis.module').then( m => m.AactunisPageModule)
  },
  {
    path: 'aacnebeul',
    loadChildren: () => import('./aacnebeul/aacnebeul.module').then( m => m.AacnebeulPageModule)
  },
  {
    path: 'upsatsousse',
    loadChildren: () => import('./upsatsousse/upsatsousse.module').then( m => m.UpsatsoussePageModule)
  },
  {
    path: 'upsattunis',
    loadChildren: () => import('./upsattunis/upsattunis.module').then( m => m.UpsattunisPageModule)
  },
  {
    path: 'upsatsfax',
    loadChildren: () => import('./upsatsfax/upsatsfax.module').then( m => m.UpsatsfaxPageModule)
  },
  {
    path: 'espritunis',
    loadChildren: () => import('./espritunis/espritunis.module').then( m => m.EspritunisPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
