import styled from "styled-components";
import ContactList from "./components/ContactList";
import ConversationList from "./components/ConversationList";
import ChatIcon from "@mui/icons-material/Chat";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import GroupIcon from "@mui/icons-material/Group";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #f8f9fb;
`;

function App() {
  return (
    <Container>
      <div>
        {/* Corrected style object syntax */}
        <ChatIcon style={{ color: "black", fontSize: 10 }} />
        <WhatsAppIcon style={{ color: "green", fontSize: 18 }} />
        <MenuIcon style={{ color: "black", fontSize: 18 }} />
        <GroupIcon style={{ color: "black", fontSize: 18 }} />
      </div>
      <ContactList />
      <ConversationList />
    </Container>
  );
}

export default App;
