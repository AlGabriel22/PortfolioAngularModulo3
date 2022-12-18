import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { FotoPerfilComponent } from './componentes/foto-perfil/foto-perfil.component';
import { NombreComponent } from './componentes/nombre/nombre.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { PracticasComponent } from './componentes/practicas/practicas.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { IndexComponent } from './componentes/index/index.component';
import { NavbardComponent } from './componentes/compdashboard/navbard/navbard.component';
import { HeaderDComponent } from './componentes/compdashboard/header-d/header-d.component';
import { LoginModalComponent } from './componentes/modales/login-modal/login-modal.component';
import { BannerDComponent } from './componentes/compdashboard/banner-d/banner-d.component';
import { FotoPerfilDComponent } from './componentes/compdashboard/foto-perfil-d/foto-perfil-d.component';
import { NombreDComponent } from './componentes/compdashboard/nombre-d/nombre-d.component';
import { AcercaDeDComponent } from './componentes/compdashboard/acerca-de-d/acerca-de-d.component';
import { ExperienciaDComponent } from './componentes/compdashboard/experiencia-d/experiencia-d.component';
import { EducacionDComponent } from './componentes/compdashboard/educacion-d/educacion-d.component';
import { SkillsDComponent } from './componentes/compdashboard/skills-d/skills-d.component';
import { PracticasDComponent } from './componentes/compdashboard/practicas-d/practicas-d.component';
import { BannerModalComponent } from './componentes/modales/banner-modal/banner-modal.component';
import { FotoPerfilModalComponent } from './componentes/modales/foto-perfil-modal/foto-perfil-modal.component';
import { NombreModalComponent } from './componentes/modales/nombre-modal/nombre-modal.component';
import { BorrarNombreModalComponent } from './componentes/modales/borrar-nombre-modal/borrar-nombre-modal.component';
import { AcercaDeModalComponent } from './componentes/modales/acerca-de-modal/acerca-de-modal.component';
import { BorrarAcercadeModalComponent } from './componentes/modales/borrar-acercade-modal/borrar-acercade-modal.component';
import { NuevaExperienciaComponent } from './componentes/modales/nueva-experiencia/nueva-experiencia.component';
import { ExperienciaModalComponent } from './componentes/modales/experiencia-modal/experiencia-modal.component';
import { BorrarExperienciaModalComponent } from './componentes/modales/borrar-experiencia-modal/borrar-experiencia-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    RedesSocialesComponent,
    BannerComponent,
    FotoPerfilComponent,
    NombreComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    PracticasComponent,
    FooterComponent,
    DashboardComponent,
    IndexComponent,
    NavbardComponent,
    HeaderDComponent,
    LoginModalComponent,
    BannerDComponent,
    FotoPerfilDComponent,
    NombreDComponent,
    AcercaDeDComponent,
    ExperienciaDComponent,
    EducacionDComponent,
    SkillsDComponent,
    PracticasDComponent,
    BannerModalComponent,
    FotoPerfilModalComponent,
    NombreModalComponent,
    BorrarNombreModalComponent,
    AcercaDeModalComponent,
    BorrarAcercadeModalComponent,
    NuevaExperienciaComponent,
    ExperienciaModalComponent,
    BorrarExperienciaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
