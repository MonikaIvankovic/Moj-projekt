import IconDownload from "../../../assets/icons/download";
import IconMoney from "../../../assets/icons/money";
import Button from "../../../components/button";
import Container from "../../../components/container";
import Devider from "../../../components/devider";
import Input from "../../../components/input";
import Modal from "../../../components/modal";

const Home = () => {
  return (
    <Container>
      <h1>Hello World!</h1>
      <Button color="green" text="Click me" />
      <Devider marginBottom="md" marginTop="md" />
      <h1>Neki naslov</h1>
      <div>neki text</div>
      <Input
        placeholder="name"
        disabled={false}
        size="sm"
        icon={<IconDownload />}
      />
      <Devider marginBottom="md" marginTop="md" />
      <Modal>
        <Input
          placeholder="name"
          disabled={false}
          size="sm"
          icon={<IconMoney />}
        />
      </Modal>
    </Container>
  );
};
export default Home;
