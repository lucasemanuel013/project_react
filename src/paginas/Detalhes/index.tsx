import React, { useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { EstiloDetalhes } from './styles';

interface ParametrosRota {
  id: string;
}

interface Disciplina {
  id: string;
  disciplina: string;
  professor: string;
  diaSemana: string;
  periodo: string;
  horario: string;
}

export const Detalhes: React.FC<
  RouteComponentProps<ParametrosRota>
> = props => {
  const { match } = props;
  const { id } = match.params;

  function renderizarProfessor() {
    const disciplinas = localStorage.getItem('disciplinas');
    if (disciplinas) {
      const disciplinasArr: Disciplina[] = JSON.parse(disciplinas);

      const professorRequerido = disciplinasArr.find(p => p.id === id);
      const professorDisciplinas = disciplinasArr.filter(p => {
        return (
          p.professor.toLowerCase() ===
          professorRequerido?.professor.toLowerCase()
        );
      });

      if (professorDisciplinas.length > 0) {
        return professorDisciplinas.map(item => (
          <article key={item.id}>
            <p>{`Nome: ${item.professor}`}</p>
            <p>{`Disciplina: ${item.disciplina}`}</p>
            <p>{`Dia da semana: ${item.diaSemana}`}</p>
            <p>{`Periodo: ${item.periodo}`}</p>
            <p>{`Horário: ${item.horario}`}</p>
          </article>
        ));
      }
    }

    return '';
  }

  return (
    <EstiloDetalhes>
      <h1>Detalhes</h1>
      <div>
        {renderizarProfessor()}
        <Link to="/">
          <FiArrowLeft size={24} />
        </Link>
      </div>
    </EstiloDetalhes>
  );
};
