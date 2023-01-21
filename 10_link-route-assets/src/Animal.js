//import cat from './assets/images/cat.jpg';
export default function Animal() {
  return (
    <div>
      {/**<img src={cat} alt="cat image"/> with import statement*/}
      <img class="animal-img" src={require("./assets/images/cat.jpg")} alt="cat img" />
    </div>
  );
}
