import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Ialuno } from '../models/Ialuno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {


  public alunoSelecionado!: Ialuno;

  public titulo = "-- Aluno --"

  public alunos =[
    {id: 1, nome: "al_1", sobrenome:"al_1sb" , telefone:"111-111"},
    {id: 2, nome: "al_2", sobrenome:"al_2sb" , telefone:"222.222"},
    {id: 3, nome: "al_3", sobrenome:"al_3sb" , telefone:"333-333"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  alunoSelect(aluno:Ialuno){
    this.alunoSelecionado = aluno;
  }
  voltar(){
     this.alunoSelecionado = null;
     /* no caso só aceita null se for no arquivo tsconfig.json
     e mudar o   "strict": false,
     */
  }

}
