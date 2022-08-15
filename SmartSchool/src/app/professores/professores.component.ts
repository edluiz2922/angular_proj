import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  
  public titulo = 'professores';

  public professores =[
    {nome: "prof_01"},
    {nome: "prof_02"},
    {nome: "prof_03"}
   ];
   
  constructor() { }

  ngOnInit() {
  }

}
