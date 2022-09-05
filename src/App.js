import './App.css';
import { useState } from 'react';
import Tippy from '@tippyjs/react';

let initialState = [
  {
    id: 1,
    nome: 'Estudar React',
  },
  {
    id: 2,
    nome: 'Estudar Node',
  },
  {
    id: 3,
    nome: 'Estudar React Native',
  },
  {
    id: 4,
    nome: 'Estudar Next',
  }
];

function App() {
  const [atividades, setAtividades] = useState(initialState);

  function handleAddAtividade(e) {
    e.preventDefault();
    const atividade = {
      id: document.getElementById('id').value,
      nome: document.getElementById('nome').value,
    };
    setAtividades([...atividades, { ...atividade }]);
    
  }

  return (
    <>
      <form className='row g-3'>
        <div className="col-md-6">
          <label className="form-label">Id</label>
          <input type="text" className="form-control" id="id" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" id="nome" />
        </div>
        <hr />
        <div className="col-12">
          <button
            className="btn btn-outline-secondary"
            onClick={handleAddAtividade}>
            + Adicionar
          </button>
        </div>
      </form>

      <div className='mt-3'>
        {atividades.map((ativ) => (
          <div key={ativ.id} className="card mb-2 shadow-sm">
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h6 className="card-title">
                  <span className='badge bg-secondary me-1'>
                    {ativ.id}
                  </span>
                  - titulo
                </h6>
                <h6>
                  Prioridade:
                  <span className='ms-1 text-black'>
                      <i class='me-1 far fa-meh'></i>
                      Normal
                  </span>
                </h6>
              </div>
                <p className="card-text">{ativ.nome}</p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                  <Tippy content='Editar'>
                    <button className='btn btn-sm btn-outline-primary me-2'>
                      <i className='fas fa-edit'></i>
                    </button>
                  </Tippy>
                  <Tippy content='Deletar'>
                    <button className='btn btn-sm btn-outline-danger me-2' placeholder='Deletar'>
                      <i className='fas fa-trash'></i>
                    </button>
                  </Tippy>
                </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
