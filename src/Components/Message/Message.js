export function Message({ message }) {
  console.log("Msg recived", message);
  return <h1>{message?.message}</h1>;
}
