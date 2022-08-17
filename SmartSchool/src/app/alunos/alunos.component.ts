import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = "-TELA ALUNO-"
  public alunos =[
    {id: 1, nome: "al_1", sobrenome:"al_1sb" , telefone:"111-111"},
    {id: 2, nome: "al_2", sobrenome:"al_2sb" , telefone:"222.222"},
    {id: 3, nome: "al_3", sobrenome:"al_3sb" , telefone:"333-333"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
