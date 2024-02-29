import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EliminarParentesisComponent } from "./components/eliminar-parentesis/eliminar-parentesis.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EliminarParentesisComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'app-parentesis';
}
