import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private http: HttpClient ) {

  }

  name: string = "";
  arquivo: any;
  barWidth: string = "0%";

  getName(name: string) {
    this.name = name;
  }

  inputFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.arquivo = event.target.files[0];

      console.log('file', this.arquivo);
    }
  }

  submitData() {

    let formData = new FormData();
    formData.set("name", this.name);
    formData.set("file", this.arquivo);

    this.http.post("http://localhost:8080/agentes/arquivo", formData)
        .subscribe((response) => {});

  }

}
