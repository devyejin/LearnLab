import Welcome from "./Welcome";
import NotLogin from "./NotLogin";
import Page from "./Page";
import OtherPage from "./OtherPage";

import PackingList from "./PackingList";

function App() {
  const userType = "manager";
  return (
    <>
      {/* <PackingList></PackingList> */}
      <Welcome></Welcome>
      <hr />
      <NotLogin></NotLogin>
      <hr />
      <Page userType={userType}></Page>
      <hr />
      <OtherPage userType={userType}></OtherPage>

      <hr />
      <hr />
      <PackingList></PackingList>
    </>
  );
}

export default App;
