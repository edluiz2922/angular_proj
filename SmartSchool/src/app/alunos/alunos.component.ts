import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = "-TELA ALUNO-"
  public alunos =[
    {nome: "al_1 "},
    {nome: "al_2 "},
    {nome: "al_3 "}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
