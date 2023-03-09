
export const Pokemon = ({name, id}) => {
  return (
    <blockquote className="blockquote text-rigth" >
                <p className="mb-1">{name}</p>
                <footer className="blockquote-footer">{id}</footer>
            </blockquote>

           )
}
