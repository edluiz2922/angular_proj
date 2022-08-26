import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { Ialuno } from '../models/Ialuno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunoForm: FormGroup;
  public alunoSelecionado!: Ialuno;

  public titulo = "-- Aluno --"

  public alunos =[
    {id: 1, nome: "al_1", sobrenome:"al_1sb" , telefone:"111-111"},
    {id: 2, nome: "al_2", sobrenome:"al_2sb" , telefone:"222.222"},
    {id: 3, nome: "al_3", sobrenome:"al_3sb" , telefone:"333-333"},
    {id: 4, nome: "al_4", sobrenome:"al_1sb" , telefone:"111-111"},
    {id: 5, nome: "al_5", sobrenome:"al_2sb" , telefone:"222.222"},
    {id: 6, nome: "al_6", sobrenome:"al_3sb" , telefone:"333-333"},
    {id: 4, nome: "al_4", sobrenome:"al_1sb" , telefone:"111-111"},
    {id: 5, nome: "al_5", sobrenome:"al_2sb" , telefone:"222.222"},
    {id: 6, nome: "al_6", sobrenome:"al_3sb" , telefone:"333-333"},
  ];
  constructor(private fb: FormBuilder)
   {
    this.criarForm();

    }

  ngOnInit(): void {
  }

  alunoSelect(aluno:Ialuno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
    /* 
    não usou o setValue pq ele iria pegar 
    um por vez  e o patchValue pega tudo
     */
  }
  voltar(){
     this.alunoSelecionado = null;
     /* no caso só aceita null se for no arquivo tsconfig.json
     e mudar o   "strict": false,
     */
  }

    
  criarForm(){
    this.alunoForm = this.fb.group(
      {
      nome:['', Validators.required],
      sobrenome:['', Validators.required],
      telefone:['', Validators.required],
     });

  }
  alunoSubmit()
  {
    console.log(this.alunoForm.value);   

  }  

}
