import AddUsers from "./components/addUsers";
export default function Home() {
  return (
    <>
      <div className="home-page-wrapper">
        <div className="add-userComponent">
          <AddUsers />
        </div>
      </div>
    </>
  );
}
