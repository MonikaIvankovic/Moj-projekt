import IconDownload from "./assets/icons/download";
import Button from "./components/button";
import Container from "./components/container";
import Devider from "./components/devider";
import Input from "./components/input";
import "./styles/styles.scss";
function App() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <Button color="green" text="Click me" />
      <Devider marginBottom="md" marginTop="md" />
      <h1>Neki naslov</h1>
      <div>neki text</div>
      <Input placeholder="name" size="sm" icon={<IconDownload />} />
    </Container>
  );
}

export default App;
