import { useEffect, useState } from "react";
import axios from "axios";
import { Header, Icon, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((Response) => {
      setActivities(Response.data);
    });
  }, []);

  return (
    <>
      <div>
        <Header as="h2">
          <Icon name="users"></Icon>
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}> {activity.title}</List.Item>
          ))}
        </List>
      </div>
    </>
  );
}

export default App;
