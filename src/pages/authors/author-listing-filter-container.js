import React from 'react';
import { useDispatch } from 'react-redux';

import useFilterHook from '../../hooks/useFilterHooks';
import { authorsFiltering } from './author-slice';
import { useTranslation } from "react-i18next";


const filterTypes = [
  {
    type: 'Radio',
    default: 'mr',
    selected: 'Mr',
    list: [
      { label: 'All', value: 'All' },
      { label: 'Mr.', value: 'mr' },
      { label: 'Miss.', value: 'miss' },
    ],
    optional: false,
    queryParamKey: 'title',
    placeholder: null,
    title: 'title',
  },
  {
    type: 'Text',
    default: '',
    selected: '',
    list: [],
    optional: false,
    queryParamKey: 'firstName',
    placeholder: 'Search by FirstName',
    title: 'first_name',
  },
  {
    type: 'Text',
    default: '',
    selected: '',
    list: [],
    optional: false,
    queryParamKey: 'lastName',
    placeholder: 'Search by LastName',
    title: 'last_name',
  },
  {
    type: 'Text',
    default: '',
    selected: '',
    list: [],
    optional: false,
    queryParamKey: 'email',
    placeholder: 'Search by Email',
    title: 'Email',
  },
];



const Filter = () => {
  const dispatch = useDispatch();
  const { t: translation  } = useTranslation();

  const filtering = () => {
    dispatch(authorsFiltering({ search_keys: inputs }));
  }

  const {inputs, handleInputChange, handleSubmit} = useFilterHook({ }, filtering);
  return (
    <div>
      <h4> {translation('filters')} </h4>
      <form onSubmit={handleSubmit} autoComplete="off">
      {filterTypes.map((filter) => (
        <article className='card-group-item' key={`${filter.title}`}>
          <header className='card-header'>
            <h6 className='border-bottom border-3'>
              {translation(filter.title)}
            </h6>
          </header>
            <div className='card-body'>
              {filter.type === 'Radio' ? (
                filter.list.map((item) => (
                  <label className='form-check' key={`${item.label}`}>
                    <input
                      type='radio'
                      name={filter.queryParamKey}
                      value={item.value} 
                      onChange={ handleInputChange}
                      
                    />
                    <span className='form-check-label'> {item.label}</span>
                  </label>
                ))
              ) : (
                <input
                  className='form-check-input'
                  type='text'
                  name={filter.queryParamKey}
                  onChange={handleInputChange}
                />
              )}
            </div>
        </article>
      ))}
      <br />
      <button type='submit' className='btn btn-primary left'>
        { translation('apply')}
      </button>
      </form>
    </div>
  );
};

Filter.displayName = 'Filter';
export default Filter;
