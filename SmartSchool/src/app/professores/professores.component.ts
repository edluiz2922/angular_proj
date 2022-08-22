import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  
  public varProfSelecionado!: string;

  public titulo = '--Professores--';

  public professores =[
    {id:1 , nome: "prof_01", disciplina:"disc_1"},
    {id:2 , nome: "prof_02", disciplina:"disc_2"},
    {id:3 , nome: "prof_03", disciplina:"disc_3"},
   ];
   
  constructor() { }

  ngOnInit() {
  }

  funcProf_Select (varProf:any){
    this.varProfSelecionado = varProf.nome;
  }

  voltar_prof(){
    this.varProfSelecionado = '';
  }

}
