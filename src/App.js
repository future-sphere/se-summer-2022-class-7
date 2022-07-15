import React from 'react';
import './App.css';

// const person = {
//   firstName: 'Peter',
//   lastName: 'Zheng',
// };

// person.firstName;
// person.lastName;

// const key = 'lastName';

// person[key]; // 'Zheng'

const inputs = [
  {
    name: 'email',
    type: 'email',
    id: 'email',
    placeholder: 'you@example.com',
    label: 'Email',
    defaultValue: '',
  },
  {
    name: 'username',
    type: 'text',
    id: 'username',
    placeholder: 'peter.zheng88228',
    label: 'Username',
    defaultValue: '',
  },
];

function App() {
  const [form, setForm] = React.useState(
    inputs.map((input) => ({ [input.name]: input.defaultValue })),
  );

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className='p-4 space-y-4'>
      {inputs.map((input, index) => (
        <div key={index}>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            {input.label}
          </label>
          <div className='mt-1'>
            <input
              onChange={handleChange}
              value={form[input.name]}
              type={input.type}
              name={input.name}
              id={input.id}
              placeholder={input.placeholder}
              className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
            />
          </div>
        </div>
      ))}

      <h1 className='mt-2'>
        Name: {form['username']}, Email: {form['email']}
      </h1>
    </div>
  );
}

export default App;
