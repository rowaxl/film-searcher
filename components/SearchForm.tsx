import { FormEvent, ChangeEvent, useState } from 'react';

interface SearchFormProps {
  onSubmit: (query: string) => void
}

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(inputValue);
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  return (
    <form className="d-flex justify-content-between" onSubmit={handleOnSubmit}>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Enter some words for searching films"
          value={inputValue}
          onChange={handleOnChange}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
              <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
            </svg>
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchForm;
