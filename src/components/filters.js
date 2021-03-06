import React from 'react';
import useFilterHook from '../CustomHooks/filterHooks';
import { ACTIONS } from '../redux';

import {  useDispatch } from 'react-redux';

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
    title: 'Title',
  },
  {
    type: 'Text',
    default: '',
    selected: '',
    list: [],
    optional: false,
    queryParamKey: 'firstName',
    placeholder: 'Search by FirstName',
    title: 'First Name',
  },
  {
    type: 'Text',
    default: '',
    selected: '',
    list: [],
    optional: false,
    queryParamKey: 'lastName',
    placeholder: 'Search by LastName',
    title: 'Last Name',
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

  const authorFiltering = () => {
    dispatch({
      type: ACTIONS.FILTER_AUTHORS,
      payload: {
        search_keys: inputs
      },
    });
  }

  const {inputs, handleInputChange, handleSubmit} = useFilterHook({ }, authorFiltering);
  return (
    <div>
      <h4> Filters </h4>
      <form onSubmit={handleSubmit} autoComplete="off">
      {filterTypes.map((filter) => (
        <article className='card-group-item' key={`${filter.title}`}>
          <header className='card-header'>
            <h6 className='filter-header border-bottom border-3'>
              {filter.title}
            </h6>
          </header>
          <div className='filter-content'>
            <div className='card-body'>
              {filter.type === 'Radio' ? (
                filter.list.map((item) => (
                  <label className='form-check' key={`${item.label}`}>
                    <input
                      className='form-check-input'
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
          </div>
        </article>
      ))}
      <br />
      <button type='submit' className='btn btn-outline-warning right'>
        Apply
      </button>
      </form>
    </div>
  );
};

Filter.displayName = 'Filter';

export default Filter;
