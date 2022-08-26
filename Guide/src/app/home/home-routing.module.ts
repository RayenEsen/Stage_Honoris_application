import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'profil',
        children: [
          {
            path: '',          
            loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
          }
        ]
      },
      {
        path: 'etablissements',
        children: [
          {
            path: '',          
            loadChildren: () => import('../etablissements/etablissements.module').then( m => m.EtablissementsPageModule)
          }
        ]
      },
      {
        path: 'professional',
        children: [
          {
            path: '',          
            loadChildren: () => import('../professional/professional.module').then( m => m.ProfessionalPageModule)
          }
        ]
      },
      {
        path: 'universitaire',
        children: [
          {
            path: '',          
            loadChildren: () => import('../universitaire/universitaire.module').then( m => m.UniversitairePageModule)
          }
        ]
      },
      {
        path: 'aboutus',
        children: [
          {
            path: '',          
            loadChildren: () => import('../aboutus/aboutus.module').then( m => m.AboutusPageModule)
          }
        ]
      },
      {
        path: 'ucnext',
        children: [
          {
            path: '',          
            loadChildren: () => import('../ucnext/ucnext.module').then( m => m.UCnextPageModule)
          }
        ]
      },
      {
        path: 'imsetnext',
        children: [
          {
            path: '',          
            loadChildren: () => import('../imsetnext/imsetnext.module').then( m => m.ImsetnextPageModule)
          }
        ]
      },
      {
        path: 'aacnext',
        children: [
          {
            path: '',          
            loadChildren: () => import('../aacnext/aacnext.module').then( m => m.AacnextPageModule)
          }
        ]
      },
      {
        path: 'upsatnext',
        children: [
          {
            path: '',          
            loadChildren: () => import('../upsatnext/upsatnext.module').then( m => m.UpsatnextPageModule)
          }
        ]
      },
      {
        path: 'aacnebeul',
        children: [
          {
            path: '',          
            loadChildren: () => import('../aacnebeul/aacnebeul.module').then( m => m.AacnebeulPageModule)
          }
        ]
      },
      {
        path: 'aactunis',
        children: [
          {
            path: '',          
            loadChildren: () => import('../aactunis/aactunis.module').then( m => m.AactunisPageModule)
          }
        ]
      },
      {
        path: 'espritunis',
        children: [
          {
            path: '',          
            loadChildren: () => import('../espritunis/espritunis.module').then( m => m.EspritunisPageModule)
          }
        ]
      },
      {
        path: 'imsetgabes',
        children: [
          {
            path: '',          
            loadChildren: () => import('../imsetgabes/imsetgabes.module').then( m => m.ImsetgabesPageModule)
          }
        ]
      },
      {
        path: 'imsetsousse',
        children: [
          {
            path: '',          
            loadChildren: () => import('../imsetsousse/imsetsousse.module').then( m => m.ImsetsoussePageModule)
          }
        ]
      },
      {
        path: 'imsetunis',
        children: [
          {
            path: '',          
            loadChildren: () => import('../imsetunis/imsetunis.module').then( m => m.ImsetunisPageModule)
          }
        ]
      },
      {
        path: 'imsetnebeul',
        children: [
          {
            path: '',          
            loadChildren: () => import('../imsetnebeul/imsetnebeul.module').then( m => m.ImsetnebeulPageModule)
          }
        ]
      },
      {
        path: 'upsatsfax',
        children: [
          {
            path: '',          
            loadChildren: () => import('../upsatsfax/upsatsfax.module').then( m => m.UpsatsfaxPageModule)
          }
        ]
      },
      {
        path: 'upsatsousse',
        children: [
          {
            path: '',          
            loadChildren: () => import('../upsatsousse/upsatsousse.module').then( m => m.UpsatsoussePageModule)
          }
        ]
      },
      {
        path: 'upsattunis',
        children: [
          {
            path: '',          
            loadChildren: () => import('../upsattunis/upsattunis.module').then( m => m.UpsattunisPageModule)
          }
        ]
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
