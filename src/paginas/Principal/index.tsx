import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiBookOpen } from 'react-icons/fi';

import { EstiloPrincipal } from './styles';

interface Disciplina {
  id: string;
  disciplina: string;
  professor: string;
  diaSemana: string;
  periodo: string;
  horario: string;
}

export const Principal = () => {
  const [disciplina, setDisciplina] = useState('');
  const [professor, setProfessor] = useState('');
  const [diaSemana, setDiaSemana] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [horario, setHorario] = useState('');

  const [recemCriado, setRecemCriado] = useState(false);

  function professorRecemCriado(nome: string) {
    const id = localStorage.getItem('id');

    return (
      <>
        <Link to={`/detalhes/${id}`}>
          <strong>{nome}</strong>
          <FiArrowRight size={24} />
        </Link>
      </>
    );
  }

  function listarTodasDisciplinas() {
    const disciplinasStorage = localStorage.getItem('disciplinas');

    if (disciplinasStorage) {
      const disciplinaArr: Disciplina[] = JSON.parse(disciplinasStorage);
      return disciplinaArr.map(item => (
        <h6 key={item.id}>
          <Link to={`/detalhes/${item.id}`}>
            {`Nome: ${item.professor}`}
            <FiBookOpen size={24} />
          </Link>
        </h6>
      ));
    }

    return '';
  }

  const handleSubmit = () => {
    if (!disciplina && !professor && !diaSemana && !periodo && !horario) {
      return;
    }

    const disciplinasStorage = localStorage.getItem('disciplinas');

    if (!disciplinasStorage) {
      const disciplinas = [];
      disciplinas.push({
        id: '1',
        disciplina,
        professor,
        diaSemana,
        periodo,
        horario,
      });

      localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
      localStorage.setItem('id', '1');
      setRecemCriado(true);
    }

    if (disciplinasStorage) {
      const disciplinasArr = JSON.parse(disciplinasStorage);
      const id = localStorage.getItem('id');

      disciplinasArr.push({
        id: `${Number(id) + 1}`,
        disciplina,
        professor,
        diaSemana,
        periodo,
        horario,
      });

      localStorage.setItem('disciplinas', JSON.stringify(disciplinasArr));
      localStorage.setItem('id', `${Number(id) + 1}`);
      setRecemCriado(true);
    }
  };

  return (
    <>
      <EstiloPrincipal>
        <form>
          <h1>Cadastrar Disciplina</h1>
          <div>
            <p>Disciplina: </p>
            <input
              type="text"
              name="disciplina"
              onChange={event => setDisciplina(event.target.value)}
            />
          </div>
          <div>
            <p>Professor: </p>
            <input
              type="text"
              name="professor"
              onChange={event => setProfessor(event.target.value)}
            />
          </div>
          <div>
            <p>Dia da semana: </p>
            <input
              type="text"
              name="dia_semana"
              onChange={event => setDiaSemana(event.target.value)}
            />
          </div>
          <div>
            <p>Periodo: </p>
            <input
              type="number"
              name="text"
              onChange={event => setPeriodo(event.target.value)}
            />
          </div>
          <div>
            <p>Horário: </p>
            <input
              type="text"
              name="horario"
              onChange={event => setHorario(event.target.value)}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Cadastrar
          </button>
        </form>
        {recemCriado ? professorRecemCriado(professor) : ''}
        <div>{listarTodasDisciplinas()}</div>
      </EstiloPrincipal>
    </>
  );
};
