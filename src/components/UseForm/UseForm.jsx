const UserForm = () => {
  return (
    <>
      <div className="form-control">
        <label htmlFor="name">nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu e-mail"
          required
        />
      </div>
    </>
  );
};

export default UserForm;
