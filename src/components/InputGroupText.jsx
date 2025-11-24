function InputGroupText({name, id, placeholder, type="text"}) {
  return (
    <input
      className="addForm__input"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
}

export default InputGroupText;