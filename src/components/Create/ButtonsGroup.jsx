

function ButtonsGroup({labelText}){
  return(
    <label className="button">
          {labelText}
          <input
            // onChange={handlePhoto}
            className="addForm__hidden"
            type="file"
          />
        </label>
  );
}
export default ButtonsGroup;