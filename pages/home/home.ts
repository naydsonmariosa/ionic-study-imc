import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  peso = 0;
  altura = 1.6;
  imc = 0;
  classificacao = "";

  colorAssociado = "black";

  constructor(public navCtrl: NavController) {
    this.calc();
  }

  calc() {
    this.imc = Math.round(this.peso / (this.altura * this.altura));

    console.log(this.imc);

    if (this.imc < 18.5) {
      this.classificacao = "MAGREZA";
      this.colorAssociado = "red";
    } else if (this.imc >= 18.5 && this.imc <= 24.9) {
      this.classificacao = "NORMAL";
      this.colorAssociado = "green";
    } else if (this.imc >= 25.0 && this.imc <= 29.9) {
      this.classificacao = "SOBREPESO";
      this.colorAssociado = "orange";
    } else if (this.imc >= 30 && this.imc <= 39.9) {
      this.classificacao = "OBESIDADE";
      this.colorAssociado = "red";
    } else if (this.imc >= 40) {
      this.classificacao = "OBESIDADE GRAVE";
      this.colorAssociado = "red";
    }
  }
}
