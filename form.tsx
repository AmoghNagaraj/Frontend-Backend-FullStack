import { useForm } from 'react-hook-form';

type FormData = {
  username: string;
  phone: string;
};

export default function UserForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle API call here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username:</label>
        <input {...register('username')} placeholder="Username" />
      </div>

      <div>
        <label>Phone:</label>
        <input {...register('phone')} placeholder="Phone" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

import { createUser } from '../services/api';

export default function UserForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await createUser(data);
      alert('User created successfully!');
    } catch (error) {
      console.error('Error creating user', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* form fields here */}
    </form>
  );
}
