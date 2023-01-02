import Bowl from "./Bowl";
export default function Puppy(props) {
  return (
    <div>
      {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
    </div>
  );
}
