export default function Toolbar({ onPlayMovie, onUploadImg }) {
  return (
    <div className="toolbar">
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImg}>Upload Image</Button>
    </div>
  );
}
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
export function RToolbar() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing a movie")}
      onUploadImg={() => alert("Uploading an image")}
    ></Toolbar>
  );
}
