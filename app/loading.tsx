import Spinner from "./_components/Spinner";

function loading() {
  return (
    <div className="gap-4 w-[100vw] h-[80vh] flex items-center justify-center">
      <Spinner />
    </div>
  );
}

export default loading;
